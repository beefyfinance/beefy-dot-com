import React, { memo } from 'react';
import styled from '@emotion/styled';
import { MediaKitGroup } from '../../../data/queries/media-kit';
import { Group as BaseGroup } from './Group';
import { theme } from '../../../theme';

const Group = styled(BaseGroup)``;

const GroupsOuter = styled.div`
  ${Group} + ${Group} {
    margin-top: ${theme.spacing(5)};
  }
`;

export type GroupsProps = {
  className?: string;
  groups: MediaKitGroup[];
};

export const Groups = memo<GroupsProps>(function Groups({ className, groups }) {
  return (
    <GroupsOuter className={className}>
      {groups.map(group => (
        <Group key={group.groupId} group={group} />
      ))}
    </GroupsOuter>
  );
});
