import React, { memo } from 'react';
import styled from '@emotion/styled';
import { theme } from '../../../theme';

interface CardProps {
  index: number;
  title: string;
  description: string;
}

const CardContainer = styled.div`
  border: 2px solid ${theme.cardHeader};
  background-color: ${theme.cardBg};
  padding: calc(${theme.spacing(3)} - 2px);
  border-radius: 12px;
`;

const Circle = styled.div`
  ${theme.h3};
  color: ${theme.text.middle};
  background-color: ${theme.cardLight};
  border-radius: 40px;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${theme.spacing(1.5)};
`;

const Title = styled.div`
  ${theme.h3};
  color: ${theme.text.light};
  margin-bottom: ${theme.spacing(1)};
`;

const Description = styled.div`
  ${theme.bodyLg};
  color: ${theme.text.middle};
`;

export const Card = memo<CardProps>(function Card({ index, title, description }) {
  return (
    <CardContainer>
      <Circle>{index}</Circle>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </CardContainer>
  );
});
