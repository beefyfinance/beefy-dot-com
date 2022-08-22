import React, { memo, useEffect } from 'react';
import styled from '@emotion/styled';
import { useStaticFeaturedVaults } from '../../../data/queries/featured-vaults';
import { FeaturedVault } from './FeaturedVault';
import { useAppDispatch, useAppSelector } from '../../../data/redux/store';
import { selectShouldLoadVaults } from '../../../data/redux/vaults/slice';
import { fetchVaults } from '../../../data/redux/vaults/actions';
import { Section } from '../Section';
import { theme } from '../../../theme';
import { PlaceholderVault } from './PlaceholderVault';
import { PrimaryExternalLink } from '../../Common/Buttons';
import { useAppUrl } from '../../../utils/react-utils';

const VaultsGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: auto;
  gap: ${theme.spacing(3)};

  @media (min-width: ${theme.breakpoints.sm}px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${theme.breakpoints.lg}px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const Buttons = styled.div`
  text-align: center;
  margin-top: ${theme.spacing(7)};
`;

export const FeaturedVaults = memo(function FeaturedVaults() {
  const vaults = useStaticFeaturedVaults();
  const dispatch = useAppDispatch();
  const shouldLoadVaults = useAppSelector(selectShouldLoadVaults);
  const placeholderVaults = Array.from(Array(6 - vaults.length).keys());
  const appUrl = useAppUrl();

  useEffect(() => {
    if (shouldLoadVaults) {
      dispatch(fetchVaults());
    }
  }, [dispatch, shouldLoadVaults]);

  return (
    <Section title="Featured Vaults">
      <VaultsGrid>
        {vaults.map(vault => (
          <FeaturedVault key={vault.vaultId} staticVault={vault} />
        ))}
        {placeholderVaults.map(i => (
          <PlaceholderVault key={i} />
        ))}
      </VaultsGrid>
      <Buttons>
        <PrimaryExternalLink href={appUrl} target="_blank">
          Explore Vaults
        </PrimaryExternalLink>
      </Buttons>
    </Section>
  );
});
