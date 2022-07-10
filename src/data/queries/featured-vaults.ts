import { graphql, useStaticQuery } from 'gatsby';
import { Vault } from '../redux/vaults/types';

const featuredVaultsQuery = graphql`
  query featuredVaults {
    allFeaturedVaultsJson(filter: { vault: { status: { eq: "active" } } }, limit: 6) {
      edges {
        node {
          vault {
            vaultId
            name
            oracleId
            assets
            chain
            status
            totalApy
            totalDaily
          }
        }
      }
    }
  }
`;

type FeaturedVaultsQueryResult = {
  allFeaturedVaultsJson: {
    edges: {
      node: {
        vault: Vault;
      };
    }[];
  };
};

export function useStaticFeaturedVaults(): Vault[] {
  const result = useStaticQuery<FeaturedVaultsQueryResult>(featuredVaultsQuery);
  return result.allFeaturedVaultsJson.edges.map(edge => edge.node.vault);
}
