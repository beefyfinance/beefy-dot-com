import { graphql, useStaticQuery } from 'gatsby';
import { useMemo } from 'react';
import { ListArticlesQueryEdge, ListArticlesQueryNode } from './list-articles';

export type LatestArticlesQueryResult = {
  allMarkdownRemark: {
    edges: ListArticlesQueryEdge[];
  };
};

const latestArticlesQuery = graphql`
  query latestArticles {
    allMarkdownRemark(
      filter: { frontmatter: { draft: { ne: true } } }
      sort: { frontmatter: { date: DESC } }
      limit: 4
    ) {
      edges {
        node {
          ...ListArticleFragment
        }
      }
    }
  }
`;

export function useLatestArticles(): ListArticlesQueryNode[] {
  const result = useStaticQuery<LatestArticlesQueryResult>(latestArticlesQuery);
  return useMemo(() => result.allMarkdownRemark.edges.map(edge => edge.node), [result]);
}
