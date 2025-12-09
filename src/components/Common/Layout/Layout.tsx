import React, { memo, ReactNode, useMemo } from 'react';
import '../Styles';
import { Header } from '../Header';
import { Footer } from '../Footer';
import styled from '@emotion/styled';
import { theme } from '../../../theme';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: minmax(0, 1fr);
  min-height: 100vh;
  width: 100%;
  background-color: ${theme.footer};
`;

const Page = styled.div`
  border-radius: 24px;
  background-color: ${theme.pageBg};
  @media (min-width: ${theme.breakpoints.sm}px) {
    border-radius: 24px;
  }
`;

const PageWithoutBorders = styled.div`
  background-color: ${theme.pageBg};
  border-radius: 0;
  @media (min-width: ${theme.breakpoints.sm}px) {
    border-radius: 0;
  }
`;

type LayoutProps = {
  children: ReactNode;
};
export const Layout = memo<LayoutProps>(function Layout({ children }) {
  const PageComponent = useMemo(() => {
    return location.pathname === '/' ? PageWithoutBorders : Page;
  }, [location.pathname]);

  return (
    <Wrapper>
      <Header />
      <PageComponent>{children}</PageComponent>
      <Footer />
    </Wrapper>
  );
});
