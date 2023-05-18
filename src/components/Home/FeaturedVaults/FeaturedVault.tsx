import React, { memo, useMemo } from 'react';
import { useAppSelector } from '../../../data/redux/store';
import { selectVaultById } from '../../../data/redux/vaults/slice';
import { Vault } from '../../../data/redux/vaults/types';
import { PlaceholderVault } from './PlaceholderVault';
import { Card } from './Card';
import { Network } from './Network';
import styled from '@emotion/styled';
import { theme } from '../../../theme';
import { formatPercent } from '../../../utils/format-utils';
import { TokenIcon } from './TokenIcon';
import { useAppUrl } from '../../../utils/react-utils';

const VaultLink = styled(Card)`
  color: ${theme.text.light};
  text-decoration: none;
  display: block;
`.withComponent('a');

const LogoTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${theme.spacing(3)};
`;

const Logo = styled.div`
  width: 48px;
  height: 48px;
  margin-right: ${theme.spacing(2)};
  flex-grow: 0;
  flex-shrink: 0;
`;

const Title = styled.h3`
  ${theme.h3}
  color: ${theme.text.light}
`;

const Interests = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: auto;
  gap: ${theme.spacing(2)};
`;

const Interest = styled.div``;

const InterestLabel = styled.div`
  ${theme.sublineLg}
  color: ${theme.text.dark}
`;

const InterestValue = styled.div`
  ${theme.h2}
  color: ${theme.text.middle}
`;

export type FeaturedVaultProps = {
  staticVault: Vault;
};
export const FeaturedVault = memo<FeaturedVaultProps>(function FeaturedVault({ staticVault }) {
  const liveVault = useAppSelector(state => selectVaultById(state, staticVault.vaultId));
  const vault = useMemo(() => {
    return liveVault || staticVault;
  }, [staticVault, liveVault]);
  const appUrl = useAppUrl();

  // Vault could have been active at build time, but not active now
  if (vault.status !== 'active') {
    return <PlaceholderVault />;
  }

  return (
    <VaultLink href={`${appUrl}vault/${vault.vaultId}`} target="_blank">
      <Network chainId={vault.chain} />
      <LogoTitle>
        <Logo>
          <TokenIcon assetIds={vault.assets} chainId={vault.chain} />
        </Logo>
        <Title>{vault.name}</Title>
      </LogoTitle>
      <Interests>
        <Interest>
          <InterestLabel>APY</InterestLabel>
          <InterestValue>{formatPercent(vault.totalApy)}</InterestValue>
        </Interest>
        <Interest>
          <InterestLabel>Daily</InterestLabel>
          <InterestValue>{formatPercent(vault.totalDaily)}</InterestValue>
        </Interest>
      </Interests>
    </VaultLink>
  );
});
