import React, { memo } from 'react';
import { Hero } from '../components/Home/Hero';
import { FeaturedVaults } from '../components/Home/FeaturedVaults';
import { EarnWithBeefy } from '../components/Home/EarnWithBeefy';
import { Ecosystem } from '../components/Home/Ecosystem';
import { BIFIToken } from '../components/Home/BIFIToken';
import { LatestArticles } from '../components/Home/LatestArticles';
import { Meta } from '../components/Common/Meta';

const IndexPage = memo(() => {
  return (
    <>
      <Hero />
      <EarnWithBeefy />
      <Ecosystem />
      <BIFIToken />
      <LatestArticles />
    </>
  );
});

export const Head = () => <Meta />;

export default IndexPage;
