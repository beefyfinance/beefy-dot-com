import React, { memo, useMemo } from 'react';
import { useAppSelector } from '../../../data/redux/store';
import { selectVaultById } from '../../../data/redux/vaults/slice';
import { Vault } from '../../../data/redux/vaults/types';
import { PlaceholderVault } from './PlaceholderVault';

export type FeaturedVaultProps = {
  staticVault: Vault;
};
export const FeaturedVault = memo<FeaturedVaultProps>(function FeaturedVault({ staticVault }) {
  const liveVault = useAppSelector(state => selectVaultById(state, staticVault.vaultId));
  const vault = useMemo(() => {
    return liveVault || staticVault;
  }, [staticVault, liveVault]);

  if (vault.status !== 'active') {
    return <PlaceholderVault />;
  }

  return (
    <div>
      <div>{vault.vaultId}</div>
      <div>{vault.name}</div>
    </div>
  );
});
