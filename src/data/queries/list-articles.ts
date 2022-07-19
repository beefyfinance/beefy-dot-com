import { FileNode } from 'gatsby-plugin-image/dist/src/components/hooks';
import { graphql } from 'gatsby';

export type ListArticles = {
  edges: ListArticlesQueryEdge[];
};

export type ListArticlesQueryEdge = {
  node: ListArticlesQueryNode;
};

export type ListArticlesQueryNode = {
  id: string;
  frontmatter: {
    title?: string;
    sub_header?: string;
    date?: string;
    short_description?: string;
    header_image?: FileNode;
  };
  fields: {
    slug: string;
  };
};

export const listArticleFragment = graphql`
  fragment ListArticleFragment on MarkdownRemark {
    id
    frontmatter {
      title
      date(formatString: "MMMM D, YYYY")
      short_description
      sub_header
      header_image {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            width: 568
            breakpoints: [290, 352, 568]
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
`;
