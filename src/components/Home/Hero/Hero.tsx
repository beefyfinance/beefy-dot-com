import React, { memo } from 'react';
import styled from '@emotion/styled';
import { Inner } from '../../Common/Inner';
import bottomLeft from '../../../images/hero-bottom-left.png';
import bottomRight from '../../../images/hero-bottom-right.png';
import topLeft from '../../../images/hero-top-left.png';
import topRight from '../../../images/hero-top-right.png';
import { theme } from '../../../theme';
import { PrimaryExternalLink, SecondaryExternalLink } from '../../Common/Buttons';

// Background images
const w = 390;
const h = 320;
const r = h / w;

const Outer = styled.div`
  display: flex;
  align-items: center;
  padding: ${40 + 24 * 2}px 0px;
  background-image: url(${topLeft}), url(${topRight}), url(${bottomLeft}), url(${bottomRight});
  background-repeat: no-repeat;
  background-position: left 64px, right 64px, left bottom, right bottom;
  background-size: ${(360 - 48) / 2}px ${((360 - 48) / 2) * r}px;
  min-height: 100vh;
  text-align: center;

  @media (min-width: ${theme.breakpoints.sm}px) {
    background-position: left top, right top, left bottom, right bottom;
    background-size: ${(theme.breakpoints.sm - 48) / 2}px ${((theme.breakpoints.sm - 48) / 2) * r}px;
  }

  @media (min-width: ${theme.breakpoints.md}px) {
    background-size: ${(theme.breakpoints.md - 48) / 2}px ${((theme.breakpoints.md - 48) / 2) * r}px;
  }

  @media (min-width: ${theme.breakpoints.lg}px) {
    background-size: ${w}px ${h}px;
  }
`;

const Title = styled.div`
  font-size: 45px;
  line-height: 60px;
  font-weight: 700;
  color: ${theme.text.light};
  width: 620px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${theme.spacing(3)};

  @media (min-width: ${theme.breakpoints.sm}px) {
    font-size: 80px;
    line-height: 96px;
  }
`;

const Subtitle = styled.div`
  font-weight: 500;
  font-size: 21px;
  line-height: 32px;
  color: ${theme.text.middle};
  width: 440px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
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
          Earn the highest APY’s across 16 chains with safety and efficiency in mind.
        </Subtitle>
        <Buttons>
          <PrimaryExternalLink href="https://app.beefy.com/" target="_blank">
            Launch App
          </PrimaryExternalLink>
          <SecondaryExternalLink href="https://docs.beefy.com/" target="_blank">
            View Docs
          </SecondaryExternalLink>
        </Buttons>
      </Inner>
    </Outer>
  );
});
