import React, { memo } from 'react';
import { Card } from './Card';
import styled from '@emotion/styled';

const CenteredCard = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PlaceholderVault = memo(function PlaceholderVault() {
  return <CenteredCard>and many more...</CenteredCard>;
});
