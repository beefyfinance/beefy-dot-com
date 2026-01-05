import type { BuildArgs, CreateNodeArgs, GatsbyNode, SourceNodesArgs } from 'gatsby';
import path from 'path';
import slugify from 'slugify';
import {
  type BlogArticlesApiQueryReturnType,
  type BlogArticlesQueryReturnType,
  type BlogTagsQueryReturnType,
  isFileSystemNode,
  isMarkdownNode,
} from './gatsby-node-types';
import { getAllPrices, getTvls, getVaultsWithApy } from './src/data/api/beefy-api';
import { mkdir, writeFile } from 'fs/promises';

const BLOG_ARTICLES_PER_PAGE = 12;
const VALID_LEGACY_SLUGS = new Set<string>([
  'embrace-your-ownership.define-our-direction',
  'the-cows-love-classical-music...and-high-yields',
]);

function isValidSlug(slug: string): boolean {
  if (VALID_LEGACY_SLUGS.has(slug)) {
    return true;
  }
  const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
  return slugRegex.test(slug);
}

async function createBlogPages({ graphql, actions, reporter }: BuildArgs) {
  const listTemplate = path.resolve('src/templates/blog/list.tsx');
  const articleTemplate = path.resolve('src/templates/blog/article.tsx');
  const tagTemplate = path.resolve('src/templates/blog/tag.tsx');

  const [articlesResult, tagsResult] = await Promise.all([
    graphql<BlogArticlesQueryReturnType>(`
      query BlogArticles {
        allMarkdownRemark(filter: { frontmatter: { draft: { ne: true } } }) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                tags
                old_slugs
              }
            }
          }
        }
      }
    `),
    graphql<BlogTagsQueryReturnType>(`
      query BlogTags {
        allMarkdownRemark(limit: 2000) {
          group(field: { frontmatter: { tags: SELECT } }) {
            fieldValue
          }
        }
      }
    `),
  ]);

  if (articlesResult.errors || !articlesResult.data || tagsResult.errors || !tagsResult.data) {
    throw articlesResult.errors || tagsResult.errors || 'No data';
  }

  // List page(s)
  const edges = articlesResult.data.allMarkdownRemark.edges;
  const numPages = Math.ceil(edges.length / BLOG_ARTICLES_PER_PAGE);
  for (let i = 0; i < numPages; ++i) {
    actions.createPage({
      path: i === 0 ? 'articles' : `articles/page/${i + 1}`,
      component: listTemplate,
      context: {
        limit: BLOG_ARTICLES_PER_PAGE,
        skip: i * BLOG_ARTICLES_PER_PAGE,
        numPages,
        currentPage: i + 1,
      },
    });
  }

  // Each article
  const usedArticlePaths = new Set<string>();
  edges.forEach(edge => {
    if (!isValidSlug(edge.node.fields.slug)) {
      throw new Error(`Invalid slug '${edge.node.fields.slug}' for article ID ${edge.node.id}`);
    }
    const path = `articles/${edge.node.fields.slug}`;
    usedArticlePaths.add(path);
    actions.createPage({
      path,
      component: articleTemplate,
      context: {
        id: edge.node.id,
      },
    });
  });
  edges.forEach(edge => {
    const { old_slugs } = edge.node.frontmatter;
    if (old_slugs) {
      const toPath = `articles/${edge.node.fields.slug}`;
      old_slugs.forEach(oldSlug => {
        if (!isValidSlug(oldSlug)) {
          throw new Error(`Invalid old slug '${oldSlug}' for article ID ${edge.node.id}`);
        }
        const fromPath = `articles/${oldSlug}`;
        if (usedArticlePaths.has(fromPath)) {
          throw new Error(
            `Old slug path conflict: ${fromPath} -> ${toPath} but ${fromPath} is already used`
          );
        }
        reporter.info(`Creating redirect from ${fromPath} to ${toPath}`);
        usedArticlePaths.add(fromPath);
        actions.createRedirect({
          fromPath: `/${fromPath}`,
          toPath: `/${toPath}`,
          isPermanent: true,
        });
      });
    }
  });

  // Tag pages with pagination
  tagsResult.data.allMarkdownRemark.group.forEach(tag => {
    if (!isValidSlug(tag.fieldValue)) {
      throw new Error(`Invalid tag slug '${tag.fieldValue}'`);
    }
    const filteredEdges = edges.filter(
      edge => edge.node.frontmatter.tags && edge.node.frontmatter.tags.includes(tag.fieldValue)
    );
    const numTagPages = Math.ceil(filteredEdges.length / BLOG_ARTICLES_PER_PAGE);
    for (let i = 0; i < numTagPages; ++i) {
      actions.createPage({
        path:
          i === 0
            ? `articles/tag/${tag.fieldValue}`
            : `articles/tag/${tag.fieldValue}/page/${i + 1}`,
        component: tagTemplate,
        context: {
          tag: tag.fieldValue,
          limit: BLOG_ARTICLES_PER_PAGE,
          skip: i * BLOG_ARTICLES_PER_PAGE,
          numPages: numTagPages,
          currentPage: i + 1,
        },
      });
    }
  });
}

