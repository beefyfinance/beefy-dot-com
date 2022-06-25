import React from 'react';
import { graphql, Link } from 'gatsby';
import { Meta } from '../../components/Common/Meta';
import { GatsbyImage } from 'gatsby-plugin-image';
import { IGatsbyImageData } from 'gatsby-plugin-image/dist/src/components/gatsby-image.browser';
import { FileNode } from 'gatsby-plugin-image/dist/src/components/hooks';

type TemplateProps = {
  data: {
    allMarkdownRemark: {
      edges: {
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
      }[];
    };
  };
  pageContext: {
    limit: number;
    skip: number;
    numPages: number;
    currentPage: number;
  };
};
export default function Template({ data, pageContext }: TemplateProps) {
  const edges = data.allMarkdownRemark.edges;

  return (
    <>
      <Meta title="Blog" description="Keep up to date with the latest Beefy Blog articles." />
      <div className="blog-post-container">
        {edges.map(edge => (
          <div key={edge.node.id}>
            <Link to={`/articles/${edge.node.fields.slug}`}>
              {edge.node.frontmatter.header_image?.childImageSharp?.gatsbyImageData ? (
                <GatsbyImage
                  image={edge.node.frontmatter.header_image?.childImageSharp?.gatsbyImageData}
                  alt=""
                />
              ) : null}
              {edge.node.frontmatter.title || 'no title'}
            </Link>
          </div>
        ))}
        {pageContext.numPages > 1 ? (
          <div>
            {pageContext.currentPage > 1 ? (
              <Link
                to={`/articles/${
                  pageContext.currentPage > 2 ? `page/${pageContext.currentPage - 1}/` : ''
                }`}
              >
                Previous
              </Link>
            ) : null}
            {pageContext.currentPage < pageContext.numPages ? (
              <Link to={`/articles/page/${pageContext.currentPage + 1}`}>Next</Link>
            ) : null}
          </div>
        ) : null}
      </div>
    </>
  );
}

export const pageQuery = graphql`
  query ($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { frontmatter: { draft: { ne: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
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
`;
