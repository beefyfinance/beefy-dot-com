import React, { memo } from 'react';
import styled from '@emotion/styled';
import { Inner } from '../../Common/Inner';
import background from '../../../images/bg.svg';
import { theme } from '../../../theme';
import { PrimaryAnchor, SecondaryAnchor } from '../../Common/Buttons';

const Outer = styled.div`
  display: flex;
  align-items: center;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 100vh;
  text-align: center;
`;

const Title = styled.div`
  font-size: 80px;
  line-height: 96px;
  font-weight: 700;
  color: ${theme.text.light};
  margin-bottom: ${theme.spacing(3)};
  @media (max-width: ${theme.breakpoints.sm}px) {
    font-size: 45px;
    line-height: 60px;
  }
`;

const Subtitle = styled.div`
  font-weight: 500;
  font-size: 21px;
  line-height: 32px;
  color: ${theme.text.middle};
  margin-bottom: ${theme.spacing(7)};
`;

const Buttons = styled.div`
  display: flex;
  column-gap: ${theme.spacing(3)};
  justify-content: center;
`;

export const Hero = memo(function Hero() {
  return (
    <Outer>
      <Inner>
        <Title>Multichain Yield Optimiser</Title>
        <Subtitle>
          Earn the highest APY’s across 16 chains with <br /> safety and efficiency in mind.
        </Subtitle>
        <Buttons>
          <PrimaryAnchor href="https://app.beefy.com/" target="_blank">
            Launch App
          </PrimaryAnchor>
          <SecondaryAnchor href="https://docs.beefy.com/" target="_blank">
            View Docs
          </SecondaryAnchor>
        </Buttons>
      </Inner>
    </Outer>
  );
});
