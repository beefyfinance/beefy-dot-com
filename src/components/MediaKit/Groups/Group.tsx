import React, { memo } from 'react';
import styled from '@emotion/styled';
import { MediaKitGroup } from '../../../data/queries/media-kit';
import { Items } from './Items';
import { theme } from '../../../theme';

const GroupOuter = styled.div``;

const Label = styled.h2`
  ${theme.h3}
  color: ${theme.text.middle};
`;

export type GroupProps = {
  className?: string;
  group: MediaKitGroup;
};

export const Group = memo<GroupProps>(function Group({ className, group }) {
  return (
    <GroupOuter className={className}>
      <Label>{group.label}</Label>
      <Items items={group.items} />
    </GroupOuter>
  );
});
