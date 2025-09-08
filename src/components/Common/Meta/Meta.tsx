import React, { memo, useMemo } from 'react';
import { useLocation } from '@reach/router';
import { useStaticSiteMeta } from '../../../data/queries/site-meta';
import defaultSocialImage from '!url-loader?limit=false!../../../images/social.png';

export type MetaImageProps = {
  src: string;
  width: number;
  height: number;
};

export type MetaProps = {
  title?: string;
  description?: string;
  image?: MetaImageProps;
};

export const Meta = memo<MetaProps>(function Meta({ title, description, image }) {
  const {
    title: defaultTitle,
    titleTemplate,
    description: defaultDescription,
    siteUrl: canonicalBaseUrl,
    twitterUsername,
  } = useStaticSiteMeta();
  const { origin, pathname } = useLocation();
  const baseUrl = useMemo(() => {
    if (origin) {
      return origin;
    }
    return canonicalBaseUrl;
  }, [canonicalBaseUrl, origin]);
  const canonicalUrl = useMemo(
    () => `${canonicalBaseUrl}${pathname}`,
    [canonicalBaseUrl, pathname]
  );
  const resolvedTitle = title
    ? titleTemplate
      ? titleTemplate.replace('{title}', title)
      : title
    : defaultTitle;
  const resolvedDescription = description || defaultDescription;
  const resolvedImage: MetaImageProps = {
    src: defaultSocialImage,
    width: 1200,
    height: 630,
    ...image,
  };

  return (
    <>
      <html lang="en" />
      <title>{resolvedTitle}</title>
      <link rel="canonical" href={canonicalUrl} />
      <meta name="description" content={resolvedDescription} />
      <meta property="og:title" content={resolvedTitle} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={resolvedDescription} />
      <meta property="og:image" content={`${baseUrl}${resolvedImage.src}`} />
      <meta property="og:image:width" content={resolvedImage.width.toString()} />
      <meta property="og:image:height" content={resolvedImage.height.toString()} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterUsername} />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={resolvedTitle} />
      <meta name="twitter:description" content={resolvedDescription} />
      <meta name="twitter:image" content={`${baseUrl}${resolvedImage.src}`} />
    </>
  );
});
