import React, { memo } from 'react';
import styled from '@emotion/styled';
import { IconsBackground } from './IconsBackground';
import beefyToken from '../../../images/assets/BIFI.svg';
import { theme } from '../../../theme';

const Holder = styled.div`
  position: relative;
`;

const Token = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 280px;
  height: 280px;
  display: none;

  @media (min-width: ${theme.breakpoints.sm}px) {
    display: block;
    z-index: 10;
  }
`;

export const Icons = memo(function Stats() {
  return (
    <Holder>
      <IconsBackground />
      <Token src={beefyToken} alt="" width="280" height="280" role="presentation" />
    </Holder>
  );
});
