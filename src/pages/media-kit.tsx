import React, { memo, useMemo } from 'react';
import { PageTitle } from '../components/MediaKit/PageTitle';
import { Groups } from '../components/MediaKit/Groups';
import { graphql } from 'gatsby';
import { MediaKitQueryResult } from '../data/queries/media-kit';
import { Inner } from '../components/Common/Inner';
import styled from '@emotion/styled';
import { theme } from '../theme';

type MediaKitPageProps = {
  data: {
    allMediaKitGroupsJson: MediaKitQueryResult['allMediaKitGroupsJson'];
  };
};

const Outer = styled.div`
  padding: ${theme.spacing(7.5)} 0;
`;

const MediaKitPage = memo<MediaKitPageProps>(function MediaKitPage({ data }) {
  const groups = useMemo(
    () => data.allMediaKitGroupsJson.edges.map(edge => edge.node),
    [data.allMediaKitGroupsJson.edges]
  );

  return (
    <Outer>
      <Inner>
        <PageTitle />
        <Groups groups={groups} />
      </Inner>
    </Outer>
  );
});

export const pageQuery = graphql`
  query {
    allMediaKitGroupsJson {
      edges {
        node {
          ...MediaKitFragment
        }
      }
    }
  }
`;

export default MediaKitPage;
