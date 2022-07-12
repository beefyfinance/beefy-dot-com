import { graphql, useStaticQuery } from 'gatsby';
import { useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/store';
import {
  selectActiveVaultsCount,
  selectHasVaultsLoaded,
  selectShouldLoadVaults,
} from '../redux/vaults/slice';
import { fetchVaults } from '../redux/vaults/actions';

const totalVaultsQuery = graphql`
  query totalVaults {
    allBeefyVault(filter: { status: { eq: "active" } }) {
      pageInfo {
        totalCount
      }
    }
  }
`;

type TotalVaultsQueryResult = {
  allBeefyVault: {
    pageInfo: {
      count: number;
    };
  };
};

export function useStaticVaultCount(): number {
  const result = useStaticQuery<TotalVaultsQueryResult>(totalVaultsQuery);
  return result.allBeefyVault.pageInfo.count;
}

export function useVaultCount(): number {
  const buildCount = useStaticVaultCount();
  const dispatch = useAppDispatch();
  const shouldLoadVaults = useAppSelector(selectShouldLoadVaults);
  const hasVaultsLoaded = useAppSelector(selectHasVaultsLoaded);
  const liveCount = useAppSelector(selectActiveVaultsCount);
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
