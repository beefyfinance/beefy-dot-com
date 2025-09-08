import React, { memo } from 'react';
import { NormalizedPartnerItem } from '../../../data/queries/partners';
import styled from '@emotion/styled';
import { theme } from '../../../theme';
import { keyframes } from '@emotion/react';
import webSvg from '../../../images/web.svg';

export type PartnerCardProps = {
  partner: NormalizedPartnerItem;
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const Card = styled.div`
  background-color: ${theme.cardBg};
  border: 2px solid ${theme.cardBg};
  border-radius: 8px;
  transition-duration: 0.15s;
  opacity: 0;
  animation: ${fadeIn} 0.3s ease-in-out forwards;

  &.exit {
    animation: ${fadeOut} 0.3s ease-in-out forwards;
  }
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 16px;
  padding: ${16 - 2}px;
  background-color: ${theme.cardHeader};
  border-radius: 8px 8px 0px 0px;
  height: 88px;
`;

const Image = styled.img`
  height: 48px;
  max-width: 48px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: flex-start;
`;

const Title = styled.h2`
  ${theme.h2};
  color: ${theme.text.light};
  margin-bottom: 4px;
`;

const Tag = styled.div`
  ${theme.sublineSm};
  font-weight: 700;
  border-radius: 4px;
  background-color: ${theme.button};
  padding: 2px 8px;
  color: ${theme.text.middle};
  white-space: nowrap;
  flex-shrink: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
`;

const PartnerLink = styled.a`
  color: ${theme.text.middle};
  border-radius: 4px;
  background-color: ${theme.button};
  padding: 4px;
  display: flex;
  align-items: center;
  :hover: {
    background-color: ${theme.buttonHover};
  }
`;
const PartnerLinkContainer = styled.div`
  margin-bottom: auto;
`;

const Description = styled.div`
  ${theme.bodyLg};
  color: ${theme.text.middle};
  padding: ${16 - 2}px;
`;

const WebSvg = styled.img`
  fill: ${theme.text.middle};
  height: 18px;
`;

function getLogoUrl(logoName: string) {
  try {
    return require(`!url-loader?limit=false!../../../images/partners/${logoName}`).default;
  } catch (error) {
    console.error(logoName, 'is missing.');
    return null;
  }
}

export const PartnerCard = memo<PartnerCardProps>(function PartnerCard({ partner }) {
  return (
    <Card>
      <CardHeader>
        <Image src={getLogoUrl(partner.logo)} alt={partner.name} />
        <Text>
          <Title>{partner.name}</Title>
          <Tag>{partner.category}</Tag>
        </Text>
        <PartnerLinkContainer>
          <PartnerLink target="_blank" rel="noopener" href={partner.url}>
            <WebSvg src={webSvg} alt="svg" />
          </PartnerLink>
        </PartnerLinkContainer>
      </CardHeader>
      <Description>{partner.description}</Description>
    </Card>
  );
});
