import React, { memo } from 'react';
import styled from '@emotion/styled';
import { theme } from '../../../theme';

type SectionTitleProps = {
  title: string;
};

const Title = styled.h1({
  ...theme.h1,
  color: theme.text.light,
  marginBottom: theme.spacing(2),
});

export const SectionTitle = memo<SectionTitleProps>(function SectionTitle({ title }) {
  return <Title>{title}</Title>;
});
