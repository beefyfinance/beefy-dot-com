import styled from '@emotion/styled';
import { theme } from '../../../theme';
import { Link } from 'gatsby';

export const Button = styled.button`
  ${theme.bodyLgMed}
  border-radius: 8px;
  padding: 12px 24px;
  text-decoration: none;
  display: inline-block;
`;

export const PrimaryButton = styled(Button)`
  color: #fff;
  background: ${theme.primary};
`;

export const PrimaryLink = PrimaryButton.withComponent(Link);
export const PrimaryAnchor = PrimaryButton.withComponent('a');
