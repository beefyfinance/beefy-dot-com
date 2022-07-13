import React, { memo } from 'react';
import styled from '@emotion/styled';
import { MediaKitItem } from '../../../data/queries/media-kit';
import { Item } from './Item';
import { theme } from '../../../theme';

const ItemsOuter = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  gap: ${theme.spacing(3)};
`;

export type ItemsProps = {
  items: MediaKitItem[];
};

export const Items = memo<ItemsProps>(function Items({ items }) {
  return (
    <ItemsOuter>
      {items.map(item => (
        <Item key={item.itemId} item={item} />
      ))}
    </ItemsOuter>
  );
});
