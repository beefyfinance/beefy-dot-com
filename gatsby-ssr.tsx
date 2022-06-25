import React from 'react';
import { Layout } from './src/components/Common/Layout';
import { WrapPageElementNodeArgs } from 'gatsby';

export const wrapPageElement = ({ element, props }: WrapPageElementNodeArgs) => (
  <Layout {...props}>{element}</Layout>
);
