import { extname } from 'node:path';
import { selectAll } from 'unist-util-select';
import type { NodePluginArgs } from 'gatsby';
import type { Html, Image, Root } from 'mdast';
import { getVideoHtml, type Options } from './utils.js';

type RemarkPluginArgs = NodePluginArgs & {
  markdownAST: Root;
};

export default async (args: RemarkPluginArgs, options: Options) => {
  const { markdownAST } = args;
  const imageNodes = selectAll('image', markdownAST) as Image[];

  const replacements = await Promise.all(
    imageNodes.map(async (node): Promise<Html | undefined> => {
      const isRelative = node.url.startsWith('./') || node.url.startsWith('../');
      if (!isRelative) {
        return undefined;
      }
      const fileType = extname(node.url).slice(1).toLowerCase();
      if (fileType !== 'mp4') {
        return undefined;
      }

      // @dev have to keep object reference so can't spread
      const editNode = node as unknown as Html;
      editNode.type = 'html';
      editNode.value = getVideoHtml({
        title: node.title || undefined,
        alt: node.alt || undefined,
        sources: [
          {
            src: node.url,
            mimeType: 'video/mp4',
          },
        ],
        options,
      });
      return editNode;
    })
  );

  return replacements.filter(Boolean);
};
