import styled from '@emotion/styled';
import { theme } from '../../../theme';
import { Link } from 'gatsby';

export const Button = styled.button<ButtonProps>`
  ${theme.bodyLgMed}
  border-radius: 8px;
  padding: ${({ padding }) => padding ?? '12px 24px'};
  text-decoration: none;
  display: inline-block;
`;

export const PrimaryButton = styled(Button)`
  color: ${theme.text.light};
  background: ${theme.primary};
`;

export const SecondaryButton = styled(Button)`
  color: ${theme.text.light};
  background: rgba(255, 255, 255, 0.1);
`;

type ButtonProps = { padding?: string };

export const PrimaryLink = PrimaryButton.withComponent(Link);
export const PrimaryAnchor = PrimaryButton.withComponent('a');
export const SecondaryAnchor = SecondaryButton.withComponent('a');
