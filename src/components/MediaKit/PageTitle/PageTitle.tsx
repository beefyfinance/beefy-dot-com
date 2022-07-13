import React, { memo } from 'react';
import styled from '@emotion/styled';

const Heading = styled.h1``;

export const PageTitle = memo(function PageTitle() {
  // TODO logo
  return <Heading>Media Kit</Heading>;
});
