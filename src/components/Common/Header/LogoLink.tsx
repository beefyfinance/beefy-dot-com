import React, { memo } from 'react';
import logoIcon from '../../../images/logo-icon.svg';
import logoText from '../../../images/logo-text.svg';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const HomeLink = styled(Link)`
  display: flex;
  flex-direction: row;
  height: 40px;
`;

const LogoIcon = styled.img`
  margin-right: 8px;
`;

const LogoText = styled.img`
  display: none;
  @media (min-width: 600px) {
    display: block;
  }
`;

export const LogoLink = memo(function LogoLink() {
  return (
    <HomeLink to="/">
      <LogoIcon src={logoIcon} height="40" alt="" />
      <LogoText src={logoText} height="40" alt="Beefy" />
    </HomeLink>
  );
});
