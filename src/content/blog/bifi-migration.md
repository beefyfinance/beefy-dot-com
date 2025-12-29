---
date: 2023-07-29T12:00:00Z
header_image: "../../images/blog/bifi-migration/cover.png"
short_description: "Reviewing Plans for the Migration of our $BIFI Token, and Welcoming the Next Era for Beefy."
sub_header: "A New Era: the $BIFI Token Migration"
title: "A New Era: the $BIFI Token Migration"
tags: [governance]
---
![](../../images/blog/bifi-migration/cover.png)

In mid May, the DeFi world waited on eggshells as the latest protocol failure wreaked havoc on markets. One of the largest cross-chain bridges - Multichain - was suffering from various router failures, causing stuck transactions, chain isolation and potential loss of user funds. The media coverage wasn’t helping matters, circulating rumors that the project’s lead developer had been “disappeared” by the Chinese Communist Party (**CCP**), and that the project’s operational wallets had actually been in his sole custody the entire time. 😨

It took the Multichain team a rollercoaster couple of weeks to get the routers fixed and for things to finally settle down. The market sentiment towards Multichain soon tempered… just another day in DeFi, right? In a world so filled with extravagant characters, governmental meddling and catastrophic failures, it seemed as if all the rumors were… well, just that: rumors.

Fast forward another month into July, and many of the previously-relieved souls were again plunged into bitter regret for ignoring the Multichain FUD. On 14 July 2023, Multichain put out a tweet which many had been waiting months to see. Their explanation confirmed that the smoke had been coming from a fire: their key man held all the keys, the CCP had seized him, the lost assets were unrecoverable, and Multichain would be shutting down.

For readers who weren't yet aware, Beefy had been a significant user of Multichain’s services for a long time before the crash. As a project that identifies strongly with a multichain vision, Beefy has relied heavily on bridging service providers to facilitate our expansion across 21 different chains. Multichain issued all of the bridged copies of our $BIFI token, meaning their bridging contracts on our native BNB Chain held the majority of the token’s supply. Multichain’s collapse therefore means the collapse of our $BIFI token as we knew it.

But that outcome is nowhere near as scary as it might sound… Beefy is so much more than just an ERC-20! And our operations amount to more than just numbers on the blockchain. From the very beginning of this Multichain saga, our nuclear-option plan has been crystal clear: in the event of collapse, we simply need to redeploy and distribute the $BIFI token to tokenholders captured at a specified time. Complicated though that sounds, it’s completely doable.

What’s more, redeployment is an opportunity for a fresh start. Throughout much of the project’s life, Beefy’s contributor team have been constrained by the early design decisions made around the protocol’s launch. Now Beefy is free to forge its own destiny, and make its own design decisions:
 
By redeploying on Ethereum, we can choose to access by far the strongest security available in a smart contract platform in today’s world;
By moving to a universal governance pool, we can ensure a more equitable process for participating in the operations of Beefy’s protocol; and
By taking control of our $BIFI token and working with our choice of different bridging solutions, we can ensure that we are never again in a position where one provider’s failure compromises our governance token.

