import { graphql, useStaticQuery } from 'gatsby';
import { useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { selectHasTvlLoaded, selectShouldLoadTvl, selectTotalTvl } from '../redux/tvl/slice';
import { fetchTvl } from '../redux/tvl/actions';

const totalTvlQuery = graphql`
  query totalTvl {
    allBeefyTvl {
      sum(field: { tvl: SELECT })
    }
  }
`;

type TotalTvlQueryResult = {
  allBeefyTvl: {
    sum: number;
  };
};

export function useStaticTotalTvl(): number {
  const result = useStaticQuery<TotalTvlQueryResult>(totalTvlQuery);
  return result.allBeefyTvl.sum;
}

export function useTotalTvl(): number {
  const buildTvl = useStaticTotalTvl();
  const dispatch = useAppDispatch();
  const shouldLoadTvls = useAppSelector(selectShouldLoadTvl);
  const hasTvlsLoaded = useAppSelector(selectHasTvlLoaded);
  const liveTvl = useAppSelector(selectTotalTvl);
  const count = useMemo(() => {
    return hasTvlsLoaded ? liveTvl : buildTvl;
  }, [buildTvl, liveTvl, hasTvlsLoaded]);

  useEffect(() => {
    if (shouldLoadTvls) {
      dispatch(fetchTvl());
    }
  }, [shouldLoadTvls, dispatch]);

  return count;
}
