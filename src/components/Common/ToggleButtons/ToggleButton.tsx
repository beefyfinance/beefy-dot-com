import React, { memo, ReactNode, useCallback } from 'react';
import styled from '@emotion/styled';
import { theme } from '../../../theme';

export type ToggleButtonProps = {
  label: string;
  value: string;
  selected: boolean;
  onChange: (value: string) => void;
  className?: string;
  children?: ReactNode;
};

type ButtonProps = { selected: boolean };
const Button = styled.button<ButtonProps>`
  ${theme.bodyLgMed}
  padding: 6px 16px;
  border-radius: 6px;
  border: none;
  white-space: nowrap;
  color: ${({ selected }) => (selected ? theme.text.light : theme.text.dark)};
  background-color: ${({ selected }) => (selected ? theme.primary : theme.cardHeader)};
  cursor: ${({ selected }) => (selected ? 'default' : 'pointer')};
`;

export const ToggleButton = memo<ToggleButtonProps>(function ToggleButton({
  label,
  value,
  selected,
  onChange,
  className,
}) {
  const handleClick = useCallback(() => {
    onChange(value);
  }, [onChange, value]);

  return (
    <Button onClick={handleClick} className={className} selected={selected}>
      {label}
    </Button>
  );
});
