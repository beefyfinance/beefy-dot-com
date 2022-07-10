import React, { memo, useEffect } from 'react';
import styled from '@emotion/styled';
import { Inner } from '../../Common/Inner';
import { useStaticFeaturedVaults } from '../../../data/queries/featured-vaults';
import { FeaturedVault } from './FeaturedVault';
import { useAppDispatch, useAppSelector } from '../../../data/redux/store';
import { selectShouldLoadVaults } from '../../../data/redux/vaults/slice';
import { fetchVaults } from '../../../data/redux/vaults/actions';

const Outer = styled.div``;

export const FeaturedVaults = memo(function FeaturedVaults() {
  const vaults = useStaticFeaturedVaults();
  const dispatch = useAppDispatch();
  const shouldLoadVaults = useAppSelector(selectShouldLoadVaults);

  useEffect(() => {
    if (shouldLoadVaults) {
      dispatch(fetchVaults());
    }
  }, [dispatch, shouldLoadVaults]);

  return (
    <Outer>
      <Inner>
        <h2>featured vaults</h2>
        {vaults.map(vault => (
          <FeaturedVault key={vault.vaultId} staticVault={vault} />
        ))}
      </Inner>
    </Outer>
  );
});
