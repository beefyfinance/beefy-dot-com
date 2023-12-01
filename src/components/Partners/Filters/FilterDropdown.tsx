import React, { memo, useCallback } from 'react';
import { FilterProps } from './types';
import styled from '@emotion/styled';
import { theme } from '../../../theme';

const Select = styled('select')`
  width: 100%;
  padding: 6px 14px;
  font-weight: 500;
  line-height: 24px;
  border-radius: 8px;
  text-transform: none;
  color: #f5f5ff;
  border: solid 2px ${theme.cardBorder};
  background-color: ${theme.cardBg};
  outline: 0;
`;

const Option = styled('option')`
  padding: 10px 20px;
`;

export const FilterDropdown = memo<FilterProps>(function FilterDropdown({ options, onChange }) {
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      onChange(event.target.value);
    },
    [onChange]
  );

  return (
    <Select onChange={handleChange}>
      {options.map(option => (
        <Option key={option.key} value={option.key}>
          {option.text}
        </Option>
      ))}
    </Select>
  );
});
