import React, { memo } from 'react';
import styled from '@emotion/styled';
import { theme } from '../../../theme';

type SectionSubTitleProps = {
  subtitle: string;
};

const SubTitle = styled.h1({
  ...theme.bodyLg,
  color: theme.text.middle,
});

export const SectionSubTitle = memo<SectionSubTitleProps>(function SectionSubTitle({ subtitle }) {
  return <SubTitle>{subtitle}</SubTitle>;
});
