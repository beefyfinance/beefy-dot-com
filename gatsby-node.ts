import { BuildArgs, CreateNodeArgs, GatsbyNode, SourceNodesArgs } from 'gatsby';
import path from 'path';
import slugify from 'slugify';
import { BlogArticlesQueryReturnType, isFileSystemNode, isMarkdownNode } from './gatsby-node-types';
import { getAllPrices, getBuyback, getTvls, getVaultsWithApy } from './src/data/api/beefy-api';

const BLOG_ARTICLES_PER_PAGE = 12;

async function createBlogPages({ graphql, actions }: BuildArgs) {
  const listTemplate = path.resolve('src/templates/blog/list.tsx');
  const articleTemplate = path.resolve('src/templates/blog/article.tsx');

  const result = await graphql<BlogArticlesQueryReturnType>(`
    query {
      allMarkdownRemark(filter: { frontmatter: { draft: { ne: true } } }) {
        edges {
          node {
            id
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

  // List page(s)
  const edges = result.data.allMarkdownRemark.edges;
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
  edges.forEach(edge => {
    actions.createPage({
      path: `articles/${edge.node.fields.slug}`,
      component: articleTemplate,
      context: {
        id: edge.node.id,
      },
    });
  });
}

export const createPages: GatsbyNode['createPages'] = async function (args: BuildArgs) {
  await Promise.all([createBlogPages(args)]);
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

async function sourceBeefyBuyback({
  actions: { createNode },
  createContentDigest,
  createNodeId,
}: SourceNodesArgs) {
  const buybacks = await getBuyback();

  Object.entries(buybacks).forEach(([chain, buyback]) => {
    createNode({
      chain: chain,
      usd: buyback.usd,
      tokens: buyback.tokens,
      id: createNodeId(`BeefyBuyback-${chain}`),
      internal: {
        type: 'BeefyBuyback',
        contentDigest: createContentDigest([chain, buyback.usd]),
      },
    });
  });
}

export const sourceNodes: GatsbyNode['sourceNodes'] = async function (args) {
  await Promise.all([
    sourceBeefyVaults(args),
    sourceBeefyPrices(args),
    sourceBeefyTvl(args),
    sourceBeefyBuyback(args),
  ]);
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
  `);
};
