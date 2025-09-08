import React, { memo } from 'react';
import styled from '@emotion/styled';
import { FluidInner } from '../../Common/Inner';
import bottomLeft from '../../../images/hero-bottom-left.png';
import bottomRight from '../../../images/hero-bottom-right.png';
import topLeft from '../../../images/hero-top-left.png';
import topRight from '../../../images/hero-top-right.png';
import { theme } from '../../../theme';
import { PrimaryExternalLink, SecondaryExternalLink } from '../../Common/Buttons';
import { useAppUrl } from '../../../utils/react-utils';
import { useChainCount } from '../../../data/queries/total-chains';

// Background images
const w = 390;
const h = 320;
const r = h / w;

const CustomInner = styled(FluidInner)`
  display: flex;
  align-items: center;
  padding: ${40 + 24 * 2}px 0px;
  background-image: url(${topLeft}), url(${topRight}), url(${bottomLeft}), url(${bottomRight});
  background-repeat: no-repeat;
  background-position:
    left 64px,
    right 64px,
    left bottom,
    right bottom;
  background-size: ${(360 - 48) / 2}px ${((360 - 48) / 2) * r}px;
  min-height: 100vh;
  text-align: center;
  flex-direction: column;
  justify-content: center;

  @media (min-width: ${theme.breakpoints.sm}px) {
    background-position:
      left 5%,
      right 5%,
      left bottom,
      right bottom;
    background-size: ${(theme.breakpoints.sm - 48) / 2}px ${((theme.breakpoints.sm - 48) / 2) * r}px;
  }

  @media (min-width: ${theme.breakpoints.lg}px) {
    width: ${theme.containers.lg}px;
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

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  @media (max-height: 600px) {
    padding: ${48 * 2}px 0px;
  }
`;

export const Hero = memo(function Hero() {
  const appUrl = useAppUrl();
  const chains = useChainCount();

  return (
    <CustomInner>
      <Container>
        <Title>Multichain Yield Optimizer</Title>
        <Subtitle>
          Earn the highest APYs across {chains} chains with safety and efficiency in mind.
        </Subtitle>
        <Buttons>
          <PrimaryExternalLink href={appUrl} target="_blank">
            Launch App
          </PrimaryExternalLink>
          <SecondaryExternalLink href="https://docs.beefy.com/" target="_blank">
            View Docs
          </SecondaryExternalLink>
        </Buttons>
      </Container>
    </CustomInner>
  );
});
