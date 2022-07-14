import React, { memo } from 'react';
import { Section } from '../Section';
import { Stats } from './Stats';
import { Icons } from './Icons';

export const Ecosystem = memo(function Ecosystem() {
  return (
    <Section title="Our Ecosystem" contentContainer="none">
      <Stats />
      <Icons />
    </Section>
  );
});
