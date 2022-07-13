import React, { memo } from 'react';
import styled from '@emotion/styled';
import { theme } from '../../../theme';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ButtonsContainer = styled(Swiper)`
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
  padding: 6px 16px;
  flex-grow: 1;
  flex-shrink: 0;
  width: 100%;
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
  handler: (value: string) => void;
  value: string;
}

export const Toggle = memo<ToggleProps>(function Toggle({ handler, value }) {
  return (
    <ToggleContainer>
      <ButtonsContainer
        breakpoints={{
          [theme.breakpoints.md]: {
            slidesPerView: 4,
          },
        }}
        slidesPerView={2.5}
      >
        {options.map(item => (
          <SwiperSlide key={item.value}>
            <Button
              onClick={() => handler(item.value)}
              className={item.value === value ? 'active' : ''}
            >
              {item.text}
            </Button>
          </SwiperSlide>
        ))}
      </ButtonsContainer>
    </ToggleContainer>
  );
});
