import React, { memo, useCallback } from 'react';
import { FilterItemProps } from './types';
import { theme } from '../../../theme';
import styled from '@emotion/styled';

type ButtonProps = {
  selected: boolean;
};

const Button = styled.button<ButtonProps>`
  ${theme.bodySmMed};
  background: ${({ selected }) => (selected ? theme.button : theme.cardHeader)};
  outline: none;
  box-shadow: none;
  border-radius: 12px;
  border: 2px solid ${theme.cardBorder};
  padding: ${theme.spacing(1)};
  min-width: 70px;
  text-align: center;
  margin: 0;
  cursor: pointer;
  color: ${({ selected }) => (selected ? 'inherit' : theme.text.dark)};
`;

export const FilterButton = memo<FilterItemProps>(function FilterButton({
  selected,
  text,
  value,
  onSelected,
}) {
  const handleClick = useCallback(() => {
    onSelected(value);
  }, [onSelected, value]);

  return (
    <Button onClick={handleClick} selected={selected}>
      {text}
    </Button>
  );
});
