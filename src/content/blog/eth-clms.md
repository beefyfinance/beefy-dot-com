---
date: 2026-07-20T12:00:00Z
header_image: "../../images/blog/eth-clm/cover.png"
short_description: "Beefy CLM arrives on Ethereum with managed Uniswap V3 products built for the deepest and toughest liquidity environment in DeFi."
sub_header: "Beefy CLM: Building for Ethereum"
title: "Beefy CLM: Building for Ethereum"
tags: [products]
---

![](../../images/blog/eth-clm/cover.mp4)

The public nature of building in DeFi is both a blessing and a curse. When every interaction in your product's history is displayed immutably for eternity, you are forced to live under constant scrutiny and earn any reputation for being battle-hardened.

But what does it really mean for a DeFi product to be battle-hardened? It is not just a test suite, a set of audits, or the approval of some respected developers. The real mark is lived experience: live users, large value, changing markets, unexpected edge cases, feedback loops, infrastructure improvements, and the quiet operational grind that turns a clever design into something users can rely on.

Nearly two years ago, Beefy launched our Cowcentrated Liquidity Manager, or CLM, product as our answer to one of DeFi's hardest product problems: making the higher fee potential of concentrated liquidity easier to access without forcing users to manually adjust ranges, compound fees and manage their position. Since its launch, CLM has moved from a novel design to a mature system; the system has become more complete, crystallized and better supported by the knowledge, tooling and processes we've built around it.

To stand strong for two years handling hundreds of millions of dollars in value, without any failures or attacks is a mark of success. CLM has become battle-hardened, established and ready for deployment across the deepest and most demanding liquidity environments in the EVM universe. And with that certainty and track record, it feels as though now is the right moment to bring CLM home to Ethereum.

## The CLM Way

For those not already familiar, concentrated liquidity lets liquidity providers place capital inside a defined price range instead of spreading it across every possible price. When that liquidity is active, tighter ranges can earn more fees because the capital is concentrated where trades are actually happening. Higher earnings and better capital efficiency are the magic of concentrated liquidity. But it can be a double-edged sword.

The market moves. Ranges drift. Fees need to be harvested or sit idle. A position that looks perfect at one price can become inactive, imbalanced or expensive to adjust at the next. For users, that turns a powerful liquidity primitive into a full-time management job.

CLM is Beefy's way of integrating these workflows back into the product. It aims to keep liquidity in tighter earning ranges, compound base earnings back into the position each day, and reduce the amount of active management required from users. Beefy takes a 9.5% performance fee on yield earned by the CLM, which sits below the common 10% norm for automated liquidity management and far below traditional "2 and 20" structures.

The core design difference is simple: CLM does not rebalance by selling tokens. When the LP is close enough to the edge of its range, the CLM withdraws and redeploys as much capital as possible into the main 50/50 position, then moves any leftover tokens on one side into a single-sided "alt" position. No managed concentrated liquidity product removes impermanent loss risk entirely, but avoiding token sales as part of rebalancing aims to minimise unnecessary realisation of that risk while keeping more capital working in range.

In short, CLM is not just about making ranges tighter. The goal is balance: tight enough to improve fee generation, wide and responsive enough to avoid excessive resets, idle time and needless realised losses. Better range management, better reset discipline, better compounding: a better experience.

## Building for Ethereum

Why the emphasis on Ethereum? Ethereum Mainnet is not just another deployment target. It is the canonical home of Uniswap V3, the deepest liquidity venue in the EVM world, and the place where concentrated liquidity management has always had the most to prove. Many automated liquidity management products have tried to take hold on Ethereum. None have truly become the default answer.

That is because Ethereum makes the work harder. Blocks are slower than many newer EVM chains, gas is materially higher, MEV is a constant threat, and every unnecessary reset or inefficient harvest matters more. A range that looks sensible in theory on other chains may perform completely differently where the execution environment suffers from finality delays and block rearrangements.

So, Beefy needed to treat Ethereum as an engineering problem, not just a launch checkbox. For this deployment, Beefy has made use of private RPCs, new onchain controls for harvesting, updates to our tick movement infrastructure, and new systems for analytics and reporting. Each piece works towards the same goal: cultivating CLM performance to offer the sharpest and best-prepared version of the product to face its most difficult conditions.

The last two years have given Beefy the runway to make these changes properly. We have added more checks around reset opportunities, built software for evaluating range performance, aligned range standards across pairs and improved the data available for prior performance analysis. CLM is still exposed to the normal risks of concentrated liquidity, including faster balance changes and impermanent loss, but the management layer has become more deliberate.

That is the standard Ethereum demands, and CLM is now ready to meet it.

## Ready To Launch

Today, Beefy launches on Ethereum with four new Uniswap V3 CLMs. These are practical, high-liquidity starting points for bringing managed concentrated liquidity to Mainnet and targeting high-value positions. They are far from the end of the Ethereum CLM lineup.

The launch products deliver four combinations across the two largest blue chips - WBTC and WETH - and the two largest stablecoins - USDT and USDC. Each gives users a route into Ethereum concentrated liquidity through the Beefy experience: automated management, daily compounding of base earnings and the familiar ability to participate without manually rebuilding positions yourself. Our application provides granular analytics for the performance of the pool, the CLM and the user’s own position, providing industry-leading insights free of charge. Each also enters a market with serious competition, giving Beefy a clear benchmark for performance.

We are starting with Uniswap V3 because it remains the reference point for concentrated liquidity on Ethereum. But CLM was built to be flexible across protocols, pairs and market structures. More Ethereum CLM opportunities are already in motion, and the list of new opportunities keeps growing every day.

## Our Culmination

This launch is a milestone for CLM, but it is also a thank you. To everyone who tried the product early, asked hard questions, gave feedback, watched performance, requested new pairs and helped us refine the system: you helped shape what CLM has become.

Product maturity does not happen in private. To become battle-hardened, we rely on you to put our product through its paces.

You can now try the first Ethereum CLMs here:

- [WBTC/USDC 0.3% Uniswap V3 CLM](https://app.beefy.com/vault/uniswap-cow-ethereum-wbtc-usdc-rp)
- [WBTC/WETH 0.3% Uniswap V3 CLM](https://app.beefy.com/vault/uniswap-cow-ethereum-wbtc-weth-rp)
- [WETH/USDT 0.3% Uniswap V3 CLM](https://app.beefy.com/vault/uniswap-cow-ethereum-weth-usdt-rp)
- [USDC/WETH 0.05% Uniswap V3 CLM](https://app.beefy.com/vault/uniswap-cow-ethereum-usdc-weth-rp)

If there are Ethereum CLMs you want to see in the future, head to the Beefy Discord and drop your ideas in the #vault-requests channel. We're building out the lineup from here, so now is the time to request any CLMs that are not live yet.

CLM started as a new way to think about automated liquidity management. Nearly two years later, it arrives on Ethereum as a mature product, backed by better tooling, stronger infrastructure and a clearer understanding of what Mainnet demands.

CLM is ready for Ethereum. Now let's go prove it.

[Beefy App](https://app.beefy.com/) | [CLM Docs](https://docs.beefy.finance/beefy-products/clm) | [Beefy Discord](https://beefy.finance/discord)