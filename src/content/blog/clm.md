---
date: 2024-04-08T12:00:00Z
header_image: "../../images/blog/clm/cover.png"
short_description: "Introducing the newest suite of automated liquidity solutions: Beefy CLM."
sub_header: "Cowcentrated Liquidity: A New Era of Yield Optimization"
title: "Cowcentrated Liquidity: A New Era of Yield Optimization"
tags: [products]
---

![](../../images/blog/clm/cover.png)

When Beefy debuted on the Binance Smart Chain in October 2020, the frenzy of food token yield farms saw APRs soaring above 100,000%. With Beefy's exceptional automation, these yields compounded to generate APYs so staggering that they were simply represented by a 🔥 emoji. However, the euphoria of DeFi summer eventually subsided, leading to a decline in yields and token prices, prompting many to exit the space entirely. Nevertheless, Beefy remained steadfast, continuing its mission to simplify DeFi and facilitate its growth.

While Beefy has expanded its offerings to include a diverse range of strategies such as lending markets, decentralized exchanges, perpetual market platforms, and liquid restaking tokens, prioritizing security and ease of use, the era of exorbitant yield farming yields now constitutes a smaller fraction of the overall DeFi landscape.

### Concentrated Liquidity

In May 2021, Uniswap released v3 of their Decentralized Exchange (DEX) which introduced the concept of Concentrated Liquidity (CL). It was the most revolutionary technology in Automated Market Making since…well Uniswap v2.  Hey, the Uniswap team are exceptional builders, I don’t make the rules.  Uniswap v3 is an incredibly powerful technology with unprecedented amounts of customizability to create a wide array of market making strategies.  While the technology is powerful, the customizability led to slow uptake of the product.

The advanced technology enables liquidity providers (LPs) to direct their capital to specific price ranges instead of over an infinitely wide range like Uniswap v2. This shift towards targeted liquidity allocation aims to improve capital efficiency and increase potential earnings by concentrating funds where they are most likely to be utilized and thus earn trading fees. It offers a nuanced approach to market making, providing LPs with the tools to more precisely manage their liquidity.

However, this innovation also introduces significant complexity which makes it inaccessible for the majority of users. The constant movement of the market means that effectively utilizing CL requires ongoing adjustments to one's position. This continuous need for active management is a departure from the easy, automated experience users love about Beefy.

### ALM

Thanks to the composability of DeFi, a new innovation has emerged to address this complexity known as Automated or Active Liquidity Management (ALM). ALMs aim to keep the user in range and compound trading fees back into the position.  There are already multiple ALM solutions available, each choosing to do things a little differently.  A common approach amongst most (if not all) is a centralized mechanism which sells the overperforming token for the underperforming to get back to a 50:50 value ratio. Every time this happens,trading fees are incurred and Impermanent Loss (IL) is realized.  Because of these risks, a decentralized rebalancing mechanism would leave the opportunity for too frequent rebalancing leading to significantly reduced performance.

Beefy has always been an impassioned supporter of decentralization, so that no matter what happens, the products will continue to work and users will always be able to remove their funds whenever it suits them. So for this reason, Beefy thinks there should be another option!

Introducing, Cowcentrated Liquidity! See what we did there?

### CLM

Cowcentrated Liquidity (or “CLM”) is the name for Beefy’s very own ALM solution!  So now you may be wondering how Beefy can maintain decentralization while also being able to have all user capital available for trading, always stay in range, and do that Beefy compounding of trading fees that we know you all love.

How funny would it be if we just ended the blog here?

We’ll tell you!  Beefy is taking a fresh look at the ALM process, coding from the ground up a novel solution to all of the above problems.  Instead of trying to decentralize the rebalancing process, how about we just skip rebalancing altogether?  At the same time you want all capital to be working and available for trades, since CL is all about capital efficiency afterall.

To achieve this, CLM products will  
* Put as many tokens as possible into a 50/50 position with the predetermined width for the strategy centered on the current price. We’ll call this the main position.
* With whichever token there is more of, create another position as a 1-sided limit order just 1 tick outside of the current tick. We’ll call this the alt position.

![](../../images/blog/clm/range-graphic.png)

By having this alt position, all capital is able to be deployed. And as much as we want our bags to go up-only, price doesn’t actually move in a straight line so this 2nd, limit-order position will frequently be utilized too.

You’re probably wondering how we keep the main position in range. Since we already ruled-out selling 1 token as an option, we need another solution.  Our solution is a Gelato task which will call a moveTicks function, in a single txn we will
1. Withdraw all liquidity from both positions
2. Complete accurate accounting of both tokens so that we can provide each user their fair share of the overall pool
    * During a process called harvest, all trading fees, less Beefy’s performance fee, are added to overall group of tokens
3. Liquidity is added back in the previously described manner into the two positions with the primary position centered on the new price.

Beefy will schedule Gelato to call the moveTicks function on a fixed frequency which can be adjusted so the position is going to be closely following along with the price at all times.

![](../../images/blog/clm/calm-zone-graphic.png)

### New Era

The 50/50 position described above is just the beginning. CLM has been designed to be flexible to be able to be used to create any number of strategies. And while we are beginning with Uniswap v3’s code base first, we can and will support any type of concentrated liquidity DEX in the future.

So in summary, Beefy is really excited to bring this decentralized automated liquidity management solution to you, so that you can enjoy the benefits of concentrated liquidity with the same ease of use and automated yield you expect from Beefy!

This has already been a lot of information, and it does not cover all of the technical details, so you can read all the technical information without our amazing humor in our [documentation](https://docs.beefy.finance/beefy-products/clm).