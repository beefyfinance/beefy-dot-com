import React, { memo, useMemo } from 'react';
import styled from '@emotion/styled';
import { theme } from '../../../theme';
import { useWindowSize } from '../../../utils/react-utils';
import { FilterDropdown } from './FilterDropdown';
import { sortBy, uniqBy } from 'lodash';
import { NormalizedPartnerItem } from '../../../data/queries/partners';
import { FilterButtons } from './FilterButtons';

type FiltersProps = {
  partners: NormalizedPartnerItem[];
  selected: string;
  onChange: (newFilter: string) => void;
};

const Container = styled.div`
  ${theme.bodySm};
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: baseline;
  gap: ${theme.spacing(2)};
  margin-bottom: ${theme.spacing(4)};
`;

export const Filters = memo<FiltersProps>(function Filters({ onChange, selected, partners }) {
  const { width } = useWindowSize();
  const isScreenSmall = width <= 925;
  const options = useMemo(() => {
    const uniqOptions = sortBy(
      uniqBy(
        partners.map(partner => ({
          key: partner.categoryKey,
          text: partner.category,
        })),
        o => o.key
      ),
      o => o.key
    );
    uniqOptions.unshift({ key: 'all', text: 'ALL' });
    return uniqOptions;
  }, [partners]);
  const FilterComponent = isScreenSmall ? FilterDropdown : FilterButtons;

  return (
    <Container>
      <FilterComponent options={options} onChange={onChange} selected={selected} />
    </Container>
  );
});
