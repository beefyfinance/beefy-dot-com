import { WithLoader } from '../type-utils';
import { ApiBuybacks } from '../../api/beefy-api-types';

export type BuybackState = WithLoader<{
  byChain: ApiBuybacks;
}>;
