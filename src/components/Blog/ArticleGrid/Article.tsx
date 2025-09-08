import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { theme } from '../../../theme';
import React, { memo } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ListArticlesQueryNode } from '../../../data/queries/list-articles';

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 2px solid ${theme.cardBorder};
  flex-grow: 0;
  flex-shrink: 0;
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
  display: flex;
  flex-direction: column;
`;

const CardContent = styled.div`
  padding: ${theme.spacing(3)};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Title = styled.h3`
  ${theme.h3}
  margin-bottom: ${theme.spacing(1)};
  color: ${theme.text.light};
`;

const Text = styled.p`
  ${theme.bodyLg}
  margin-bottom: ${theme.spacing(3)};
  color: ${theme.text.middle};
`;

const Date = styled.p`
  ${theme.bodySmMed}
  color: ${theme.text.dark};
  margin-top: auto;
`;

export type ArticleProps = {
  article: ListArticlesQueryNode;
};

export const Article = memo<ArticleProps>(function ListArticle({ article }) {
  const image = article.frontmatter.header_image?.childImageSharp?.gatsbyImageData;
  const title = article.frontmatter.title;
  const sub_header = article.frontmatter.sub_header;
  const shortDescription = article.frontmatter.short_description;
  const date = article.frontmatter.date;

  return (
    <Card to={`/articles/${article.fields.slug}`}>
      <ImageContainer>{!!image ? <Image image={image} alt="" /> : null}</ImageContainer>
      <CardContent>
        <Title>{sub_header || title || 'no title'}</Title>
        <Text>{shortDescription}</Text>
        <Date>{date}</Date>
      </CardContent>
    </Card>
  );
});
