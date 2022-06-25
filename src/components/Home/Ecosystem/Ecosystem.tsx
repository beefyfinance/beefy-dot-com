import React, { memo } from 'react';
import styled from '@emotion/styled';
import { Inner } from '../../Common/Inner';

const Outer = styled.div``;

export const Ecosystem = memo(function Ecosystem() {
  return (
    <Outer>
      <Inner>our ecosystem</Inner>
    </Outer>
  );
});
