import { graphql, useStaticQuery } from 'gatsby';
import { useMemo } from 'react';

const ecosystemIconsQuery = graphql`
  query ecosystemIcons {
    allFile(
      filter: { relativeDirectory: { eq: "ecosystem" }, sourceInstanceName: { eq: "images" } }
    ) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`;

type EcosystemIconsQueryResult = {
  allFile: {
    edges: {
      node: {
        publicURL: string;
      };
    }[];
  };
};

export function useStaticEcosystemIcons(): string[] {
  const result = useStaticQuery<EcosystemIconsQueryResult>(ecosystemIconsQuery);
  return useMemo(() => result.allFile.edges.map(edge => edge.node.publicURL), [result]);
}
