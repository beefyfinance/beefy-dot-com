import React, { memo, MouseEventHandler, useCallback } from 'react';
import styled from '@emotion/styled';
import { Section } from '../Section';
import { Toggle } from './Toggle';
import { Card } from './Card';
import { theme } from '../../../theme';
import { Inner } from '../../Common/Inner';

interface ItemType {
  title: string;
  description: string;
}

interface DataType {
  [id: string]: ItemType[];
}

const data: DataType = {
  singleAsset: [
    { title: 'Stake', description: 'Invest your token in a Beefy single asset Vault.' },
    {
      title: 'Earn',
      description: 'Beefy stakes the token on an external, interest-bearing platform.',
    },
    {
      title: 'Reinvest',
      description: 'Your interest is used to purchase more of the asset and reinvested.',
    },
    {
      title: 'Autocompound',
      description:
        'Beefy regularly and automatically repeats the process, saving you time and fees.',
    },
  ],
  lp: [
    {
      title: 'Deposit',
      description: 'Stake LP tokens from external DEXs in a Beefy Vault.',
    },
    {
      title: 'Earn Rewards',
      description: 'The interest earned on your LP stake is held in custody by Beefy.',
    },
    {
      title: 'Reinvest',
      description:
        'Your interest is used to purchase more of the underlying token pair and reinvested.',
    },
    {
      title: 'Autocompound',
      description:
        'Beefy regularly and automatically repeats the process, saving you time and fees.',
    },
  ],
  earningPools: [
    {
      title: 'Stake',
      description: 'Invest your BIFI in an Earnings Pool for a specific asset.',
    },
    {
      title: 'Earn',
      description: 'A share of the platform’s revenue is used to purchase the token.',
    },
    {
      title: ' Reinvest',
      description: 'Your interest is used to purchase more of the asset',
    },
    {
      title: 'Reward',
      description: 'Beefy uses your interest to purchase another asset that becomes your reward',
    },
  ],
  zap: [
    {
      title: 'Deposit',
      description:
        'Pick a Vault and deposit a single token from the underlying liquidity pool pair.',
    },
    {
      title: 'Create Pair',
      description: 'Beefy uses half of your deposit to purchase the other token in the pair.',
    },
    {
      title: 'Provide Liquidity',
      description: 'The token pair is staked in the liquidity pool on an external DEX.',
    },
    {
      title: 'Earn',
      description: 'The interest earned on your LP stake is held in custody by Beefy.',
    },
  ],
};

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: auto;
  gap: ${theme.spacing(3)};
  @media (min-width: ${theme.breakpoints.sm}px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${theme.breakpoints.lg}px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

export const EarnWithBeefy = memo(function EarnWithBeefy() {
  const [section, setSection] = React.useState('singleAsset');

  const handleSection = useCallback((value: string) => setSection(value), [setSection]);

  return (
    <Section title="Earn with Beefy">
      <Toggle handler={handleSection} value={section} />
      <CardsContainer>
        {data[section].map((item: ItemType, index: number) => {
          const { title, description } = item;
          return <Card key={title} index={index + 1} title={title} description={description} />;
        })}
      </CardsContainer>
    </Section>
  );
});
