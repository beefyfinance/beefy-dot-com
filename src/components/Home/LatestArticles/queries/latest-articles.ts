import { graphql, useStaticQuery } from 'gatsby';
import { FileNode } from 'gatsby-plugin-image/dist/src/components/hooks';

export type LatestArticlesQueryResult = {
  allMarkdownRemark: {
    edges: LatestArticlesQueryEdge[];
  };
};

export type LatestArticlesQueryEdge = {
  node: {
    id: string;
    frontmatter: {
      title?: string;
      date?: string;
      short_description?: string;
      header_image?: FileNode;
    };
    fields: {
      slug: string;
    };
  };
};

export function useLatestArticles(): LatestArticlesQueryEdge[] {
  const result = useStaticQuery<LatestArticlesQueryResult>(graphql`
    query latestArticles {
      allMarkdownRemark(
        filter: { frontmatter: { draft: { ne: true } } }
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 4
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "MMMM D, YYYY")
              short_description
              header_image {
                childImageSharp {
                  gatsbyImageData(
                    layout: CONSTRAINED
                    width: 290
                    aspectRatio: 1.7777
                    placeholder: BLURRED
                  )
                }
              }
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return result.allMarkdownRemark.edges;
}
