import React, {memo} from 'react'
import styled from "@emotion/styled";
import {theme} from "../../../theme";
import {FilterButton} from "../FilterButton/FilterButton";
import partners from "../../../content/json/partners.json"
import {useWindowSize} from "../../../utils/react-utils";
import {DropDownFilter} from "../DropDownFilter/DropDownFilter";

type FiltersProps = {
    selectedFilter: string
    updateSelectedFilter: (newFilter: string) => void
}

const Container = styled.div`
  ${theme.bodySm};
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: baseline;
  gap: ${theme.spacing(2)};
  margin-bottom: ${theme.spacing(4)};
`


export const Filters = memo<FiltersProps>(function Filters(props) {
    const { width, height } = useWindowSize()
    const isScreenSmall = width <=1280 || height <= 1000;
    const filterOptions = partners.map(partner => partner.category.toLowerCase())
    const uniqueSet = new Set(filterOptions);
    const uniqueArray = [...uniqueSet].sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
    uniqueArray.unshift('all');

    const handleFilterClick = (filter: string) => {
        props.updateSelectedFilter(filter)
    }

    return (
        <Container>
            {
                isScreenSmall ?
                    <DropDownFilter onClick={handleFilterClick} filterList={uniqueArray} />
                    :
                    <>
                        {
                            uniqueArray.map(option => <FilterButton onClick={() => handleFilterClick(option)} key={option} isActive={option === props.selectedFilter} text={option.toUpperCase()} />)
                        }
                    </>
            }
        </Container>
    )
})