import React, { memo, ReactNode } from 'react';
import '../Styles';
import { Header } from '../Header';
import { Footer } from '../Footer';
import styled from '@emotion/styled';
import { theme } from '../../../theme';
import { PageProps } from 'gatsby';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: minmax(0, 1fr);
  min-height: 100vh;
  width: 100%;
  background-color: ${theme.footer};
`;

type PageComponentProps = {
  rounded?: boolean;
};

const Page = styled.div`
  border-radius: ${({ rounded = false }: PageComponentProps) => (rounded ? '20px' : '0')};
  background-color: ${theme.pageBg};
  @media (min-width: ${theme.breakpoints.sm}px) {
    border-radius: ${({ rounded = false }: PageComponentProps) => (rounded ? '24px' : '0')};
  }
`;

type LayoutProps = PageProps & {
  children: ReactNode;
};
export const Layout = memo<LayoutProps>(function Layout({ children, path }) {
  return (
    <Wrapper>
      <Header />
      <Page rounded={path !== '/'}>{children}</Page>
      <Footer />
    </Wrapper>
  );
});
