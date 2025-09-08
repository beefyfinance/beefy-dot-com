import { graphql, useStaticQuery } from 'gatsby';
import { useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/store';
import {
  selectActiveVaultsCount,
  selectHasVaultsLoaded,
  selectShouldLoadVaults,
  selectChainCount,
} from '../redux/vaults/slice';
import { fetchVaults } from '../redux/vaults/actions';

const totalChainsQuery = graphql`
  query totalChains {
    allBeefyVault {
      distinct(field: { chain: SELECT })
    }
  }
`;

type TotalChainsQueryResult = {
  allBeefyVault: {
    distinct: string[];
  };
};

export function useStaticChainCount(): number {
  const result = useStaticQuery<TotalChainsQueryResult>(totalChainsQuery);
  return result.allBeefyVault.distinct.length;
}

export function useChainCount(): number {
  const buildCount = useStaticChainCount();
  const dispatch = useAppDispatch();
  const shouldLoadVaults = useAppSelector(selectShouldLoadVaults);
  const hasVaultsLoaded = useAppSelector(selectHasVaultsLoaded);
  const liveCount = useAppSelector(selectChainCount);
  const count = useMemo(() => {
    return hasVaultsLoaded ? liveCount : buildCount;
  }, [buildCount, liveCount, hasVaultsLoaded]);

  useEffect(() => {
    if (shouldLoadVaults) {
      dispatch(fetchVaults());
    }
  }, [shouldLoadVaults, dispatch]);

  return count;
}
