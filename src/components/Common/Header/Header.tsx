import React, { memo, useMemo } from 'react';
import styled from '@emotion/styled';
import { useLocation } from '@reach/router';
import { Inner } from '../Inner';
import { LogoLink } from './LogoLink';
import { PrimaryExternalLink } from '../Buttons';
import { theme } from '../../../theme';

const Outer = styled.header`
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: #121212;
`;

const OuterOnTop = styled(Outer)`
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  @media (max-width: ${theme.breakpoints.sm}px) {
    background-size: auto;
  }
`;

const InnerRow = styled(Inner)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BigPrimaryExternalLink = styled(PrimaryExternalLink)`
  padding: 8px 16px;
`;

export const Header = memo(function Header() {
  const location = useLocation();
  const OuterComponent = useMemo(() => {
    return location.pathname === '/' ? OuterOnTop : Outer;
  }, [location.pathname]);

  return (
    <OuterComponent>
      <InnerRow>
        <LogoLink />
        <BigPrimaryExternalLink href="https://app.beefy.com/" target="_blank">
          Launch App
        </BigPrimaryExternalLink>
      </InnerRow>
    </OuterComponent>
  );
});
