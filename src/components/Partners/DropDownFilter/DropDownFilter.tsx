import React, { memo } from 'react';
import styled from '@emotion/styled';

type DropDownFilterProps = {
  filterList: string[];
  onClick: (option: string) => void;
};

const Select = styled('select')`
  width: 100%;
  padding: 6px 14px;
  font-weight: 500;
  line-height: 24px;
  border-radius: 8px;
  text-transform: none;
  color: #f5f5ff;
  border: solid 2px #303550;
  background-color: #262a40;
  outline: 0;
`;

const Option = styled('option')`
  padding: 10px 20px;
`;

export const DropDownFilter = memo<DropDownFilterProps>(function DropDownFilter(
  props: DropDownFilterProps
) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    props.onClick(event.target.value);
  };
  return (
    <Select onChange={handleChange}>
      {props.filterList.map(option => (
        <Option value={option}>{option.toUpperCase()}</Option>
      ))}
    </Select>
  );
});
