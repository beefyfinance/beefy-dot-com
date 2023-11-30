import React, { memo } from 'react';
import { useBIFIPrice } from '../../../data/queries/bifi-price';
import beefyToken from '../../../images/assets/BIFI.svg';
import { formatUsd } from '../../../utils/format-utils';
import styled from '@emotion/styled';
import { theme } from '../../../theme';

const Price = styled.div`
  ${theme.bodyLgMed}
  color: ${theme.text.middle};
  margin-left: ${theme.spacing()};
`;

const Token = styled.img`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  flex-grow: 0;
  display: block;
`;

const Holder = styled.div`
  display: flex;
  align-items: center;
`;

type BIFIPriceProps = {
  className?: string;
};
export const BIFIPrice = memo<BIFIPriceProps>(function TokenPrice({ className }) {
  const price = useBIFIPrice();

  return (
    <Holder className={className}>
      <Token src={beefyToken} alt="BIFI" width="24" height="24" />
      <Price>{formatUsd(price, 0)}</Price>
    </Holder>
  );
});
