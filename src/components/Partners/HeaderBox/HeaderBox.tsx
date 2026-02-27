import React from 'react';
import styled from '@emotion/styled';
import { theme } from '../../../theme';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
  @media (min-width: ${theme.breakpoints.md}px) {
    margin-bottom: 24px;
  }
`;

const Header = styled.h1`
  font-weight: 500;
  margin-bottom: 0;
`;

const Description = styled.p`
  ${theme.h3};
  color: ${theme.text.middle};
  max-width: 800px;
`;

export const HeaderBox = () => {
  return (
    <Container>
      <Header>Beefy Partners</Header>
      <Description>
        Explore the ecosystem of partners that make Beefy tick. Beefy's protocol and DAO rely
        heavily on collaboration through neutral and decentralized technology to offer a secure,
        permissionless and trust-minimized service to the world. We would be nothing without our
        frens across the stack.
      </Description>
    </Container>
  );
};
