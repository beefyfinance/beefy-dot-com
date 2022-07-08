import React, { memo, ReactNode } from 'react';
import styled from '@emotion/styled';
import { Inner } from '../Inner';
import { theme } from '../../../theme';
import { SectionTitle } from './components/SectionTitle';
import { SectionSubTitle } from './components/SectionSubTitle';

type SectionProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

const Outer = styled.section`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${theme.spacing4};
`;

export const Section = memo<SectionProps>(function Section({ children, title, subtitle }) {
  return (
    <Outer>
      <Inner>
        <TitleContainer>
          <SectionTitle title={title} />
          {subtitle && <SectionSubTitle subtitle={subtitle} />}
        </TitleContainer>
        {children}
      </Inner>
    </Outer>
  );
});
