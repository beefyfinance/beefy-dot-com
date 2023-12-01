import React, { memo, useMemo } from 'react';
import styled from '@emotion/styled';
import { useLocation } from '@reach/router';
import { MaxInner } from '../Inner';
import { LogoLink } from './LogoLink';
import { PrimaryExternalLink } from '../Buttons';
import { theme } from '../../../theme';
import { BIFIPrice } from './BIFIPrice';
import { useAppUrl } from '../../../utils/react-utils';

const Outer = styled.header`
  padding-top: ${theme.spacing(3)};
  padding-bottom: ${theme.spacing(3)};
  background-color: ${theme.footer};
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

const InnerRow = styled(MaxInner)`
  display: flex;
  align-items: center;
`;

const BigPrimaryExternalLink = styled(PrimaryExternalLink)`
  padding: 8px 16px;
`;

const Logo = styled(LogoLink)`
  margin-right: auto;
`;

const Price = styled(BIFIPrice)`
  display: none;
  margin-right: ${theme.spacing(3)};

  @media (min-width: ${theme.breakpoints.sm}px) {
    display: flex;
  }
`;

export const Header = memo(function Header() {
  const location = useLocation();
  const OuterComponent = useMemo(() => {
    return location.pathname === '/' ? OuterOnTop : Outer;
  }, [location.pathname]);
  const appUrl = useAppUrl();

  return (
    <OuterComponent>
      <InnerRow>
        <Logo />
        <Price />
        <BigPrimaryExternalLink href={appUrl} target="_blank">
          Launch App
        </BigPrimaryExternalLink>
      </InnerRow>
    </OuterComponent>
  );
});
