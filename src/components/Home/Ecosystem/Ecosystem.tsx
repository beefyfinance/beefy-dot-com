import React, { memo } from 'react';
import { Section } from '../Section';
import { Stats } from './Stats';
import { Icons } from './Icons';
import { PrimaryLink } from '../../Common/Buttons';
import styled from '@emotion/styled';
import { theme } from '../../../theme';

const Buttons = styled.div`
  text-align: center;
  margin-top: ${theme.spacing(8)};
`;

export const Ecosystem = memo(function Ecosystem() {
  return (
    <Section title="Our Ecosystem" contentContainer="none">
      <Stats />
      <Icons />
      <Buttons>
        <PrimaryLink to="/partners/">Explore Partners</PrimaryLink>
      </Buttons>
    </Section>
  );
});
