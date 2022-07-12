import React, { memo } from 'react';
import { Section } from '../Section';
import { IconsBackground } from './IconsBackground';
import { Stats } from './Stats';

export const Ecosystem = memo(function Ecosystem() {
  return (
    <Section title="Our Ecosystem" contentContainer="none">
      <Stats />
      <IconsBackground />
    </Section>
  );
});
