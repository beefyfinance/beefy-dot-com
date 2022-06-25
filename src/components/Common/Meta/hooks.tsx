import { graphql, useStaticQuery } from 'gatsby';

const siteMetaQuery = graphql`
  query siteMeta {
    site {
      siteMetadata {
        title
        titleTemplate
        description
        siteUrl
        twitterUsername
      }
    }
  }
`;

export type SiteMetadata = {
  title: string;
  titleTemplate: string;
  description: string;
  siteUrl: string;
  twitterUsername: string;
};

type SiteMetadataQueryResult = {
  site: {
    siteMetadata: SiteMetadata;
  };
};

export function useSiteMeta(): SiteMetadata {
  const result = useStaticQuery<SiteMetadataQueryResult>(siteMetaQuery);
  return result.site.siteMetadata;
}
