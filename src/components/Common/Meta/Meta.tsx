import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
import { useSiteMeta } from './hooks';

type MetaProps = {
  title?: string;
  description?: string;
};
export const Meta = memo<MetaProps>(function Meta({ title, description }) {
  const siteMeta = useSiteMeta();
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
    </Helmet>
  );
});
