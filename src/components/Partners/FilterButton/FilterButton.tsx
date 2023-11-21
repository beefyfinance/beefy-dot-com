import React from 'react';
import styled from '@emotion/styled';
import { theme } from '../../../theme';

type FilterButtonProps = {
  isActive: boolean;
  text: string;
  onClick: () => void;
};

type ButtonProps = {
  isActive: boolean;
};

const Button = styled.p<ButtonProps>`
  border-radius: 12px;
  border: 2px solid ${theme.cardBorder};
  padding: ${theme.spacing(1)};
  min-width: 70px;
  text-align: center;
  margin: 0;
  cursor: pointer;
  color: ${props => (props.isActive ? 'inherit' : theme.text.dark)};
`;

export const FilterButton = ({ isActive, text, onClick }: FilterButtonProps) => {
  return (
    <Button onClick={onClick} isActive={isActive}>
      {text}
    </Button>
  );
};
