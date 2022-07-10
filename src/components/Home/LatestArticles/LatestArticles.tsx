import React, { memo } from 'react';
import styled from '@emotion/styled';
import { Inner } from '../../Common/Inner';
import { LatestArticlesQueryEdge, useLatestArticles } from '../../../data/queries/latest-articles';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { theme } from '../../../theme';
import { Section } from '../Section';

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 2px solid ${theme.cardBorder};
`;

const Image = styled(GatsbyImage)`
  width: 100%;
  border-radius: 10px 10px 0px 0px;
`;

const Card = styled(Link)`
  background-color: ${theme.cardBg};
  border: 2px solid ${theme.cardBorder};
  border-radius: 12px;
  text-decoration: none;
`;

const CardContent = styled.div`
  padding: ${theme.spacing(3)};
`;

const Title = styled.h3({
  ...theme.h3,
  marginBottom: theme.spacing(1),
  color: theme.text.light,
});

const Text = styled.p({
  ...theme.bodyLg,
  marginBottom: theme.spacing(3),
  color: theme.text.middle,
});

const Date = styled.p({
  ...theme.bodySmMed,
  color: theme.text.dark,
});

type ArticleProps = {
  article: LatestArticlesQueryEdge['node'];
};
const Article = memo<ArticleProps>(function Article({ article }) {
  const image = article.frontmatter.header_image?.childImageSharp?.gatsbyImageData;
  const title = article.frontmatter.title;
  const shortDescription = article.frontmatter.short_description;
  const date = article.frontmatter.date;
  const hasImage = !!image;

  return (
    <Card to={`/articles/${article.fields.slug}`}>
      <ImageContainer>{hasImage ? <Image image={image} alt="" /> : null}</ImageContainer>
      <CardContent>
        <Title>{title || 'no title'}</Title>
        <Text>{shortDescription}</Text>
        <Date>{date}</Date>
      </CardContent>
    </Card>
  );
});

const ArticleList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: ${theme.spacing(3)};
`;

export const LatestArticles = memo(function LatestArticles() {
  const articles = useLatestArticles();

  return (
    <Section title="News" subtitle="Keep up to date with Beefy">
      <ArticleList>
        {articles.map(edge => (
          <Article key={edge.node.id} article={edge.node} />
        ))}
      </ArticleList>
    </Section>
  );
});
