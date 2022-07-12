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
  { name: 'github', img: github, link: 'https://github.com/beefyfinance' },
  { name: 'telegram', img: telegram, link: 'https://t.me/beefyfinance' },
  { name: 'discord', img: discord, link: 'https://discord.gg/yq8wfHd' },
  { name: 'twitter', img: twitter, link: 'https://twitter.com/beefyfinance' },
  { name: 'reddit', img: reddit, link: 'https://www.reddit.com/r/Beefy/' },
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

const CustomLink = ExternalAnchor.withComponent(Link);

export const Footer = memo(function Footer() {
  return (
    <Outer>
      <Inner>
        <ContentContainer>
          <ExternalAnchor href="https://vote.beefy.finance/" target="_blank">
            Vote
          </ExternalAnchor>
          <ExternalAnchor href="https://dashboard.beefy.finance/" target="_blank">
            Stats
          </ExternalAnchor>
          <CustomLink to="/articles">Blog</CustomLink>
          <ExternalAnchor href="https://docs.beefy.finance" target="_blank">
            Docs
          </ExternalAnchor>
          <ExternalAnchor href="https://github.com/beefyfinance/beefy-audits" target="_blank">
            Audit
          </ExternalAnchor>
          <CustomLink to={'/media-kit'}>Media Kit</CustomLink>
        </ContentContainer>
        <IconsContainer>
          {data.map(item => (
            <ExternalIconLink key={item.link} href={item.link} target="_blank">
              <Icon src={item.img} alt={item.name} />
            </ExternalIconLink>
          ))}
        </IconsContainer>
      </Inner>
    </Outer>
  );
});
