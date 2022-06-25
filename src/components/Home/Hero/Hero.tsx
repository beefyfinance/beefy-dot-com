import React, { memo } from 'react';
import styled from '@emotion/styled';
import { Inner } from '../../Common/Inner';

const Outer = styled.div`
  padding: ${40 + 24 * 2}px 0;
  min-height: 100vh;
`;

export const Hero = memo(function Hero() {
  return (
    <Outer>
      <Inner>hero</Inner>
    </Outer>
  );
});
