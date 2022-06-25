import React, { memo, ReactNode } from 'react';
import '../Styles';
import { DefaultMeta } from '../Meta/DefaultMeta';
import { Header } from '../Header';
import { Footer } from '../Footer';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: minmax(0, 1fr);
  min-height: 100vh;
  width: 100%;
`;

const Page = styled.div``;

type LayoutProps = {
  children: ReactNode;
};
export const Layout = memo<LayoutProps>(function Layout({ children }) {
  return (
    <Wrapper>
      <DefaultMeta />
      <Header />
      <Page>{children}</Page>
      <Footer />
    </Wrapper>
  );
});
