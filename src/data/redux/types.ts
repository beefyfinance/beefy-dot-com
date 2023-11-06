import { PricesState } from './prices/types';
import { VaultsState } from './vaults/types';
import { TvlState } from './tvl/types';

export type AppState = {
  prices?: PricesState;
  vaults?: VaultsState;
  tvl?: TvlState;
};
