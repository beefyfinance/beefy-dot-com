import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
import { useStaticSiteMeta } from '../../../data/queries/site-meta';

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
  const siteMeta = useStaticSiteMeta();
  const fullTitle = title
    ? siteMeta.titleTemplate
      ? siteMeta.titleTemplate.replace('{title}', title)
      : title
    : undefined;

  return (
    <Helmet>
      {fullTitle ? <title>{fullTitle}</title> : null}
      {fullTitle ? <meta property="og:title" content={fullTitle} /> : null}
      {fullTitle ? <meta property="twitter:title" content={fullTitle} /> : null}
      {description ? <meta name="description" content={description} /> : null}
      {description ? <meta property="og:description" content={description} /> : null}
      {description ? <meta property="twitter:description" content={description} /> : null}
      {image ? <meta property="og:image" content={`${siteMeta.siteUrl}${image.src}`} /> : null}
      {image ? <meta property="og:image:width" content={image.width.toString()} /> : null}
      {image ? <meta property="og:image:height" content={image.height.toString()} /> : null}
      {image ? <meta property="twitter:image" content={`${siteMeta.siteUrl}${image.src}`} /> : null}
    </Helmet>
  );
});
