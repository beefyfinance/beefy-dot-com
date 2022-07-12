import React, { memo } from 'react';
import styled from '@emotion/styled';
import { Inner } from '../Inner';
import { Link } from 'gatsby';
import { theme } from '../../../theme';
import discord from '../../../images/footer/discord.svg';
import twitter from '../../../images/footer/twitter.svg';
import telegram from '../../../images/footer/telegram.svg';
import github from '../../../images/footer/github.svg';
import reddit from '../../../images/footer/reddit.svg';

const data = [
  { name: 'github', img: github, link: '' },
  { name: 'telegram', img: telegram, link: '' },
  { name: 'discord', img: discord, link: '' },
  { name: 'twitter', img: twitter, link: '' },
  { name: 'reddit', img: reddit, link: '' },
];

const Outer = styled.footer`
  display: flex;
  align-items: center;
  padding: 40px 0px;
  background-color: ${theme.footer};
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  column-gap: ${theme.spacing(3)};
  margin-bottom: ${theme.spacing(4)};
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  column-gap: ${theme.spacing(3)};
`;

const ExternalIconLink = styled('a')``;

const Icon = styled.img`
  height: 24px;
`;

const ExternalAnchor = styled('a')({
  ...theme.bodyLgMed,
  color: theme.text.dark,
  textDecoration: 'none',
});

const ExternalLink = ExternalAnchor.withComponent(Link);

export const Footer = memo(function Footer() {
  return (
    <Outer>
      <Inner>
        <ContentContainer>
          <ExternalAnchor href="/media-kit">Vote</ExternalAnchor>
          <ExternalLink to="/media-kit">Media Kit</ExternalLink>
          <ExternalLink to="/articles">Blog</ExternalLink>
          <ExternalAnchor href="/docs">Docs</ExternalAnchor>
          <ExternalAnchor href="/audit">Audit</ExternalAnchor>
        </ContentContainer>
        <IconsContainer>
          {data.map(item => (
            <ExternalIconLink href={item.link} target="_blank">
              <Icon src={item.img} alt={item.name} />
            </ExternalIconLink>
          ))}
        </IconsContainer>
      </Inner>
    </Outer>
  );
});
