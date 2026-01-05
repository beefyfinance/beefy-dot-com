---
date: 2023-09-13T12:00:00Z
header_image: "../../images/blog/lz-aura/cover.png"
short_description: "Announcing a paradigm shift in Beefy's product lineup, with the introduction of LayerZero crosschain strategies in partnership with Aura Finance."
sub_header: "The Next Generation: Crosschain Yield Optimization with Beefy x LayerZero x Aura"
title: "The Next Generation: Crosschain Yield Optimization with Beefy x LayerZero x Aura"
tags: [products, partners]
---

![](../../images/blog/lz-aura/cover.png)

Every once in a while, an innovation comes along that changes the way the game is played. No, we're not talking world-ending or life-changing... that may be a tad dramatic! But we are talking about a paradigm shift. An innovation that changes the way we think about the way things are and the way they can be. The key that unlocks the next generation.

Today, Beefy is proud to announce the latest evolution of our product lineup. Today, we welcome the introduction of **crosschain strategies**! 

Together with our friends at LayerZero and Aura, we've been working collectively and tirelessly towards our shared dream of full crosschain DeFi. That dream is one where governance, tokenomics and yield opportunities from opposite sides of the EVM universe can be brought together seamlessly, and users can access optimal yields no matter whose blockspace they inhabit. And together, we're pleased to deliver our first demonstrations of that concept - our new [Gyroscope wstETH-ETH vault](https://app.beefy.finance/vault/beets-eclp-wsteth-eth) and [Gyroscope stMATIC-MATIC vault](https://app.beefy.finance/vault/aura-polygon-gyro-matic-stmatic)... two next-generation yield strategies that unleashes the full potential of crosschain yield optimization.

### LayerZero

Before we dive into crosschain strategies, a quick refresher of the *dramatis personae*.

[LayerZero](https://layerzero.network/) is a leading network for crosschain messaging across over 30 different blockchains. Among many other use cases, LayerZero's technology can facilitate near-instant bridging transactions, including through its affiliated bridging protocol [Stargate](https://stargate.finance/). The flexibility and ease of LayerZero's technology makes working across different chains far easier, opening the floodgates to a whole range of possibilities.

To recap the technical details, LayerZero’s service adopts a standard called “Omnichain Fungible Tokens” (or **“OFTs”**) to facilitate the transmission of tokens across different blockchains. OFTs are smart contracts deployed by the projects wanting to utilise the LayerZero network on each of the chains which it wishes to incorporate into its service. The OFT contract is used to hold assets being bridged on the source chain, and mint assets being received on the target chain.

The system facilitates the minting and burning of assets by sending a standardized message on the source chain to an endpoint for LayerZero’s router. The router then processes the message and returns a separate standardized message back to the OFT on the target chain. Unlike many other bridging services, this means LayerZero does not itself custody the bridged assets, but stores assets in the project’s smart contracts. Because it’s non-custodial, it’s also incredibly quick, allowing assets to be bridged in a matter of minutes versus weeks for traditional canonical bridges.

LayerZero’s technology provides the framework and skeleton for our new crosschain strategy.

### Aura

Adding flesh to the bones, we're thrilled to be exploring this shift in paradigms with our frens at [Aura Finance](https://aura.finance/). Aura is a protocol and community which aims to bring a holistic approach to vote escrow tokenomic designs, and facilitate community ownership of some of DeFi's most important liquidity protocols. Specifically, Aura is the [largest stakeholder](https://www.defiwars.xyz/wars/balancer) of [Balancer](https://balancer.fi/), with over 36% of $BAL tokens locked up in its $auraBAL token at the time of writing.

Beyond being one of the core communities at the heart of the Balancer ecosystem, Aura has been designed to operate agnostically towards all manner of vote-locked or vote-escrowed tokens, giving it the latitude to deliver its diligent approach to vote aggregation as part of a broader approach to DeFi governance at large. At the heart of Aura’s spirit are fundamental principles of community ownership of our public, open-source resources. The Aura team are closely aligned with Balancer (as well as other key contributors to the Balancer ecosystem), and work effectively together to align, steer and deliver on the interests (and chakras) of the community, whilst delivering ever-higher yields on users’ $BAL tokens.

Having started on Balancer’s native Ethereum, Aura has gradually expanded its way across the EVM universe to chains like Arbitrum (through Balancer) and Optimism (on top of Balancer-fork Beethoven X). However, the team remains focused on maintaining strong and efficient liquidity on its core chains. This means that $AURA rewards distributed on smaller chains (e.g. Optimism) can be at the mercy of low liquidity, when compared with larger chains (e.g. Arbitrum). With our existing product suite, this makes it difficult for Beefy to run effective strategies on Aura’s smaller chains, as compounding into $ETH through low liquidity means less-efficient swaps which eat away at users’ return. But no more…

### Crosschain Strategies

Bringing together the power and the potential of both LayerZero and Aura, Beefy is proud to launch our [Gyroscope wstETH-ETH vault](https://app.beefy.finance/vault/beets-eclp-wsteth-eth) and [Gyroscope stMATIC-MATIC vault](https://app.beefy.finance/vault/aura-polygon-gyro-matic-stmatic); our first strategies to take advantage of crosschain liquidity to optimize your yield. 

![](../../images/blog/lz-aura/vault.png)

How does it work? Simple! First, Beefy takes your correlated liquidity - for instance in [Beethoven X's liquidity bootstrapping pool with Gyroscope](https://op.beets.fi/pool/0x7ca75bdea9dede97f8b13c6641b768650cb837820002000000000000000000d5) - which is already earning $BAL rewards. Then, it deposits that liquidity into [Aura's vaults](https://app.aura.finance/#/10/pool/6) to earn additional $AURA rewards for you. Next, it aims to trade those rewards for the principal asset to reinvest; at this stage it uses Aura's LayerZero OFT to bridge the $AURA rewards to Arbitrum and access the better liquidity available there. To get those rewards back to users, the received tokens are bridged back to the relevant chain using Stargate. Finally, the tokens are redeposited into the liquidity pool, to trigger the autocompounding effect which our users know and love.

Okay, so maybe the new strategy isn't *that* simple. But the ramifications are unprecedented: users can relax knowing that Beefy is automatically reinvesting all of their rewards for them; autocompounding achieves higher APYs than you can earn directly; bridging to Arbitrum means more organized liquidity for Aura and more efficient swaps; and tying it all together means more activity and use cases for LayerZero, Stargate, Aura, BeethovenX, Balancer and Beefy. It's a win-win-win-win-win-win-win.

### The Next Generation

Hopefully by now we've driven home the significance of this new yield farming technique. By demonstrating what's possible when yield optimization meets crosschain messaging, we open the floodgates to an enormous range of opportunities to optimize your yield. This added precision also helps partners to manage the liquidity of their tokens more efficiently, by steering Beefy's strategies to their preferred base chain for liquidity. Altogether, it's one small strategy for Beefy, one giant leap for DeFi.

As the dust settles, we expect that hundreds of new use cases will emerge, where the potential of crosschain bridging can be harnessed to offer access to better yields from wherever users keep their assets. And Beefy will be soaking up each and everyone of them, to unite our users, protocols and liquidity through the miracle of autocompounding. The next generation is here.

[LayerZero](https://layerzero.network/) | [Stargate](https://stargate.finance/) | [Aura](https://aura.finance/) | [Gyroscope wstETH-ETH vault](https://app.beefy.finance/vault/beets-eclp-wsteth-eth) | [Gyroscope stMATIC-MATIC vault](https://app.beefy.finance/vault/aura-polygon-gyro-matic-stmatic)