With that detailed backstory out of the way, we are pleased to announce and share the full and approved details of the [approved $BIFI migration plan](https://snapshot.org/#/beefydao.eth/proposal/0x975b10f949c0ea62a53f7a3ab5aa738376422efbd7bb33712daa74b98bd4b727), which our Core team will now set about delivering over the coming weeks.

### $BIFI Migration Plan

**Step 1 - Snapshot**

Arrange and complete a snapshot of current holders of the existing $BIFI token (**"old $BIFI"**) to create the distribution list for the new deployment. The approximate date and time of the snapshot will be made publicly available in advance to allow users to plan for it.

**Step 2 - Token**

Develop, test and deploy a new $BIFI ERC-20 smart contract and token on Ethereum (**“new $BIFI”**) (e.g. by multisig wallet with appropriate timelocks). The contract will not include any privileged functions, such as minting or burning, and so will require no owner. The new token will be audited to provide maximum assurance to users that the new token they receive will be a robust and complete migration of the old contract, maintaining our 80,000 token total supply now and forever.

**Step 3 - UGP**

Develop, test and deploy a **<u>new universal governance pool</u>** smart contract system (**“UGP”**), to be owned and controlled by Beefy DAO. This will include:
1. an ERC-20 vault contract and token (**“$mooBIFI”**) on Ethereum, which user can use to stake new $BIFI tokens to earn governance incentives;
2. smart contract mechanisms on Ethereum, to manage the delivery of governance incentives to the UGP vault contract;
3. new fee batching contracts on all other chains to aggregate fees for governance incentives on other chains, ready for bridging; and
4. a bridging solution between Ethereum and all other deployed chains, to allow the fee batching contracts to automatically bridge governance incentives into the delivery mechanism and on to the pool. This may include indirect transfer routes where savings on fees or gas can be made.

**Step 4 - Bridge**

Develop, test and deploy a new bridging solution for the new $BIFI token to allow bridged copies to be available on chains other than Ethereum. This will encompass smart contracts to handle the on-chain activity, one or several bridge or messaging providers to handle the communication between chains, and rework of the Beefy web application to support the new bridges. At present, Core proposes to bridge only $mooBIFI, meaning all bridged copies will reflect $BIFI which has already been staked in the governance pool on Ethereum, and is therefore benefitting from governance incentives being paid in the vault on Ethereum.

**Step 5 - Distribution**

Following deployment, mint and distribute 80,000 new $BIFI tokens to holders of old $BIFI captured in the snapshot. At present, Core proposes a staged distribution where large holders will receive their allocation on Ethereum, and smaller holders will receive their allocation as $mooBIFI tokens which have been bridged onto another lower-cost chain (e.g. Arbitrum or Optimism). Core proposes a threshold of 80 $BIFI and above to receive on Ethereum, with all others on lower-cost chains.

**Step 6 - Liquidity**

Following distribution, rebuild protocol-owned liquidity for the new $BIFI token on Ethereum and any chains included in the distribution as a minimum. Further liquidity will be added in due course to appropriate chains, though the migration will only focus on Ethereum and any other airdrop chains.

**Step 7 - Incentives**

Following liquidity, activate the new UGP system and switch the existing governance incentive mechanism over to the new pool. The Core team is proposing that the claimed reward of the UGP will be $ETH tokens.

**Step 8 - Retire**

Following all other steps, end support for the old $BIFI token and migrate all core functions to the new $BIFI token, including:
1. retire any outstanding old $BIFI governance pools;
2. replace the voting token for Beefy DAO’s governance; and
3. replace the token used in third party information services (e.g. Coingecko).

### Next Steps

Our detailed plan calls for a lot of change and a lot of effort in a small space of time. Though effecting the migration and restoring our $BIFI token is of central importance for the project, our highest priority is and must always remain the safety of users and their funds. As such, no definitive timescales can be given at this time as to when each step of the plan will be safely and successfully reached.

Instead, a new #🪙-bifi-migration channel has been set up in the [Beefy Discord Server](https://discord.gg/yq8wfHd), to give updates on the migration’s progress and provide a safe space for questions and discussions on the migration process. Key updates and milestones will also be pushed out on Beefy’s various social media channels to provide as much notice to the community as can be given.

However, a further word of caution is still needed. Whilst our existing $BIFI token remains the key to an effective distribution of its replacement, there are still risks to be had with your investments. We strongly advise that all users do not interact with Multichain protocol, do not use their $BIFI tokens to provide liquidity, and do not make hasty swaps with their $BIFI into low levels of liquidity. Acting rashly at a time like this can easily leave you rekt.

As a final note, we would like to thank the Beefy community for their incredible support and dedication throughout this difficult time, and for quickly and easily shepherding the proposed migration plan through our governance. As we welcome a New Era for Beefy, we have never been more bullish about where the future will take us…

🐮

[Migration Proposal](https://snapshot.org/#/beefydao.eth/proposal/0x975b10f949c0ea62a53f7a3ab5aa738376422efbd7bb33712daa74b98bd4b727) | [Beefy Discord](https://discord.gg/yq8wfHd) | [Beefy Docs](https://docs.beefy.finance/)