import React, { memo } from 'react';
import { FilterProps } from './types';
import { FilterButton } from './FilterButton';

export const FilterButtons = memo<FilterProps>(function FilterButtons({
  options,
  selected,
  onChange,
}) {
  return (
    <>
      {options.map(option => (
        <FilterButton
          key={option.key}
          selected={option.key === selected}
          text={option.text}
          value={option.key}
          onSelected={onChange}
        />
      ))}
    </>
  );
});
