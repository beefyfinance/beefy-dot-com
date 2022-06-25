import React, { memo } from 'react';
import styled from '@emotion/styled';
import { Inner } from '../../Common/Inner';

const Outer = styled.div``;

export const EarnWithBeefy = memo(function EarnWithBeefy() {
  return (
    <Outer>
      <Inner>earn with beefy</Inner>
    </Outer>
  );
});
