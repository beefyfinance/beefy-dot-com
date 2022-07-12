import { createSelector, createSlice } from '@reduxjs/toolkit';
import { reducerRegistry } from '../registry';
import { AppState } from '../types';
import { fetchVaults } from './actions';
import { Vault, VaultsState } from './types';
import { hasLoadedOnce, InitialLoaderState, shouldLoad } from '../type-utils';
import { ApiVaultWithApy } from '../../api/beefy-api-types';
import { uniq } from 'lodash';

const initialState: VaultsState = {
  ...InitialLoaderState,
  byId: {},
};

const slice = createSlice({
  name: 'vaults',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchVaults.fulfilled, (state, action) => {
        for (const [id, vault] of Object.entries(action.payload)) {
          state.byId[id] = vault;
        }
        state.hasLoadedOnce = true;
        state.status = 'fulfilled';
        state.error = null;
      })
      .addCase(fetchVaults.pending, state => {
        state.status = 'pending';
        state.error = null;
      })
      .addCase(fetchVaults.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error;
      });
  },
});

reducerRegistry.register(slice.name, slice.reducer);

export function selectShouldLoadVaults(state: AppState): boolean {
  return state.vaults ? shouldLoad(state.vaults) : false;
}

export function selectHasVaultsLoaded(state: AppState): boolean {
  return state.vaults ? hasLoadedOnce(state.vaults) : false;
}

export function selectVaultById(state: AppState, vaultId: string): Vault | null {
  return state.vaults?.byId[vaultId] || null;
}

export const selectActiveVaults = createSelector(
  (state: AppState) => state.vaults?.byId || {},
  (byId: VaultsState['byId']) => Object.values(byId).filter(vault => vault.status === 'active')
);

export const selectActiveVaultsCount = createSelector(
  (state: AppState) => selectActiveVaults(state),
  (vaults: ApiVaultWithApy[]) => vaults.length
);

export const selectChainCount = createSelector(
  (state: AppState) => selectActiveVaults(state),
  (vaults: ApiVaultWithApy[]) => uniq(vaults.map(vault => vault.chain)).length
);
