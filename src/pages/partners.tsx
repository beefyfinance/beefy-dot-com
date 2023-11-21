import React, { memo, useCallback, useMemo, useState } from 'react';
import { Meta } from '../components/Common/Meta';
import { graphql } from 'gatsby';
import { NormalizedPartnerItem, PartnersQueryResult } from '../data/queries/partners';
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

const Partners = memo<PartnersPageProps>(function Partners({ data }) {
  const allPartners = useMemo(
    () =>
      sortBy(
        data.allPartnersJson.edges.map(edge => ({
          ...edge.node,
          categoryKey: edge.node.category.toLowerCase(),
        })),
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
    <>
      <Meta
        title="Partners"
        description="Find all partners which make the beefy ecosystem function."
      />
      <Outer>
        <Inner>
          <HeaderBox />
          <Filters
            selected={selectedFilter}
            onChange={updateSelectedFilter}
            partners={allPartners}
          />
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
