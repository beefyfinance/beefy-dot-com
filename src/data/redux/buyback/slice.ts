import { createSelector, createSlice } from '@reduxjs/toolkit';
import { reducerRegistry } from '../registry';
import { AppState } from '../types';
import { fetchBuyback } from './actions';
import { BuybackState } from './types';
import { hasLoadedOnce, shouldLoad } from '../type-utils';
import { ApiBuyback } from '../../api/beefy-api-types';

const initialState: BuybackState = {
  hasLoadedOnce: false,
  status: 'idle',
  error: null,
  byChain: {},
};

const slice = createSlice({
  name: 'buyback',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchBuyback.fulfilled, (state, action) => {
        for (const [chain, buyback] of Object.entries(action.payload)) {
          state.byChain[chain] = buyback;
        }
        state.hasLoadedOnce = true;
        state.status = 'fulfilled';
        state.error = null;
      })
      .addCase(fetchBuyback.pending, state => {
        state.status = 'pending';
        state.error = null;
      })
      .addCase(fetchBuyback.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error;
      });
  },
});

reducerRegistry.register(slice.name, slice.reducer);

export function selectShouldLoadBuyback(state: AppState): boolean {
  return state.buyback ? shouldLoad(state.buyback) : false;
}

export function selectHasBuybackLoaded(state: AppState): boolean {
  return state.buyback ? hasLoadedOnce(state.buyback) : false;
}

export function selectBuybackByChain(state: AppState, chain: string): ApiBuyback | undefined {
  return state.buyback?.byChain[chain];
}

export const selectTotalBuyback = createSelector(
  (state: AppState) => state.buyback?.byChain || {},
  (byChain: BuybackState['byChain']) =>
    Object.values(byChain).reduce((total, buyback) => total + buyback.usd, 0)
);
