import { PricesState } from './prices/types';
import { VaultsState } from './vaults/types';

export type AppState = {
  prices?: PricesState;
  vaults?: VaultsState;
};
