import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllPrices, getVaults, getVaultsWithApy } from '../../api/beefy-api';
import {
  ApiPrices,
  ApiVaults,
  ApiVaultsWithApys,
  ApiVaultWithApy,
} from '../../api/beefy-api-types';
import { AppState } from '../types';

export const fetchVaults = createAsyncThunk<ApiVaultsWithApys, void, { state: AppState }>(
  'vaults/fetchVaults',
  async function () {
    return await getVaultsWithApy();
  }
);
