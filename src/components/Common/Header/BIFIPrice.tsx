import React, { memo } from 'react';
import { useBIFIPrice } from '../../../data/queries/bifi-price';

type BIFIPriceProps = {
  className?: string;
};
export const BIFIPrice = memo<BIFIPriceProps>(function TokenPrice({ className }) {
  const [price, live] = useBIFIPrice();

  return (
    <div className={className} data-source={live ? 'live' : 'build'}>
      {price}
    </div>
  );
});
