import React, { memo } from 'react';
import styled from '@emotion/styled';
import { theme } from '../../../theme';
import { Article } from './Article';
import { ListArticlesQueryNode } from '../../../data/queries/list-articles';

const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: auto;
  gap: ${theme.spacing(3)};
  @media (min-width: ${theme.breakpoints.sm}px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${theme.breakpoints.lg}px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

type ArticleGridProps = {
  className?: string;
  articles: ListArticlesQueryNode[];
};
export const ArticleGrid = memo<ArticleGridProps>(function ({ articles, className }) {
  return (
    <Grid>
      {articles.map(article => (
        <Article key={article.id} article={article} />
      ))}
    </Grid>
  );
});
