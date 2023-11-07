import React, { memo, useMemo, useState } from 'react';
import { Meta } from '../components/Common/Meta';
import { graphql } from 'gatsby';
import { PartnerItem, PartnersQueryResult } from '../data/queries/partners';
import styled from '@emotion/styled';
import { theme } from '../theme';
import { Inner } from '../components/Common/Inner';
import { PartnerCard } from '../components/Partners/PartnerCard/PartnerCard';
import { HeaderBox } from '../components/Partners/HeaderBox/HeaderBox';
import { Filters } from '../components/Partners/Filters/Filters';

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

const Partners = memo<PartnersPageProps>(function Partners({ data }) {
  const allPartners = useMemo(
    () => data.allPartnersJson.edges.map(edge => edge.node),
    [data.allPartnersJson.edges]
  ).sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));

  const [filteredResults, setFilteredResults] = useState<PartnerItem[]>(allPartners);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const updateSelectedFilter = (newFilter: string) => {
    setSelectedFilter(newFilter);
    const newList = allPartners.filter(
      partner => newFilter === 'all' || partner.category.toLowerCase() === newFilter.toLowerCase()
    );
    setFilteredResults(newList);
  };

  return (
    <>
      <Meta
        title="Partners"
        description="Find all partners which make the beefy ecosystem function."
      />
      <Outer>
        <Inner>
          <HeaderBox />
          <Filters selectedFilter={selectedFilter} updateSelectedFilter={updateSelectedFilter} />
          <PartnersWrapper>
            {filteredResults.map(partner => (
              <PartnerCard key={partner.name} partner={partner} visible={true} />
            ))}
          </PartnersWrapper>
        </Inner>
      </Outer>
    </>
  );
});

export const pageQuery = graphql`
  query {
    allPartnersJson {
      edges {
        node {
          ...PartnersFragment
        }
      }
    }
  }
`;

export default Partners;
