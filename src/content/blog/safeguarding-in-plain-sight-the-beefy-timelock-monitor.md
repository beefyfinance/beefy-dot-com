---
title: 'Safeguarding in Plain Sight: The Beefy Timelock Monitor'
date: 2023-03-07T12:00:00+00:00
header_image: "../../images/blog/timelock.png"
sub_header: 'Safeguarding in Plain Sight: The Beefy Timelock Monitor'
short_description: Discover the secrets of Beefy’s risk management efforts for yourself
  with our latest public information feed.
tags: [security]
---
![](../../images/blog/timelock.png)

At Beefy, we recognise three words to live by: SAFU First. Always. You can craft the most incredible features into your smart contracts, but if you can’t adequately safeguard user funds, your contracts don’t deserve to have users. That’s why safety is the first, last and foremost consideration in every product we release.

Though we have great respect for the DYOR maxim that’s so prevalent in DeFi, we recognise the inherent contradiction in established open source projects relaying this advice to users to offload responsibility for their safety. If anyone were able to understand every detail of a project’s code from simple research, it would be impossible to maintain any substantial competitive advantage over competitors or forks. Instead, we recognise that the vast majority of users factor trust in a project’s approach to safety as a key element of their product research.

The logical outcome of these reflections is that safety _is_ our product, and should be one of the key areas of our operation that we make publicly available to our users. So today, we are excited to announce our latest public safety feature, the Beefy Timelock Monitor.

**What are Timelocks? And Why do they Matter?**

Put simply, a timelock is some code built into a smart contract, which causes a delay between calling a function and executing it. Timelocks are an increasingly common way of promising safety and responsible use for some critical functionality in smart contracts, which may be capable of being exploited.

For example, a vault contract may include a “back door” method where the contract’s owner can withdraw all the funds in emergency circumstances. As this method could be used to steal depositor funds from the vault at a moment’s notice, the contract’s owner can provide assurance to depositors by incorporating a timelock mechanism. In doing so, the owner must first trigger the process at least several hours before it can be executed, thereby allowing users a short window to detect the call and withdraw their deposits before the owner can.

Timelocks are not a complete solution to malicious activity with smart contracts, but do provide an extra layer of safety and assurance, which helps build trust in the product and the project. It is for this reason that Beefy insists that critical functions in smart contracts should be guarded by timelocks. Use of timelocks is a key factor in our Beefy Vault Safety Score.

**Introducing the Timelock Monitor**

_If a timelock is triggered on a blockchain, but no one is around to check it, does it really protect anyone?_

Incorporating timelocks is helpful, but what really matters is that users see them and take action. Though there are many ways to monitor timelocks, the effort required for constant vigilance is a function of the number of timelocks being monitored. Beefy faces an uphill struggle by operating over 19 chains and over hundreds of protocols. Having a big team is vital to maintaining security at this level, as it would also be impossible for contributors to live a healthy life whilst single-handedly monitoring 6-hour timelocks at every hour of the day.

Our solution is built on OpenZeppelin Defender, a security operations platform used to administer and monitor smart contracts. We used Defender to implement a single public feed, where the timelock events we are monitoring are automatically posted once detected, so that all members of our team and community can have constant eyes on the range of risks we’re exposed to altogether and immediately. The new #👀-timelock-monitor channel in the [Beefy Discord](https://discord.gg/yq8wfHd) does just that.

By displaying the relevant contract and protocol, the triggered event, the method scheduled to be called and the end time for the timelock, the Timelock Monitor provides all the information needed to assess the risk and protect user funds. As a public channel, the monitor provides free access to this information for our users, as well as insight into how Beefy’s team is handling these risks, to inform decision-making. Together, this is a great leap forward in safety and visibility for our protocol.

**SAFU First. Always.**

Ultimately, our first and most important job is to act as guardians of your investments and protect you from harm. As alluded to above, we believe that vigilance in safety is not a proprietary or competitive advantage that needs to be kept concealed. Security efforts benefit from scale and network effects, so working together with our users, our community and even our competitors can help to achieve a safer environment for everyone.

In deciding to make our Timelock Monitor public, we hope to share the value of our industry-leading approach with the entire DeFi community, and invite participation in our efforts. We hope that leading by example will help to continuously improve the standards of safety for us all, and allow us to deliver the benefits of DeFi safely to the next billion users.

So don’t hesitate to take a look at the new Timelock Monitor channel, and share your thoughts and feedback with us in the Beefy Discord. And rest easy, knowing that your safety is our priority.

[Beefy Discord](https://discord.gg/yq8wfHd) | [Beefy SAFU Protocol](https://docs.beefy.finance/safu-protocol/beefy-safu-practices)