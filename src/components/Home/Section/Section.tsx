import React, { memo, ReactNode } from 'react';
import styled from '@emotion/styled';
import { FluidInner, Inner } from '../../Common/Inner';
import { theme } from '../../../theme';
import { SectionTitle } from './SectionTitle';
import { SectionSubTitle } from './SectionSubTitle';

type SectionProps = {
  title: string;
  subtitle?: string;
  contentContainer?: 'contained' | 'fluid' | 'none';
  children: ReactNode;
};

const Outer = styled.section`
  padding: ${theme.spacing(7.5)} 0;
`;

const TitleContainer = styled(Inner)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${theme.spacing(4)};
`;

export const Section = memo<SectionProps>(function Section({
  children,
  title,
  subtitle,
  contentContainer = 'contained',
}) {
  const ContentContainer = contentContainer === 'fluid' ? FluidInner : Inner;

  return (
    <Outer>
      <TitleContainer>
        <SectionTitle title={title} />
        {subtitle && <SectionSubTitle subtitle={subtitle} />}
      </TitleContainer>
      {contentContainer === 'none' ? children : <ContentContainer>{children}</ContentContainer>}
    </Outer>
  );
});
