import React, { memo, useMemo } from 'react';
import { useStaticSiteMeta } from '../../../data/queries/site-meta';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import socialImage from '!url-loader?limit=false!../../../images/social.png';

export const DefaultMeta = memo(function DefaultMeta() {
  const { title, description, siteUrl: canonicalBaseUrl, twitterUsername } = useStaticSiteMeta();
  const { hostname, pathname } = useLocation();
  const currentBaseUrl = useMemo(() => {
    if (hostname) {
      return `https://${hostname}`;
    }
    return canonicalBaseUrl;
  }, [canonicalBaseUrl, hostname]);
  const canonicalUrl = useMemo(
    () => `${canonicalBaseUrl}${pathname}`,
    [canonicalBaseUrl, pathname]
  );

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <link rel="canonical" href={canonicalUrl} />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${currentBaseUrl}${socialImage}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:site" content={twitterUsername} />
      <meta property="twitter:creator" content={twitterUsername} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${currentBaseUrl}${socialImage}`} />
    </Helmet>
  );
});
