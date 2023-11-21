import React, { memo } from 'react';
import { NormalizedPartnerItem } from '../../../data/queries/partners';
import styled from '@emotion/styled';
import { theme } from '../../../theme';
import { keyframes } from '@emotion/react';

export type PartnerCardProps = {
  partner: NormalizedPartnerItem;
  visible: boolean;
};

interface AnimatedItemProps {
  visible: boolean;
}

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

const Card = styled.div<AnimatedItemProps>`
  position: relative;
  background-color: ${theme.cardBg};
  border-radius: 12px;
  padding: ${theme.spacing(4)};
  transition-duration: 0.15s;
  opacity: 0;
  animation: ${({ visible }) => (visible ? fadeIn : fadeOut)} 0.3s ease-in-out forwards;

  &.exit {
    animation: ${fadeOut} 0.3s ease-in-out forwards;
  }
`;

const PartnerType = styled.p`
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 0 12px 0 12px;
  margin: 0;
  padding: 6px 12px;
  background-color: #2a2b42;
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 18px;
`;

const Image = styled.img`
  height: 64px;
  max-width: 64px;
  margin-right: 20px;
`;

const Title = styled.h2`
  ${theme.h3};
  color: ${theme.text.light};
  margin-bottom: ${theme.spacing(1)};
`;

const PartnerLink = styled.a`
  color: ${theme.text.middle};
`;

const Description = styled.div`
  ${theme.bodyLg};
  color: ${theme.text.middle};
`;

function getLogoUrl(logoName: string) {
  try {
    return require(`!url-loader?limit=false!../../../images/partners/${logoName}`).default;
  } catch (error) {
    console.error(logoName, 'is missing.');
    return null;
  }
}

export const PartnerCard = memo<PartnerCardProps>(function PartnerCard({ partner, visible }) {
  return (
    <Card visible={visible}>
      <PartnerType>{partner.category}</PartnerType>
      <CardHeader>
        <Image src={getLogoUrl(partner.logo)} alt={partner.name} />
        <div>
          <Title>{partner.name}</Title>
          <PartnerLink target="_blank" rel="noopener" href={partner.url}>
            {partner.friendlyUrl}
          </PartnerLink>
        </div>
      </CardHeader>
      <Description>{partner.description}</Description>
    </Card>
  );
});
