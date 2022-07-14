import styled from '@emotion/styled';
import { theme } from '../../../theme';

const Container = styled.div`
  max-width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
`;

export const Inner = styled(Container)`
  width: ${theme.containers.xs}px;

  @media (min-width: ${theme.breakpoints.sm}px) {
    width: ${theme.containers.sm}px;
  }

  @media (min-width: ${theme.breakpoints.md}px) {
    width: ${theme.containers.md}px;
  }

  @media (min-width: ${theme.breakpoints.lg}px) {
    width: ${theme.containers.lg}px;
  }
`;

export const FluidInner = styled(Container)`
  width: 100%;
`;

export const MaxInner = styled(Container)`
  width: ${theme.containers.lg}px;
`;
