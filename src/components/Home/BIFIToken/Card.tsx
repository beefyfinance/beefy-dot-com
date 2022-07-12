import React, { memo } from 'react';
import styled from '@emotion/styled';
import { theme } from '../../../theme';
import { PrimaryAnchor } from '../../Common/Buttons';

const CustomCard = styled.div`
  background: ${theme.cardBg};
  border-radius: 12px;
  border: 2px solid ${theme.cardBorder};
  padding: calc(${theme.spacing(3)} - 2px);
`;

const Title = styled.h3({ ...theme.h3, color: theme.text.light, marginBottom: theme.spacing(1) });

const Description = styled.p({
  ...theme.bodyLg,
  color: theme.text.middle,
  marginBottom: theme.spacing(3),
});

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  & a {
    width: 100%;
    text-align: center;
  }
`;

interface CardProps {
  title: string;
  description: string;
  link: string;
  linkText: string;
}

export const Card = memo<CardProps>(function Card({ title, description, link, linkText }) {
  return (
    <CustomCard>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <ButtonContainer>
        <PrimaryAnchor href={link} target="_blank">
          {linkText}
        </PrimaryAnchor>
      </ButtonContainer>
    </CustomCard>
  );
});
