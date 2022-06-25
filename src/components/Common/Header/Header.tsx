import React, { memo, useMemo } from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { useLocation } from '@reach/router';
import { Inner } from '../Inner';
import { LogoLink } from './LogoLink';

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
`;

const InnerRow = styled(Inner)`
  display: flex;
  align-items: center;
`;

export const Header = memo(function Header() {
  const location = useLocation();
  const OuterComponent = useMemo(() => {
    return location.pathname === '/' ? OuterOnTop : Outer;
  }, [location.pathname]);

  return (
    <OuterComponent>
      <InnerRow>
        <LogoLink /> <Link to="/articles">Blog</Link>
      </InnerRow>
    </OuterComponent>
  );
});
