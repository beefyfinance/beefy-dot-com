import styled from '@emotion/styled';
import { theme } from '../../../theme';
import { Link } from 'gatsby';
import React, { DetailedHTMLProps, memo } from 'react';

export const Button = styled.button`
  ${theme.bodyLgMed}
  border-radius: 8px;
  padding: 12px 24px;
  text-decoration: none;
  display: inline-block;
`;

export const PrimaryButton = styled(Button)`
  color: ${theme.text.light};
  background: ${theme.primary};
`;

export const SecondaryButton = styled(Button)`
  color: ${theme.text.light};
  background: ${theme.button};
`;

const ExternalLink = memo<
  DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
>(function (props) {
  return <a target="_blank" {...props} />;
});

export const PrimaryLink = PrimaryButton.withComponent(Link);
export const PrimaryExternalLink = PrimaryButton.withComponent(ExternalLink);
export const SecondaryExternalLink = SecondaryButton.withComponent(ExternalLink);
