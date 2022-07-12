import { graphql, useStaticQuery } from 'gatsby';
import { useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/store';
import {
  selectHasBuybackLoaded,
  selectShouldLoadBuyback,
  selectTotalBuyback,
} from '../redux/buyback/slice';
import { fetchBuyback } from '../redux/buyback/actions';

const totalBuybackQuery = graphql`
  query totalBuyback {
    allBeefyBuyback {
      sum(field: usd)
    }
  }
`;

type TotalBuybackQueryResult = {
  allBeefyBuyback: {
    sum: number;
  };
};

export function useStaticTotalBuyback(): number {
  const result = useStaticQuery<TotalBuybackQueryResult>(totalBuybackQuery);
  return result.allBeefyBuyback.sum;
}

export function useTotalBuyback(): number {
  const buildBuyback = useStaticTotalBuyback();
  const dispatch = useAppDispatch();
  const shouldLoadBuybacks = useAppSelector(selectShouldLoadBuyback);
  const hasBuybacksLoaded = useAppSelector(selectHasBuybackLoaded);
  const liveBuyback = useAppSelector(selectTotalBuyback);
  const total = useMemo(() => {
    return hasBuybacksLoaded ? liveBuyback : buildBuyback;
  }, [buildBuyback, liveBuyback, hasBuybacksLoaded]);

  useEffect(() => {
    if (shouldLoadBuybacks) {
      dispatch(fetchBuyback());
    }
  }, [shouldLoadBuybacks, dispatch]);

  return total;
}
