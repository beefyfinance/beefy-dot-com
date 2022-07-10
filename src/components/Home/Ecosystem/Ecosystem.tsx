import React, { memo } from 'react';
import { Section } from '../Section';
import { Inner } from '../../Common/Inner';

export const Ecosystem = memo(function Ecosystem() {
  return (
    <Section title="Our Ecosystem" contentContainer="none">
      <Inner>stats</Inner>
      <div>logos</div>
    </Section>
  );
});
