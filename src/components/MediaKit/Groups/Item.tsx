import React, { memo } from 'react';
import styled from '@emotion/styled';
import { MediaKitItem } from '../../../data/queries/media-kit';
import { theme } from '../../../theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Card = styled.div`
  background-color: ${theme.cardBg};
  border: 2px solid ${theme.cardBorder};
  border-radius: 12px;
  text-decoration: none;
`;

type MediaHolderProps = { background: 'light' | 'dark' };
const MediaHolder = styled.div<MediaHolderProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 125px;
  padding: ${theme.spacing(4)};
  background: ${({ background }) => (background === 'light' ? '#F5F5FF' : '#363B63')};
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom: 2px solid ${theme.cardBorder};
`;

const Media = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
  object-fit: scale-down;
`;

const DetailsHolder = styled.div`
  padding: ${theme.spacing(3)};
`;

const Label = styled.div`
  ${theme.bodyLgMed}
  color: ${theme.text.middle};
`;

const Versions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing(1)};
  margin-top: ${theme.spacing(1)};
`;

const Version = styled.a`
  ${theme.bodyLg}
  color: ${theme.text.middle};
  text-decoration: none;
  padding: 2px 8px;
  border-radius: 4px;
  background: #363b63;
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: ${theme.spacing(1)};
`;

function getMediaUrl(groupId: string, itemId: string, version: string) {
  // disable inlining
  return require(`!url-loader?limit=false!../../../images/media-kit/${groupId}/${itemId}.${version}`)
    .default;
}

export type ItemProps = {
  item: MediaKitItem;
};

export const Item = memo<ItemProps>(function Item({ item }) {
  return (
    <Card>
      <MediaHolder background={item.background}>
        <Media src={getMediaUrl(item.groupId, item.itemId, item.versions[0])} alt={item.label} />
      </MediaHolder>
      <DetailsHolder>
        <Label>{item.label}</Label>
        <Versions>
          {item.versions.map(version => (
            <Version
              key={version}
              target="_blank"
              href={getMediaUrl(item.groupId, item.itemId, version)}
            >
              <Icon icon={faDownload} />
              {version.toUpperCase()}
            </Version>
          ))}
        </Versions>
      </DetailsHolder>
    </Card>
  );
});
