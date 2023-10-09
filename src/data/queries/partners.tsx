import { graphql } from 'gatsby';

export type PartnerItem = {
    name: string;
    url: string;
    logo: string;
    category: 'blockchain' | 'automation' | 'crosschain' | 'wallets' | 'auditing' | 'accounting' | 'aggregation';
    description: string;
}

export type PartnersQueryResult = {
    allPartnersJson: {
        edges: {
            node: PartnerItem
        }[];
    }
}

export const partnersFragment = graphql`
    fragment PartnersFragment on PartnersJson {
        name
        url
        logo
        category
        description
    }
`