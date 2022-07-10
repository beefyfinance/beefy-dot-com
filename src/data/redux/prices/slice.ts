import { createSlice } from '@reduxjs/toolkit';
import { reducerRegistry } from '../registry';
import { AppState } from '../types';
import { fetchPrices } from './actions';
import { PricesState } from './types';
import { hasLoadedOnce, shouldLoad } from '../type-utils';

const initialState: PricesState = {
  hasLoadedOnce: false,
  status: 'idle',
  error: null,
  byOracleId: {},
};

const slice = createSlice({
  name: 'prices',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPrices.fulfilled, (state, action) => {
        for (const [oracleId, price] of Object.entries(action.payload)) {
          state.byOracleId[oracleId] = price;
        }
        state.hasLoadedOnce = true;
        state.status = 'fulfilled';
        state.error = null;
      })
      .addCase(fetchPrices.pending, state => {
        state.status = 'pending';
        state.error = null;
      })
      .addCase(fetchPrices.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error;
      });
  },
});

reducerRegistry.register(slice.name, slice.reducer);

export function selectShouldLoadPrices(state: AppState): boolean {
  return state.prices ? shouldLoad(state.prices) : false;
}

export function selectHasPricesLoaded(state: AppState): boolean {
  return state.prices ? hasLoadedOnce(state.prices) : false;
}

export function selectPriceByOracleId(state: AppState, oracleId: string): number {
  return state.prices?.byOracleId[oracleId] || 0;
}