async function createBlogApi({ graphql }: BuildArgs) {
  const result = await graphql<BlogArticlesApiQueryReturnType>(`
    query BlogArticlesApi {
      allMarkdownRemark(
        filter: { frontmatter: { draft: { ne: true } } }
        sort: { frontmatter: { date: DESC } }
      ) {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "X")
              short_description
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors || !result.data) {
    throw result.errors || 'No data';
  }

  const articles = result.data.allMarkdownRemark.edges.map(edge => ({
    id: edge.node.fields.slug,
    title: edge.node.frontmatter.title,
    description: edge.node.frontmatter.short_description,
    date: Number(edge.node.frontmatter.date),
    url: `https://beefy.com/articles/${edge.node.fields.slug}`,
  }));

  const outputPath = path.join(__dirname, 'public', 'api', 'articles.json');
  const outputDirectory = path.dirname(outputPath);
  await mkdir(outputDirectory, { recursive: true });
  await writeFile(outputPath, JSON.stringify(articles));
}

export const createPages: GatsbyNode['createPages'] = async function (args: BuildArgs) {
  await Promise.all([createBlogPages(args), createBlogApi(args)]);
};

async function createMarkdownSlugField({ node, getNode, actions }: CreateNodeArgs) {
  if (!isMarkdownNode(node) || !node.parent) {
    return;
  }

  const fileNode = getNode(node.parent);
  if (!fileNode || !isFileSystemNode(fileNode)) {
    return;
  }

  const parsedFilePath = path.parse(fileNode.relativePath);
  let slug = slugify(parsedFilePath.name, {
    replacement: '-',
    locale: 'en',
    lower: true,
    trim: true,
  });

  if (node.frontmatter && node.frontmatter.slug) {
    slug = node.frontmatter.slug;
  }

  actions.createNodeField({
    name: 'slug',
    node,
    value: slug,
  });
}

export const onCreateNode: GatsbyNode['onCreateNode'] = async function (args) {
  await Promise.all([createMarkdownSlugField(args)]);
};

async function sourceBeefyVaults({
  actions: { createNode },
  createContentDigest,
  createNodeId,
}: SourceNodesArgs) {
  const vaults = await getVaultsWithApy();

  Object.values(vaults).forEach(vault => {
    createNode({
      ...vault,
      id: createNodeId(`BeefyVault-${vault.vaultId}`),
      internal: {
        type: 'BeefyVault',
        contentDigest: createContentDigest(vault),
      },
    });
  });
}

async function sourceBeefyPrices({
  actions: { createNode },
  createContentDigest,
  createNodeId,
}: SourceNodesArgs) {
  const prices = await getAllPrices();

  Object.entries(prices).forEach(([oracleId, price]) => {
    createNode({
      oracleId: oracleId,
      price: price,
      id: createNodeId(`BeefyPrice-${oracleId}`),
      internal: {
        type: 'BeefyPrice',
        contentDigest: createContentDigest([oracleId, price]),
      },
    });
  });
}

async function sourceBeefyTvl({
  actions: { createNode },
  createContentDigest,
  createNodeId,
}: SourceNodesArgs) {
  const tvls = await getTvls();

  Object.entries(tvls).forEach(([vaultId, tvl]) => {
    createNode({
      vaultId: vaultId,
      tvl: tvl,
      id: createNodeId(`BeefyTvl-${vaultId}`),
      internal: {
        type: 'BeefyTvl',
        contentDigest: createContentDigest([vaultId, tvl]),
      },
    });
  });
}

export const sourceNodes: GatsbyNode['sourceNodes'] = async function (args) {
  await Promise.all([sourceBeefyVaults(args), sourceBeefyPrices(args), sourceBeefyTvl(args)]);
};

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = async function ({
  actions: { createTypes },
}) {
  createTypes(`
    type BeefyVault implements Node @dontInfer {
      vaultId: String!
      name: String!
      oracleId: String!
      assets: [String!]!
      chain: String!
      status: String!
      totalApy: Float!
      totalDaily: Float!
    }
    
    type BeefyPrice implements Node @dontInfer {
      oracleId: String!
      price: Float!
    }
    
    type FeaturedVaultsJson implements Node {
      vaultId: String!
      vault: BeefyVault @link(by: "vaultId", from: "vaultId")
    }
    
    type MediaKitGroupsJson implements Node {
      groupId: String!
      label: String!
      items: [MediaKitItemsJson] @link(by: "groupId", from: "groupId")
    }
    
    type MediaKitItemsJson implements Node {
      itemId: String!
      label: String!
      groupId: String!
      group: MediaKitGroupsJson @link(by: "groupId", from: "groupId")
      background: String!
      versions: [String!]!   
    }
    
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter!
    }
    
    type Frontmatter {
      title: String!
      sub_header: String!
      short_description: String!
      date: Date! @dateformat
      header_image: File! @fileByRelativePath
      draft: Boolean
      tags: [String!]
      old_slugs: [String!]
    }
  `);
};
