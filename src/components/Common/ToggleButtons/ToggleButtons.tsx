import React, { FC, memo, useCallback } from 'react';
import styled from '@emotion/styled';
import { ToggleButton, ToggleButtonProps } from './ToggleButton';

type ToggleButtonsProps = {
  value: string;
  options: Record<string, string>;
  onChange: (value: string) => void;
  className?: string;
  ButtonComponent?: FC<ToggleButtonProps>;
};

const Buttons = styled.div`
  display: inline-flex;
  background-color: #262a40;
  border: 2px solid #303550;
  border-radius: 8px;
`;

export const ToggleButtons = memo<ToggleButtonsProps>(function ToggleButtons({
  value,
  options,
  onChange,
  className,
  ButtonComponent = ToggleButton,
}) {
  const handleChange = useCallback<ToggleButtonsProps['onChange']>(
    value => {
      onChange(value);
    },
    [onChange]
  );

  return (
    <Buttons className={className}>
      {Object.entries(options).map(([key, label]) => (
        <ButtonComponent
          key={key}
          onChange={handleChange}
          value={key}
          label={label}
          selected={key === value}
        />
      ))}
    </Buttons>
  );
});
