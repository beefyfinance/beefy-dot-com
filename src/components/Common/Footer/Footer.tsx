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
import debank from '../../../images/footer/debank.svg';

const data = [
  { name: 'github', img: github, link: 'https://github.com/beefyfinance' },
  { name: 'telegram', img: telegram, link: 'https://t.me/beefyfinance' },
  { name: 'discord', img: discord, link: 'https://beefy.finance/discord' },
  { name: 'twitter', img: twitter, link: 'https://twitter.com/beefyfinance' },
  { name: 'reddit', img: reddit, link: 'https://www.reddit.com/r/Beefy/' },
  { name: 'debank', img: debank, link: 'https://debank.com/official/Beefy/' },
];

const Outer = styled.footer`
  display: flex;
  align-items: center;
  padding: 40px 0px;
  background-color: ${theme.footer};
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${theme.spacing(2)};
  margin-bottom: ${theme.spacing(4)};
  @media (min-width: ${theme.breakpoints.lg}px) {
    gap: ${theme.spacing(3)};
  }
`;

const Icons = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${theme.spacing(3)};
`;

const ExternalIconLink = styled('a')`
  display: block;
  text-decoration: none;
`;

const Icon = styled.img`
  height: 24px;
`;

const ExternalLink = styled('a')`
  ${theme.bodyLgMed}
  color: ${theme.text.dark};
  text-decoration: none;
  white-space: nowrap;
`;

const InternalLink = ExternalLink.withComponent(Link);

export const Footer = memo(function Footer() {
  return (
    <Outer>
      <Inner>
        <Links>
          <ExternalLink href="https://vote.beefy.finance/" target="_blank">
            Proposals
          </ExternalLink>
          <InternalLink to="/articles">News</InternalLink>
          <ExternalLink href="https://docs.beefy.finance" target="_blank">
            Docs
          </ExternalLink>
          <ExternalLink href="https://github.com/beefyfinance/beefy-audits" target="_blank">
            Audit
          </ExternalLink>
          <InternalLink to={'/media-kit'}>Media Kit</InternalLink>
          <InternalLink to={'/partners'}>Partners</InternalLink>
        </Links>
        <Icons>
          {data.map(item => (
            <ExternalIconLink key={item.link} href={item.link} target="_blank">
              <Icon src={item.img} alt={item.name} />
            </ExternalIconLink>
          ))}
        </Icons>
      </Inner>
    </Outer>
  );
});
