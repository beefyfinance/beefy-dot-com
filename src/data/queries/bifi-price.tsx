import { graphql, useStaticQuery } from 'gatsby';
import { useEffect, useMemo, useState } from 'react';
import {
  selectHasPricesLoaded,
  selectPriceByOracleId,
  selectShouldLoadPrices,
} from '../redux/prices/slice';
import { fetchPrices } from '../redux/prices/actions';
import { useAppDispatch, useAppSelector } from '../redux/store';

const bifiPriceQuery = graphql`
  query bifiPrice {
    beefyPrice(oracleId: { eq: "BIFI" }) {
      price
    }
  }
`;

type BifiPriceQueryResult = {
  beefyPrice: {
    price: number;
  };
};

export function useStaticBIFIPrice(): number {
  const result = useStaticQuery<BifiPriceQueryResult>(bifiPriceQuery);
  return result.beefyPrice.price;
}

export function useBIFIPrice(): number {
  const buildPrice = useStaticBIFIPrice();
  const dispatch = useAppDispatch();
  const shouldLoadPrice = useAppSelector(selectShouldLoadPrices);
  const hasPriceLoaded = useAppSelector(selectHasPricesLoaded);
  const livePrice = useAppSelector(state => selectPriceByOracleId(state, 'BIFI'));
  const price = useMemo(() => {
    return hasPriceLoaded ? livePrice : buildPrice;
  }, [buildPrice, livePrice, hasPriceLoaded]);

  useEffect(() => {
    if (shouldLoadPrice) {
      dispatch(fetchPrices());
    }
  }, [shouldLoadPrice, dispatch]);

  return price;
}
