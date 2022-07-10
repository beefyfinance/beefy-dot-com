import React, { memo } from 'react';
import { Hero } from '../components/Home/Hero';
import { FeaturedVaults } from '../components/Home/FeaturedVaults';
import { EarnWithBeefy } from '../components/Home/EarnWithBeefy';
import { Ecosystem } from '../components/Home/Ecosystem';
import { BIFIToken } from '../components/Home/BIFIToken';
import { LatestArticles } from '../components/Home/LatestArticles';
import { graphql } from 'gatsby';

const IndexPage = memo(function IndexPage() {
  return (
    <>
      <Hero />
      <EarnWithBeefy />
      <FeaturedVaults />
      <Ecosystem />
      <BIFIToken />
      <LatestArticles />
    </>
  );
});

export default IndexPage;
