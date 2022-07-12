import React, { memo } from 'react';
import { useVaultCount } from '../../../data/queries/total-vaults';
import { useChainCount } from '../../../data/queries/total-chains';
import { useTotalTvl } from '../../../data/queries/total-tvl';
import { useTotalBuyback } from '../../../data/queries/total-buyback';
import { Inner } from '../../Common/Inner';
import styled from '@emotion/styled';
import { theme } from '../../../theme';
import { formatUsd } from '../../../utils/format-utils';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  justify-content: center;
  text-align: center;
  gap: ${theme.spacing(3)};
  margin: ${theme.spacing(4)} auto ${theme.spacing(8)} auto;

  @media (min-width: ${theme.breakpoints.md}px) {
    grid-template-columns: repeat(4, 162px);
  }

  @media (min-width: ${theme.breakpoints.lg}px) {
    grid-template-columns: repeat(4, 185px);
  }
`;

const Stat = 'div';

const Label = styled.div`
  ${theme.sublineLg}
  color: ${theme.text.dark}
`;

const Value = styled.div`
  ${theme.h1}
  color: ${theme.text.light}
`;

export const Stats = memo(function Stats() {
  const vaults = useVaultCount();
  const chains = useChainCount();
  const tvl = useTotalTvl();
  const buyback = useTotalBuyback();

  return (
    <Inner>
      <Grid>
        <Stat>
          <Label>TVL</Label>
          <Value>{formatUsd(tvl)}</Value>
        </Stat>
        <Stat>
          <Label>Vaults</Label>
          <Value>{vaults}</Value>
        </Stat>
        <Stat>
          <Label>Chains</Label>
          <Value>{chains}</Value>
        </Stat>
        <Stat>
          <Label>Daily Buyback</Label>
          <Value>{formatUsd(buyback)}</Value>
        </Stat>
      </Grid>
    </Inner>
  );
});
