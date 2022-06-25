import React, { memo } from 'react';
import styled from '@emotion/styled';
import { Inner } from '../Inner';
import { Link } from 'gatsby';

const Outer = styled.footer`
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: #121212;
`;

export const Footer = memo(function Footer() {
  return (
    <Outer>
      <Inner>
        Footer <Link to="/media-kit">Media Kit</Link>
      </Inner>
    </Outer>
  );
});
