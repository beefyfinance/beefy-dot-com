import React, { memo } from 'react';
import styled from '@emotion/styled';
import { Section } from '../Section';
import { Card } from './Card';
import { theme } from '../../../theme';

const CardList = styled.div`
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

const data = [
  {
    title: 'BIFI Maxi',
    description: 'BIFI holders share in our revenue by staking their BIFI in Beefy Maxi vaults. ',
    link: 'https://app.beefy.com/',
    linkText: 'Earn BIFI',
  },
  {
    title: 'BIFI Earnings Pools',
    description:
      'Staking BIFI in a BIFI Earnings Pool rewards you with native tokens with the platform’s earnings.',
    link: 'https://app.beefy.com/',
    linkText: 'Earn Native',
  },
  {
    title: 'Vote',
    description: 'Our Snapshot governance mechanism gives your BIFI voting power in Beefy’s DAO.',
    link: 'https://vote.beefy.finance/#/',
    linkText: 'Vote',
  },
  {
    title: 'Fixed-Supply',
    description: 'A fixed supply of 80,000 BIFI acts as a control against token inflation.',
    link: 'https://docs.beefy.finance/#what-is-usdbifi',
    linkText: 'Learn More',
  },
];

export const BIFIToken = memo(function BIFIToken() {
  return (
    <Section
      title="BIFI Token"
      subtitle="$BIFI is the native revenue-share & governance token for our protocol."
    >
      <CardList>
        {data.map(card => (
          <Card
            key={card.title}
            title={card.title}
            description={card.description}
            link={card.link}
            linkText={card.linkText}
          />
        ))}
      </CardList>
    </Section>
  );
});
