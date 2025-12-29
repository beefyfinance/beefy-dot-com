---
date: 2023-10-10T12:00:00Z
header_image: "../../images/blog/migration-implementation/cover.png"
short_description: "The culmination of months of planning, building and preparing... the $BIFI migration to Ethereum is almost ready for lift off."
sub_header: "$BIFI Migration: All Engines Running"
title: "$BIFI Migration: All Engines Running"
tags: [governance]
---

![](../../images/blog/migration-implementation/cover.png)

In July, [we shared updates](https://beefy.com/articles/bifi-migration/) on our plans to undertake a radical migration of Beefy's governance, revenue and incentive distribution mechanisms, to reduce our reliance on the fallen Multichain protocol and relocate our project to Ethereum. It's been 3 hard months of planning, building and preparing, but the final hours are approaching fast. This article provides all the details you need to know about when and how your new $BIFI tokens will be arriving. 👇

### Draft Snapshot

Today, we have released an updated draft snapshot on the [Beefy Web App](https://snapshot.beefy.finance/). This sample snapshot is a proof of concept to show all the work we’ve done to unpick the distribution of the old $BIFI token and allocate those positions ready for the new token. This includes all of the stuck Multichain transactions, which we released in draft over the last couple of months, as well as all $BIFI in our Maxi Vaults and Governance Pools, and the vast majority of $BIFI liquidity pools held on externals DEXs. 

**Please note that neither the draft nor the official snapshot capture the allocation of assets for CEX users, as CEX holdings are aggregated across groups of users.** Your CEX will manage the receipt and distribution of new $BIFI tokens on your behalf.

This draft snapshot was updated on 9 October at 14:00 UTC/GMT, so activity after this will not be visible. The draft snapshot will be replaced in time with the full snapshot, with both being available at https://snapshot.beefy.finance/. Any issues should be flagged to us as soon as possible, ideally in the #🐄-general and #🤠-cowmoonity channels on the Beefy Discord, as this will impact on the timescales for the final distribution.

There are still a surprising amount of contracts out there holding $BIFI which are unsuitable for the distribution (i.e. because the contract isn’t on the deployment chains, and the address will not carry over).  As such, all tokenholders are kindly asked to review the site, check your allocations and make sure you're due to receive what you think you’re owed. 

**As a reminder, all users are strongly encouraged to: (1) break any remaining $BIFI LP positions; (2) exit all remaining BIFI Maxi vault positions; and (3) bridge back any BEP2 $BIFI tokens held on BNB Chain to BEP20 versions.**

### Official Snapshot

The official snapshot will be captured around 00:00:00 UTC on October 17th (midnight at the end of 16 October). For the avoidance of doubt, specific block numbers for all 20 deployed chains for the old $BIFI token will be used for the snapshot. As most chains do not add blocks each second, in many cases the final block will not be issued at exactly 00:00:00. There is no reliable way to predict the block numbers for each chain in advance, so users are strongly advised not to take actions (e.g. trading) which assume a specific block number for the snapshot.

It’s vitally important that fair notice is given ahead of the snapshot to allow users to plan their activity accordingly, and ensure they can avoid harm from trading in $BIFI in and around the snapshot. A week’s additional notice after the latest draft snapshot allows a further window for issues to be raised and fixes to be added if need be.

The process of gathering, combining and massaging the snapshot data takes a couple of hours, so this will not be completed and reflected instantaneously on the snapshot page. Beefy’s core team will promptly gather the data and confirm that the snapshot has been taken. The snapshot page will also be updated in due course so users can check the final amount that they will receive.

Given that the snapshot will mark the end of all use cases for the existing $BIFI token, it is expected that there may be significant trading volume around this time. All users are strongly advised not to trade the snapshot, as the combination of 20 different blockchains in the snapshot does leave some small room for unexpected issues (e.g. network outage). It is foreseeable that efforts to trade immediately after the snapshot could interfere with your captured allocation.

In the week following the official snapshot, liquidity for the new $BIFI token will be established and the migration to the new revenue bridge will be completed. The final action will be the distribution transactions.

![](../../images/blog/migration-implementation/timeline.png)

### Distribution

Assuming all goes well, the distribution of [the $BIFI token](https://docs.beefy.finance/ecosystem/bifi-token) will take place on 24 October, shipping to the c. 18,000 recipients across Ethereum and Optimism. 

As a reminder, all new $BIFI will be distributed at a 1:1 ratio with the number of old $BIFI tokens held by each user. For CEX users, you will receive native $BIFI on your chosen platform, which can be withdrawn to Ethereum or traded in the CEX. For onchain users with 80 $BIFI or more, you will also receive your new $BIFI on Ethereum. Otherwise, all other onchain users will have their $BIFI wrapped into $mooBIFI (in our incentive-bearing BIFI Vault), bridged to Optimism and distributed there instead. Note that this division is not captured by the snapshot data, so users should check to see which chain they can expect their new $BIFI to arrive on. 

As the number of recipients exceeds the normal limits for transaction data, the distribution will happen in smaller blocks (likely 500 or so wallets at a time). Please do not panic if you do not immediately receive your new $BIFI, and watch our #📢-announcements channel for confirmation that the distribution has finished.

To ensure the interaction is smooth, the distribution will be effected by a core-controlled EOA. Details of the EOA will be published, so users can verify the tokens are legitimate and not a scam transaction. Please be vigilant for possible scam attempts seeking to replicate the distribution event. You will not need to give any approval or interact with any contracts to receive your new $BIFI.

Once the distribution is complete, incentive distribution and governance will resume shortly, and users will be able to bridge between chains, switch between incentive programmes and contribute to liquidity for the new $BIFI token.

As a reminder, the new token has now been [audited](https://github.com/beefyfinance/beefy-audits/blob/master/2023-08-30-Beefy-Zellic-BIFI-Token-Audit.pdf) and deployed to the Ethereum treasury, so is available already for independent by any tokenholders or prospective buyers to review. The new $BIFI token's hexadecimal address on Ethereum is [0xb1f1ee126e9c96231cc3d3fad7c08b4cf873b1f1](https://etherscan.io/address/0xb1f1ee126e9c96231cc3d3fad7c08b4cf873b1f1). The addresses for $mooBIFI are [0xBEEF8e0982874e0292E6C5751C5A4092b3e1BEEF](https://etherscan.io/address/0xBEEF8e0982874e0292E6C5751C5A4092b3e1BEEF) on Ethereum, and [0xc55E93C62874D8100dBd2DfE307EDc1036ad5434](https://optimistic.etherscan.io/address/0xc55E93C62874D8100dBd2DfE307EDc1036ad5434) on Optimism.

### Using New $BIFI

To coincide with the launch, we will be launching liquidity for the new $BIFI and $mooBIFI tokens with key partners on Ethereum and Optimism. There will be liquidity for you to use (or contribute to) on Day 1, though we expect these positions to build and solidify in the coming days. There may also be significant price action upon the relaunch, so please be cautious if you wish to trade your $BIFI.

Our [new Beefy Token Bridge](https://docs.beefy.finance/ecosystem/bifi-token/token-bridge) will also be live on Day 1, allowing you to bridge your $mooBIFI tokens between the live chains as you please. To start with, Ethereum and Optimism will be supported, with other chains following in due course. Note that not all chains will have bridged $BIFI.

For $BIFI on centralized exchanges, the position depends upon the processes of the exchange, so we cannot guarantee when the new $BIFI will be available for your use. We would suggest refraining from purchasing $BIFI on exchanges during this time, in case you are actually purchasing old $BIFI after the snapshot has been taken (meaning you will receive no new $BIFI in exchange).

Otherwise, our existing governance system will then by migrated to the new $BIFI token. This may take several days, during which governance procedures may be paused or delayed.

### Revenue Bridge

To facilitate the staking of $BIFI as $mooBIFI, it has been necesasry to redirect the earnings on each of Beefy's chains back to Ethereum. To do this, we have built a [new Beefy Revenue Bridge](https://docs.beefy.finance/ecosystem/protocol/revenue-bridge), which uses 1 of 6 hardcoded bridging/messaging services to batch fees, swap to stables and bridge them home. We are aiming to have the revenue bridge fully operational on all chains as soon as possible after the distribution, though the process of redirecting all 550 vaults will take time.

To ease this burden, we will now begin gradually halting governance pool earnings on each of our chains, to switch over to the new Revenue Bridge contract and direct those fees to Ethereum. This will mean that the new BIFI Pool will be stocked with up to a few weeks of protocol earnings on launch, which will immediately start flowing to users once the system is fully operational.

Please bear with us in this time, as we appreciate you will no longer be earning on your $BIFI. We will aim to work through the smallest-revenue and most-temperamental chains first, finishing with the chains with the largest revenues or with the most users.

### Stay Tuned

With the 24th rapidly approaching, we expect there may be many small updates and notices to share with users, to ensure that the migration remains maximally transparent and that users can know what to expect from the process. As usual, the Beefy Discord is the best place to go for live updates (check the #📢-announcements and #🪙-bifi-migration channels). We will also be posting regular updates to Telegram and Twitter throughout. Questions as always are welcome in the the #🐄-general and #🤠-cowmoonity channels on the Beefy Discord.

We have also released comprehensive updates to our documentation in anticipation of the migration, to capture all the important details in one place. In particular, we'd recommend interested users familiarise themselves with the new pages and passages in [the Beefy Protocol](https://docs.beefy.finance/ecosystem/protocol) and [$BIFI Token](https://docs.beefy.finance/ecosystem/bifi-token) sections. Please feedback all of your comments on the new docs through the #📖-documentation channel on the Beefy Discord.

As a final note, we once again want to thank the entire Beefy community for their unwavering support and dedication throughout this complicated process. As we prepare to launch into a New Era for Beefy, we have never been more bullish about where the future will take us…

🐮

[Migration Proposal](https://snapshot.org/#/beefydao.eth/proposal/0x975b10f949c0ea62a53f7a3ab5aa738376422efbd7bb33712daa74b98bd4b727) | [Beefy Docs](https://docs.beefy.finance/) | [Beefy Discord](https://discord.gg/yq8wfHd) | [Beefy Twitter](https://twitter.com/beefyfinance) | [Beefy Telegram](https://t.me/beefyfinance)