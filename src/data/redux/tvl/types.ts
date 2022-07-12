import { WithLoader } from '../type-utils';

export type TvlState = WithLoader<{
  byVaultId: Record<string, number>;
}>;
