import React, { memo, useMemo } from 'react';
import { graphql } from 'gatsby';
import { Meta } from '../../components/Common/Meta';
import { ArticleGrid } from '../../components/Blog/ArticleGrid';
import { Inner } from '../../components/Common/Inner';
import { ListArticles } from '../../data/queries/list-articles';
import styled from '@emotion/styled';
import { theme } from '../../theme';
import { ArticlePagination } from '../../components/Blog/ArticlePagination';
import { Outer } from '../../components/Outer';

type TemplateProps = {
  data: {
    allMarkdownRemark: ListArticles;
  };
  pageContext: {
    limit: number;
    skip: number;
    numPages: number;
    currentPage: number;
    tag?: string;
  };
};

const Pagination = styled(ArticlePagination)`
  margin-top: ${theme.spacing(3)};
`;

const Header = styled.h1`
  font-weight: 500;
  margin-bottom: 20px;
  @media (min-width: ${theme.breakpoints.md}px) {
    margin-bottom: 24px;
  }
`;

const Template = memo<TemplateProps>(function Template({ data, pageContext }) {
  const articles = useMemo(
    () => data.allMarkdownRemark.edges.map(edge => edge.node),
    [data.allMarkdownRemark.edges]
  );

  return (
    <Outer>
      <Inner>
        <Header>News</Header>
        <ArticleGrid articles={articles} />
        <Pagination currentPage={pageContext.currentPage} numPages={pageContext.numPages} />
      </Inner>
    </Outer>
  );
});

export const Head = () => (
  <Meta title="News" description="Keep up to date with the latest Beefy News articles." />
);

export const pageQuery = graphql`
  query ($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { frontmatter: { draft: { ne: true } } }
      sort: { frontmatter: { date: DESC } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          ...ListArticleFragment
        }
      }
    }
  }
`;

export default Template;
