import React from 'react';
import { Layout } from './src/components/Common/Layout';
import { WrapPageElementBrowserArgs } from 'gatsby';
import { Provider } from 'react-redux';
import { store } from './src/data/redux/store';

export const wrapPageElement = ({ element, props }: WrapPageElementBrowserArgs) => (
  <Provider store={store}>
    <Layout {...props}>{element}</Layout>
  </Provider>
);
