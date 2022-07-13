import React, { memo, MouseEventHandler } from 'react';
import styled from '@emotion/styled';
import { theme } from '../../../theme';

const ButtonsContainer = styled.div`
  display: flex;
  height: 40px;
  width: fit-content;
  border: 2px solid #303550;
  border-radius: 8px;
  background-color: #262a40;
`;

const Button = styled.button`
  ${theme.bodyLgMed};
  color: ${theme.text.middle};
  background-color: inherit;
  border: none;
  border-radius: 6px;
  box-shadow: none;
  cursor: pointer;
  margin: 0;
  padding: '6px 16px';
  flex-grow: 1;
  flex-shrink: 0;
  &:hover {
    color: #d0d0da;
    background-color: rgba(245, 245, 255, 0.08);
    box-shadow: none;
  }
  &.active,
  &:hover:active {
    color: ${theme.text.light};
    background-color: ${theme.primary};
  }
`;

const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${theme.spacing(5)};
`;

const options = [
  { value: 'singleAsset', text: 'Single Asset' },
  { value: 'lp', text: 'Liquidity Pools' },
  { value: 'earningPools', text: 'Earning Pools' },
  { value: 'zap', text: 'Zap' },
];

interface ToggleProps {
  handler: (value: string) => MouseEventHandler<HTMLButtonElement>;
  value: string;
}

export const Toggle = memo<ToggleProps>(function Toggle({ handler, value }) {
  return (
    <ToggleContainer>
      <ButtonsContainer>
        {options.map(item => (
          <Button
            onClick={() => handler(item.value)}
            className={item.value === value ? 'active' : ''}
          >
            {item.text}
          </Button>
        ))}
      </ButtonsContainer>
    </ToggleContainer>
  );
});

/*
buttons: {
    display: 'flex',
    width: 'fit-content',
    border: 'solid 2px #303550',
    borderRadius: '8px',
    backgroundColor: '#262A40',
  },
  fullWidth: {
    width: '100%',
  },
  button: {
    ...theme.typography['body-lg-med'],
    color: '#8A8EA8',
    backgroundColor: 'inherit',
    border: 'none',
    borderRadius: '6px',
    boxShadow: 'none',
    cursor: 'pointer',
    margin: 0,
    padding: `6px 16px`,
    flexGrow: 1,
    flexShrink: 0,
    '&:hover': {
      color: '#D0D0DA',
      backgroundColor: 'rgba(245, 245, 255, 0.08)',
      boxShadow: 'none',
    },
    '&:active, &:hover:active': {
      color: '#ffffff',
      backgroundColor: theme.palette.primary.main,
    },
  },
  selected: {
    pointerEvents: 'none' as const,
    color: '#ffffff',
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      color: '#ffffff',
      backgroundColor: theme.palette.primary.main,
    },
  },



*/
