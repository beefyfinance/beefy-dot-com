import fetch from 'node-fetch';
import * as https from 'https';
import { createWriteStream, existsSync } from 'fs';
import pLimit from 'p-limit';
import { readFile, writeFile } from 'fs/promises';
import matter from 'gray-matter';
import * as toml from 'toml';
import escapeStringRegexp from 'escape-string-regexp';

const ARTICLES_SOURCE_URL =
  'https://api.github.com/repos/beefyfinance/beefy-blog/contents/content/articles';
const ARTICLES_DEST_PATH = 'src/content/blog';
const UPLOADS_SOURCE_URL =
  'https://api.github.com/repos/beefyfinance/beefy-blog/contents/static/uploads';
const UPLOADS_DEST_PATH = 'src/images/blog';
const UPLOADS_OLD_PATH = '/uploads';
const UPLOADS_NEW_PATH = '../../images/blog'; // relative to ARTICLES_DEST_PATH

const ARTICLE_REPLACEMENTS = [
  { search: UPLOADS_OLD_PATH, replace: UPLOADS_NEW_PATH },
  { search: '/moonbeam.png', replace: '/moonbeam-2.png' },
].map(({ search, replace }) => ({
  search: new RegExp(escapeStringRegexp(search), 'g'),
  replace: replace,
}));

async function getFileUrls(listUrl: string) {
  const response = await fetch(listUrl);
  const json = (await response.json()) as { name: string; download_url: string }[];

  return json.map(item => ({ name: item.name, url: item.download_url }));
}

const matterParserOptions = {
  engines: {
    toml: toml.parse.bind(toml),
  },
  delimiters: '+++',
  language: 'toml',
};

const matterExportOptions = {
  delimiters: '---',
  language: 'yaml',
};

async function migrateArticleContent(file: string) {
  const original = await readFile(file, 'utf-8');
  const parsed = matter(original, matterParserOptions);

  if (parsed.data && parsed.data.title) {
    parsed.language = matterExportOptions.language;

    const converted = ARTICLE_REPLACEMENTS.reduce(
      (content, { search, replace }) => content.replace(search, replace),
      matter.stringify(parsed, parsed.data, matterExportOptions)
    );

    await writeFile(file, converted, 'utf-8');
  }
}

async function fetchArticles() {
  const files = await getFileUrls(ARTICLES_SOURCE_URL);
  const filesToDownload = files
    .filter(file => file.name !== '_index.md')
    .map(file => ({ name: file.name.replace('.en', ''), url: file.url }));
  const limit = pLimit(2);

  const filePaths = await Promise.all(
    filesToDownload.map(file =>
      limit(() => downloadFile(file.url, ARTICLES_DEST_PATH + '/' + file.name))
    )
  );

  await Promise.all(filePaths.map(path => migrateArticleContent(path)));
}

async function fetchImages() {
  const files = await getFileUrls(UPLOADS_SOURCE_URL);
  const nonExistingFiles = files.filter(file => !existsSync(UPLOADS_DEST_PATH + '/' + file.name));
  const limit = pLimit(2);

  await Promise.all(
    nonExistingFiles.map(file =>
      limit(() => downloadFile(file.url, UPLOADS_DEST_PATH + '/' + file.name))
    )
  );
}

async function downloadFile(url: string, path: string): Promise<string> {
  return new Promise((resolve, reject) => {
    https
      .get(url, input => {
        const output = createWriteStream(path);

        input.on('error', reject);
        output.on('error', reject);

        output.on('finish', () => {
          output.close();
          resolve(path);
        });

        input.pipe(output);
      })
      .on('error', reject);
  });
}

async function run() {
  await Promise.all([fetchArticles(), fetchImages()]);
}

run().catch(err => console.error(err));
