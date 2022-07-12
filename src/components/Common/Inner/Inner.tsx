import styled from '@emotion/styled';
import { theme } from '../../../theme';

export const Inner = styled.div`
  width: 768px;
  max-width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${theme.breakpoints.lg}px) {
    width: 1280px;
  }
`;

export const FluidInner = styled(Inner)`
  width: 100%; ;
`;
