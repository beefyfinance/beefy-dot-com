import React, { memo } from 'react';
import styled from '@emotion/styled';
import { FluidInner } from '../../Common/Inner';
import { theme } from '../../../theme';
import { PrimaryExternalLink, SecondaryExternalLink } from '../../Common/Buttons';
import { useAppUrl } from '../../../utils/react-utils';
import { useChainCount } from '../../../data/queries/total-chains';
import { Background } from './Background';

// Background images
const w = 390;
const h = 320;
const r = h / w;

const CustomInner = styled(FluidInner)`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${40 + 24 * 2}px 0px;
  min-height: 100vh;
  text-align: center;
  flex-direction: column;
  justify-content: center;
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

const Centered = styled.div`
  position: relative;
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
      <Background />
      <Centered>
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
      </Centered>
    </CustomInner>
  );
});
