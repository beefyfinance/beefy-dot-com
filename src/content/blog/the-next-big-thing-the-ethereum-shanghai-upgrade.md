---
title: 'The Next Big Thing: The Ethereum Shanghai Upgrade'
date: 2023-04-11T11:00:00+00:00
header_image: "../../images/blog/the_next_big_thing.png"
sub_header: 'The Next Big Thing: The Ethereum Shanghai Upgrade'
short_description: Our friends at Ethereum continue to ship big improvements to their
  infrastructure. So what is the Shanghai upgrade? And what does it mean for Beefy’s
  users?
tags: [chains]
---
![](../../images/blog/the_next_big_thing.png)

Fresh off the heels of their flawless execution of The Merge, the Ethereum core developer team is fast in pursuit of their next goal: the Shanghai network upgrade. Set to be implemented on 12 April, the Shanghai upgrade (also known as Capella and Shapella) promises substantial improvements to benefit the ecosystem of validators and liquid staking derivatives on Ethereum.

Since launching Beefy on Ethereum in November, we’re pleased to have brought our users access to over 50 vaults across 5 different platforms. With over $40 million in TVL on the chain, we’re proud to call ourselves a part of the Ethereum community, and to voice our support for the Shanghai upgrade. This article reviews the background to the upgrade, its impact for users, and what it means for Beefy.

**Enter Shanghai**

Shanghai is scheduled to implement 5 separate improvement proposals from the Ethereum development pipeline:

* [EIP-3651](https://eips.ethereum.org/EIPS/eip-3651) - warm the _COINBASE_ address to make payments cheaper;
* [EIP-3855](https://eips.ethereum.org/EIPS/eip-3855) - add a _PUSH0_ opcode to increase gas efficiency;
* [EIP-3860](https://eips.ethereum.org/EIPS/eip-3860) - amend the _initcode_ opcode to control memory usage;
* [EIP-4985](https://eips.ethereum.org/EIPS/eip-4895) - enable validator withdrawals on the Beacon Chain; and
* [EIP-6049](https://eips.ethereum.org/EIPS/eip-6049) - deprecate the _SELFDESTRUCT_ opcode to prepare for removal;

Though the exact details of the update are still being finalized, and some updates may ship in a separate upgrade, the cornerstone of Shanghai is undoubtedly the introduction of validator withdrawals:

**Exit Staking**

Users hoping to help secure Ethereum’s Proof-of-Stake consensus can do so by depositing 32 ETH to run a validator. To date, there has been no mechanism to exit the validator and withdraw this ETH, which has constrained the validating process for many users. Even so, over 16 million ETH has been locked into validators to date.

[EIP-4985](https://eips.ethereum.org/EIPS/eip-4895) introduces a new EVM object type - the “withdrawal operation” - which are push-based operations initiated by the overall system. As an operation (rather than a transaction), withdrawals will be gas-less and bounded, meaning only a few withdrawals can be processed at any given time. This will keep the operational costs of withdrawals negligible in the context of the broader payload of the chain. It also means there will be a withdrawal queue, which is gradually executed over time.

Two types of withdrawals will be actionable under the new systems: full withdrawals - i.e. exit the validator and recover the full balance (32 ETH principle plus any rewards); and partial withdrawals - i.e. withdrawal of the balance of earned rewards exceeding the 32 ETH principle, without exiting the validator. The system is also designed to allow validators to set their withdrawal credentials, to allow partial withdrawals to happen automatically.

For validators interested in more specific details of how EIP-4985 will operate in practice, the Ethereum Foundation has produced a comprehensive set of [ETH Withdrawal FAQs](https://notes.ethereum.org/@launchpad/withdrawals-faq#:\~:text=If%20a%20validator%20has%20successfully,get%20processed%20a%20lot%20slower.).

![](../../images/blog/four.png)

**Impact on Beefy**

So what does this all mean for Beefy?

Regular users will be well aware of our longstanding partnerships with Ethereum liquid-staking providers, like [Lido](https://beefy.finance/articles/beefy-partners-with-lido-to-bring-wsteth-vaults-to-arbitrum-and-optimism/). These projects facilitate small ETH deposits from users, which are aggregated into validators to earn staking rewards. Rewards are captured and channeled through an ERC-20 token (e.g. Lido’s wstETH), returning them to users. This allows smaller users to access the benefits of staking, without the need for a 32 ETH deposit.

At over 5 million ETH staked, Lido and its wstETH is by the far the largest liquid staking product on the market. However, a lack of withdrawal capabilities means wstETH currently has to trade on open markets, where the price depreciates when demand is low. With EIP-4985, providers like Lido will have the flexibility to withdraw ETH, allowing it to respond to changing demand to meet the needs of users. The Shanghai upgrade - scheduled for April 12 at around 10pm UTC - represents a great step forward for liquid staking products.

By now, the Beefy-Lido partnership has reached the status of legend, having delivered round after round of boosts on tens of Beefy vaults. As liquid-staking derivatives continue to grow and benefit from Ethereum’s development, Beefy will be there every step of the way, helping to deliver these benefits - together with the miracle of autocompounding - to our users.

[Shanghai Spec](https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/shanghai.md) | [EIP-4985](https://eips.ethereum.org/EIPS/eip-4895) | [Withdrawal FAQs](https://notes.ethereum.org/@launchpad/withdrawals-faq#:\~:text=If%20a%20validator%20has%20successfully,get%20processed%20a%20lot%20slower.) | [wstETH Guide](https://help.lido.fi/en/articles/5231836-what-is-wrapped-steth-wsteth)