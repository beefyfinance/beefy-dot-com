import React, { memo } from 'react';
import styled from '@emotion/styled';
import { Inner } from '../../Common/Inner';

const Outer = styled.div``;

export const FeaturedVaults = memo(function FeaturedVaults() {
  return (
    <Outer>
      <Inner>featured vaults</Inner>
    </Outer>
  );
});
