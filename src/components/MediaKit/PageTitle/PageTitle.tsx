import React, { memo } from 'react';
import styled from '@emotion/styled';
import { Inner } from '../../Common/Inner';

const Outer = styled.div``;

const Heading = styled.h1``;

export const PageTitle = memo(function PageTitle() {
  return (
    <Outer>
      <Inner>
        <Heading>Media Kit</Heading>
      </Inner>
    </Outer>
  );
});
