import React, { memo } from 'react';
import { Hero } from '../components/Home/Hero';
import { FeaturedVaults } from '../components/Home/FeaturedVaults';
import { EarnWithBeefy } from '../components/Home/EarnWithBeefy';
import { Ecosystem } from '../components/Home/Ecosystem';
import { BIFIToken } from '../components/Home/BIFIToken';
import { PageTitle } from '../components/MediaKit/PageTitle';
import { Groups } from '../components/MediaKit/Groups';

const MediaKitPage = memo(function MediaKitPage() {
  return (
    <>
      <PageTitle />
      <Groups />
    </>
  );
});

export default MediaKitPage;
