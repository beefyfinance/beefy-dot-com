import React, { memo } from 'react';
import styled from '@emotion/styled';
import { PrimaryLink } from '../../Common/Buttons';
import { theme } from '../../../theme';

const Pages = styled.div`
  display: flex;
`;

const PageLink = styled(PrimaryLink)`
  display: flex;
  align-items: center;
`;

const PrevLink = styled(PageLink)`
  margin-right: auto;

  &::before {
    content: '➔';
    display: block;
    transform: scaleX(-1);
    margin-right: ${theme.spacing()};
  }
`;

const NextLink = styled(PageLink)`
  margin-left: auto;

  &::after {
    content: '➔';
    display: block;
    margin-left: ${theme.spacing()};
  }
`;

export type ArticlePaginationProps = {
  currentPage: number;
  numPages: number;
  className?: string;
};
export const ArticlePagination = memo<ArticlePaginationProps>(function ArticlePagination({
  currentPage,
  numPages,
  className,
}) {
  const hasPrevious = currentPage > 1;
  const hasNext = currentPage < numPages;

  if (numPages <= 1) {
    return null;
  }

  return (
    <Pages className={className}>
      {hasPrevious ? (
        <PrevLink to={`/articles/${currentPage > 2 ? `page/${currentPage - 1}/` : ''}`} rel="prev">
          Previous
        </PrevLink>
      ) : null}
      {hasNext ? (
        <NextLink to={`/articles/page/${currentPage + 1}/`} rel="next">
          Next
        </NextLink>
      ) : null}
    </Pages>
  );
});
