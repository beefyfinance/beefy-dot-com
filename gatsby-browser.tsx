import React from 'react';
import { Layout } from './src/components/Common/Layout';
import { WrapPageElementBrowserArgs } from 'gatsby';

export const wrapPageElement = ({ element, props }: WrapPageElementBrowserArgs) => (
  <Layout {...props}>{element}</Layout>
);
