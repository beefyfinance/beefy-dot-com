import React, {memo} from 'react'
import styled from "@emotion/styled";
import {theme} from "../../../theme";
import {FilterButton} from "../FilterButton/FilterButton";

type FiltersProps = {
    selectedFilter: string
    updateSelectedFilter: (newFilter: string) => void
}

const Container = styled.div`
  ${theme.bodySm};
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  gap: ${theme.spacing(2)};
  margin-bottom: ${theme.spacing(4)};
`


export const Filters = memo<FiltersProps>(function Filters(props) {
    const filterOptions = ['all', 'blockchain', 'automation', 'crosschain', 'wallets', 'auditing', 'accounting', 'aggregation']

    const handleFilterClick = (filter: string) => {
        props.updateSelectedFilter(filter)
    }

    return (
        <Container>
            {
                filterOptions.map(option => <FilterButton onClick={() => handleFilterClick(option)} key={option} isActive={option === props.selectedFilter} text={option.toUpperCase()} />)
            }
        </Container>
    )
})