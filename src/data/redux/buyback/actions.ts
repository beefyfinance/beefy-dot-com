import { createAsyncThunk } from '@reduxjs/toolkit';
import { getBuyback } from '../../api/beefy-api';
import { ApiBuybacks } from '../../api/beefy-api-types';
import { AppState } from '../types';

export const fetchBuyback = createAsyncThunk<ApiBuybacks, void, { state: AppState }>(
  'buyback/fetchBuyback',
  async function () {
    return await getBuyback();
  }
);
