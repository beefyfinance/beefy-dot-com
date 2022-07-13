import React, { memo } from 'react';
import logoImg from '../../../images/logo.svg';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const HomeLink = styled(Link)`
  display: flex;
  flex-direction: row;
  height: 40px;
`;

const Logo = styled.img`
  display: block;
  height: 40px;
`;

export type LogoLinkProps = { className?: string };
export const LogoLink = memo<LogoLinkProps>(function LogoLink({ className }) {
  return (
    <HomeLink to="/" className={className}>
      <Logo src={logoImg} height="40" alt="Beefy" />
    </HomeLink>
  );
});
