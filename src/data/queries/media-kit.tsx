import { graphql } from 'gatsby';

export type MediaKitItem = {
  itemId: string;
  groupId: string;
  label: string;
  versions: string[];
  background: 'light' | 'dark';
};

export type MediaKitGroup = {
  groupId: string;
  label: string;
  items: MediaKitItem[];
};

export type MediaKitQueryResult = {
  allMediaKitGroupsJson: {
    edges: {
      node: MediaKitGroup;
    }[];
  };
};

export const mediaKitFragment = graphql`
  fragment MediaKitFragment on MediaKitGroupsJson {
    groupId
    label
    items {
      itemId
      groupId
      label
      versions
      background
    }
  }
`;
