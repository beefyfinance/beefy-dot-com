import React, { memo } from 'react';
import styled from '@emotion/styled';
import { Inner } from '../../Common/Inner';

const Outer = styled.div``;

export const Groups = memo(function Groups() {
  return (
    <Outer>
      <Inner>groups.map(...)</Inner>
    </Outer>
  );
});
