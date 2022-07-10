import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllPrices } from '../../api/beefy-api';
import { ApiPrices } from '../../api/beefy-api-types';
import { AppState } from '../types';

export const fetchPrices = createAsyncThunk<ApiPrices, void, { state: AppState }>(
  'prices/fetchPrices',
  async function () {
    return await getAllPrices();
  }
);
