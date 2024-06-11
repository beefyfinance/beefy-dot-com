---
date: 2024-06-12T12:00:00Z
header_image: "/src/images/blog/ltipp/cover.png"
short_description: "Celebrating the full launch of Beefy's CLM products with 12 weeks of LTIPP incentives on Arbitrum."
sub_header: "Training Wheels Off - Unleashing CLM with LTIPP on Arbitrum"
title: "Training Wheels Off - Unleashing CLM with LTIPP on Arbitrum"
---

![](/src/images/blog/ltipp/cover.png)

Growth and development are hard. Sure, rapid expansion is an exciting prospect and a cause for great pride in retrospect. But those actually on the path to real growth will know that it’s never easy. Things don't happen as you expect them to; progress isn’t a straight line. Living with risk and failure is always uncomfortable.

However, getting out of your comfort zone is vital for anyone looking to leave a lasting mark on the world. In that sense, success can be counterproductive, as it becomes difficult to exit the comfort of your success and stop resting on your laurels. *“Sure, you built the best autocompounding vaults known to mankind… but is that ***all*** you guys can do?”*

Over the last few months, we at Beefy have been fighting our way through the challenging path to new product development. We’ve spent countless hours building, scrutinizing, testing and deploying what we think is a sensational solution to concentrated liquidity in DeFi. And today, we’re pleased to announce the culmination of all of that hard work.

Today, the training wheels came off. Today, we **unleashed** CLM.

### CLM

As described in our last [blog post](https://beefy.com/articles/clm/), Beefy's Cowcentrated Liquidity Manager, or *“CLM”*, is the latest automated liquidity management tool to reach the market. It aims to deliver a solution that regularly resets the range of a concentrated liquidity position - to keep the position earning trading fees - but without any of the pesky token selling used by other solutions, which costs users their yields.

The solution is a novel trick involving a counterbalancing single-side position that we call the *"alt"*. As time passes, the imbalance between the two tokens becomes more pronounced, with the quantity of one token far exceeding the other. To restore balance, we create a 50/50 position by combining an equal number of tokens for both sides, and then allocate the remaining tokens to a single-sided position. This approach ensures all tokens remain deployed and in range (i.e., earning trading fees) without needing to sell any tokens.

CLM is a novel reimagination of an automated liquidity management tool. It’s also flexible and extensible, allowing for integration through external interfaces, malleable bonus reward/incentive distribution, and, of course, the addition of Beefy’s autocompounding vaults on top of CLM positions for easy autocompounding of all rewards. We think CLM has the potential to unlock the full benefits of concentrated liquidity for even the most novice of users. But first, we’ve had to go through extensive auditing and Beta testing to ensure that our theory translates safely into practice.

### Feedback & Refinement

Today, we’re thrilled to announce our full production launch. Throughout the Beta, CLM completed three full formal audits from Zellic, Cyfrin and Certora, as well as a comprehensive audit competition hosted by Sherlock. With no critical issues or changes to hold it back, CLM’s code is ready for wide-scale rollout. The crucial feedback and testing provided by our Cowmoonity and users during the Beta have already provided enormous value for Beefy.

So what did we learn? Firstly, having new deposits rebalance a given CLM product has enormous value in counteracting balance changes due to sudden price movements. This simple technique provides a constant balancing pressure that typically leaves CLM products far closer to 50/50 balance than the competition.
However, users don’t want to have to acquire an arbitrary amount of tokens to do the balancing themselves. The number of requests to bring Beefy ZAP to CLM were overwhelming, and of course that was naturally towards the top of the *To Do* list from the start. We are pleased to announce that our ZAP tooling is now live on all CLM products, and will be enabled by default for any chains and protocols that support it moving forward.

Secondly, we learned that CLM can produce a significantly higher amount of trading fees on a given pair when compared to classic UniV2-style liquidity pools and other managed concentrated liquidity products. The yields we’ve seen in times of peak activity were astronomical and received a lot of praise from early users. It’s clear validation that better-managed liquidity is a win-win for the ecosystem, and CLM is delivering significant value in that respect.

The counterpoint, however, is that many users have asked for more advanced position monitoring information to see how prospective APYs translate into real yield. Again, we’re excited to announce that the solution to your data needs has now arrived, with Beefy’s Yield Module and Dashboard features now live for all CLM products. With Yield Module, granular performance statistics and pricing data show you exactly how much you’ve earned and exactly how much you would have earned if you had just held the deposit tokens. Dashboard then situates this information in the context of your whole portfolio to enable easier high-level management for everyone.

The massive number of *“wen”* requests received was flattering. Many users called for the expansion of CLM to other blockchains, the inclusion of more protocols and tokens, and the addition of more incentives. With the full rollout of CLM, all of the above are now possible. And we’ve got a barrage of incentives to turbocharge that process...

### LTIPP

**"LTIPP"** stands for Long-Term Incentives Pilot Program. The Arbitrum DAO’s goal with LTIPP is to stimulate activity and development in the ecosystem and create long-term value for its participants over the course of 12 weeks. The [LTIPP Proposal](https://www.tally.xyz/gov/arbitrum/proposal/110767177349707239820875764565747830009768307680609166467172874966002003291288?chart=list) allocated 50 million $ARB tokens from the DAO’s treasury to any number of applicants putting forward interesting proposals.

Beefy’s [LTIPP application](https://forum.arbitrum.foundation/t/beefy-ltipp-application-draft/21331) targets the restructuring of liquidity on Arbitrum. Concentrated liquidity, when done well, is undoubtedly a superior form of liquidity in terms of asset availability and trading fee optimization. The problems Beefy targets are twofold: first, too many liquidity providers haven’t yet migrated to concentrated liquidity; and second, too many concentrated liquidity positions aren’t being managed effectively and realizing these benefits.

To solve this, Beefy has launched CLM first and foremost on Arbitrum One, with a plan to rapidly roll out the product across a wide array of DEXs, protocols and tokens. In doing so, Beefy plans to flex this novel system to its limits, while migrating as much liquidity as it can to a superior form of managed concentrated liquidity. And, by delivering waves of LTIPP incentives to Beefy’s natively crosschain user base, this plan will also encourage users to migrate their activities to Arbitrum.

### Training Wheels Off

Today is a **big** day: CLM formally graduates from its Beta; ZAP, Yield Module, Dashboard and the full functionality of Beefy’s app arrive for CLM; and 12 weeks of $ARB incentives kick off to turbocharge CLM yields for users The training wheels are off. We’re ready to accelerate CLM's rollout across the whole Beefy ecosystem.

To get involved, head to the [Beefy App](https://app.beefy.com/), filter by CLM products, and look out for incentivized vaults marked with an LTIPP tag. From there, you can zap in with any of your favorite tokens in one transaction. And best of all, there are dozens and dozens of earnings boosts scheduled for Beefy’s LTIPP incentives in the next 12 weeks... It’s a great time to be on Arbitrum with Beefy!

Our thanks again to all the loyal users and Cowmoonity members who showed faith in Beefy, tested CLM, and gave feedback to help refine the product. Now it’s finally time to show the world what CLM can do. We look forward to growing together and earning you more. 📈

[CLM Docs](https://docs.beefy.finance/beefy-products/clm) | [LTIPP Proposal](https://www.tally.xyz/gov/arbitrum/proposal/110767177349707239820875764565747830009768307680609166467172874966002003291288?chart=list) | [Beefy LTIPP Application](https://forum.arbitrum.foundation/t/beefy-ltipp-application-draft/21331)