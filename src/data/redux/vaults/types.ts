import { WithLoader } from '../type-utils';
import { ApiVaultWithApy } from '../../api/beefy-api-types';

export type Vault = ApiVaultWithApy;

export type VaultsState = WithLoader<{
  byId: Record<string, Vault>;
}>;
