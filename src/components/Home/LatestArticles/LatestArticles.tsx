import React, { memo } from 'react';
import styled from '@emotion/styled';
import { useLatestArticles } from '../../../data/queries/latest-articles';
import { theme } from '../../../theme';
import { Section } from '../Section';
import { PrimaryLink } from '../../Common/Buttons';
import { ArticleGrid } from '../../Blog/ArticleGrid';

const Buttons = styled.div`
  text-align: center;
  margin-top: ${theme.spacing(7)};
`;

export const LatestArticles = memo(function LatestArticles() {
  const articles = useLatestArticles();

  return (
    <Section title="News" subtitle="Keep up to date with Beefy">
      <ArticleGrid articles={articles} />
      <Buttons>
        <PrimaryLink to="/articles">View all Articles</PrimaryLink>
      </Buttons>
    </Section>
  );
});
