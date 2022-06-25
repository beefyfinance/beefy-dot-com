import { BuildArgs, CreateNodeArgs } from 'gatsby';
import path from 'path';
import slugify from 'slugify';
import { BlogArticlesQueryReturnType, isFileSystemNode, isMarkdownNode } from './gatsby-node-types';

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

export const createPages = (args: BuildArgs) => {
  return Promise.all([createBlogPages(args)]);
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

export const onCreateNode = (args: CreateNodeArgs) => {
  return Promise.all([createMarkdownSlugField(args)]);
};
