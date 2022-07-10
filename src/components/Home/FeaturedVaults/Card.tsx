import styled from '@emotion/styled';
import { theme } from '../../../theme';

export const Card = styled.div`
  position: relative;
  background: ${theme.cardBg};
  border: solid 2px ${theme.cardBorder};
  box-shadow: 0 4px 15px rgba(43, 16, 10, 0.08);
  padding: ${theme.spacing(3)};
  border-radius: 12px;
`;
