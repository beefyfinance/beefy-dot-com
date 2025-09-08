import React, { memo, useCallback, useMemo, useState } from 'react';
import { Meta } from '../components/Common/Meta';
import { graphql } from 'gatsby';
import { NormalizedPartnerItem, PartnerItem, PartnersQueryResult } from '../data/queries/partners';
import { Inner } from '../components/Common/Inner';
import { PartnerCard } from '../components/Partners/PartnerCard/PartnerCard';
import { HeaderBox } from '../components/Partners/HeaderBox/HeaderBox';
import { Filters } from '../components/Partners/Filters/Filters';
import { sortBy } from 'lodash';
import styled from '@emotion/styled';
import { theme } from '../theme';

type PartnersPageProps = {
  data: {
    allPartnersJson: PartnersQueryResult['allPartnersJson'];
  };
};

const Outer = styled.div`
  padding: ${theme.spacing(7.5)} 0;
`;

const PartnersWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(328px, 1fr));
  gap: ${theme.spacing(3)};
`;

function urlToFriendlyUrl(url: string): string {
  const uri = new URL(url);
  return uri.hostname.replace(/^www\./i, '');
}

function normalizePartnerItem(partner: PartnerItem): NormalizedPartnerItem {
  return {
    ...partner,
    categoryKey: partner.category.toLowerCase(),
    friendlyUrl: urlToFriendlyUrl(partner.url),
  };
}

const PartnersPage = memo(({ data }: PartnersPageProps) => {
  const allPartners = useMemo(
    () =>
      sortBy(
        data.allPartnersJson.edges.map(edge => normalizePartnerItem(edge.node)),
        p => p.name.toLowerCase()
      ),
    [data.allPartnersJson.edges]
  );
  const [filteredResults, setFilteredResults] = useState<NormalizedPartnerItem[]>(allPartners);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const updateSelectedFilter = useCallback(
    (newFilter: string) => {
      const newList =
        newFilter === 'all'
          ? allPartners
          : allPartners.filter(partner => partner.categoryKey === newFilter);
      setSelectedFilter(newFilter);
      setFilteredResults(newList);
    },
    [setSelectedFilter, setFilteredResults, allPartners]
  );

  return (
    <Outer>
      <Inner>
        <HeaderBox />
        <Filters selected={selectedFilter} onChange={updateSelectedFilter} partners={allPartners} />
        <PartnersWrapper>
          {filteredResults.map(partner => (
            <PartnerCard key={partner.name} partner={partner} />
          ))}
        </PartnersWrapper>
      </Inner>
    </Outer>
  );
});

export const Head = () => (
  <Meta title="Partners" description="Find all partners which make the beefy ecosystem function." />
);

export const pageQuery = graphql`
  query PartnersPage {
    allPartnersJson {
      edges {
        node {
          ...PartnersFragment
        }
      }
    }
  }
`;

export default PartnersPage;
