import React, { memo } from 'react';
import styled from '@emotion/styled';
import { theme } from '../../../theme';

const Background = styled.div<NetworkProps>`
  background-color: ${({ chainId }) => theme.chains[chainId]};
  position: absolute;
  top: -2px;
  left: -2px;
  width: 28px;
  height: 28px;
  border: solid 2px ${theme.cardBorder};
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const Icon = styled.img`
  margin-left: 2px;
  margin-top: 2px;
  width: 20px;
  height: 20px;
`;

export type NetworkProps = { chainId: string };
export const Network = memo<NetworkProps>(function ({ chainId }) {
  return (
    <Background chainId={chainId}>
      <Icon
        alt=""
        src={require(`../../../images/networks/${chainId}.svg`).default}
        width={20}
        height={20}
      />
    </Background>
  );
});
