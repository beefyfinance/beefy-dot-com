import { WithLoader } from '../type-utils';

export type PricesState = WithLoader<{
  byOracleId: Record<string, number>;
}>;
