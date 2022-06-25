import React, { memo } from 'react';
import styled from '@emotion/styled';
import { Inner } from '../../Common/Inner';

const Outer = styled.div``;

export const BIFIToken = memo(function BIFIToken() {
  return (
    <Outer>
      <Inner>BIFI</Inner>
    </Outer>
  );
});
