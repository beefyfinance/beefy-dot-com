import React, { memo } from 'react';
import { graphql } from 'gatsby';
import { Meta } from '../../components/Common/Meta';
import { ArticleGrid } from '../../components/Blog/ArticleGrid';
import { Inner } from '../../components/Common/Inner';
import styled from '@emotion/styled';
import { theme } from '../../theme';
import { ArticlePagination } from '../../components/Blog/ArticlePagination';
import { ListArticles } from '../../data/queries/list-articles';

type TagTemplateProps = {
  data: {
    allMarkdownRemark: ListArticles;
  };
  pageContext: {
    tag: string;
    limit: number;
    skip: number;
    numPages: number;
    currentPage: number;
  };
};

const Outer = styled.div`
  padding: ${theme.spacing(7.5)} 0;
`;

const Pagination = styled(ArticlePagination)`
  margin-top: ${theme.spacing(3)};
`;

const TagTemplate: React.FC<TagTemplateProps> = ({ data, pageContext }) => {
  const articles = data.allMarkdownRemark.edges.map(edge => edge.node);
  const { tag, currentPage, numPages } = pageContext;

  return (
    <Outer>
      <Inner>
        <ArticleGrid articles={articles} />
        <Pagination currentPage={currentPage} numPages={numPages} tag={tag} />
      </Inner>
    </Outer>
  );
};

export const Head = ({ pageContext: { tag } }: TagTemplateProps) => (
  <Meta title={`Posts tagged with "${tag}"`} description={`Articles tagged with "${tag}"`} />
);

export const pageQuery = graphql`
  query ($skip: Int!, $limit: Int!, $tag: String) {
    allMarkdownRemark(
      filter: { frontmatter: { tags: { in: [$tag] }, draft: { ne: true } } }
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

export default TagTemplate;
