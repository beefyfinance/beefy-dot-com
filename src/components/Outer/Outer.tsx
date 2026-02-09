import styled from '@emotion/styled';
import { theme } from '../../theme';

export const Outer = styled.div`
  padding-block: 20px 24px;
  @media (min-width: ${theme.breakpoints.sm}px) {
    padding-block: 24px 28px;
  }
  @media (min-width: ${theme.breakpoints.md}px) {
    padding-block: 28px 32px;
  }
  @media (min-width: ${theme.breakpoints.lg}px) {
    padding-block: 32px 48px;
  }
`;
