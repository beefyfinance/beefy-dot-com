import { createSelector, createSlice } from '@reduxjs/toolkit';
import { reducerRegistry } from '../registry';
import { AppState } from '../types';
import { fetchTvl } from './actions';
import { TvlState } from './types';
import { hasLoadedOnce, shouldLoad } from '../type-utils';

const initialState: TvlState = {
  hasLoadedOnce: false,
  status: 'idle',
  error: null,
  byVaultId: {},
};

const slice = createSlice({
  name: 'tvl',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTvl.fulfilled, (state, action) => {
        for (const [vaultId, tvl] of Object.entries(action.payload)) {
          state.byVaultId[vaultId] = tvl;
        }
        state.hasLoadedOnce = true;
        state.status = 'fulfilled';
        state.error = null;
      })
      .addCase(fetchTvl.pending, state => {
        state.status = 'pending';
        state.error = null;
      })
      .addCase(fetchTvl.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error;
      });
  },
});

reducerRegistry.register(slice.name, slice.reducer);

export function selectShouldLoadTvl(state: AppState): boolean {
  return state.tvl ? shouldLoad(state.tvl) : false;
}

export function selectHasTvlLoaded(state: AppState): boolean {
  return state.tvl ? hasLoadedOnce(state.tvl) : false;
}

export function selectTvlByVaultId(state: AppState, vaultId: string): number {
  return state.tvl?.byVaultId[vaultId] || 0;
}

export const selectTotalTvl = createSelector(
  (state: AppState) => state.tvl?.byVaultId || {},
  (byVaultId: TvlState['byVaultId']) =>
    Object.values(byVaultId).reduce((total, tvl) => total + tvl, 0)
);
