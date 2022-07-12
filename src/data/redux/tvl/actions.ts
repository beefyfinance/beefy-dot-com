import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTvls } from '../../api/beefy-api';
import { ApiTvls } from '../../api/beefy-api-types';
import { AppState } from '../types';

export const fetchTvl = createAsyncThunk<ApiTvls, void, { state: AppState }>(
  'tvl/fetchTvl',
  async function () {
    return await getTvls();
  }
);
