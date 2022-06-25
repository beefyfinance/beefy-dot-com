import React, { memo } from 'react';
import styled from '@emotion/styled';
import { Inner } from '../../Common/Inner';
import { LatestArticlesQueryEdge, useLatestArticles } from './queries/latest-articles';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const Outer = styled.div``;

type ArticleProps = {
  article: LatestArticlesQueryEdge['node'];
};
const Article = memo<ArticleProps>(function Article({ article }) {
  const image = article.frontmatter.header_image?.childImageSharp?.gatsbyImageData;
  const hasImage = !!image;

  return (
    <Link to={`/articles/${article.fields.slug}`}>
      {hasImage ? <GatsbyImage image={image} alt="" /> : null}
      {article.frontmatter.title || 'no title'}
    </Link>
  );
});

const ArticleList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export const LatestArticles = memo(function LatestArticles() {
  const articles = useLatestArticles();

  return (
    <Outer>
      <Inner>
        <h2>Latest Articles</h2>
        <ArticleList>
          {articles.map(edge => (
            <Article key={edge.node.id} article={edge.node} />
          ))}
        </ArticleList>
      </Inner>
    </Outer>
  );
});
