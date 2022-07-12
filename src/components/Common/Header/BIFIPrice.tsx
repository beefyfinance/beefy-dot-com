import React, { memo } from 'react';
import { useBIFIPrice } from '../../../data/queries/bifi-price';

type BIFIPriceProps = {
  className?: string;
};
export const BIFIPrice = memo<BIFIPriceProps>(function TokenPrice({ className }) {
  const price = useBIFIPrice();

  return <div className={className}>{price}</div>;
});
