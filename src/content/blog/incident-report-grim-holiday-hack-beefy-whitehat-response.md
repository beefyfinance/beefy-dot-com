---
date: 2022-02-22T03:00:00.000Z
header_image: "../../images/blog/title2.png"
short_description: Incident Report
sub_header: 'Incident Report: Grim Holiday Hack, Beefy Whitehat Response'
title: 'Incident Report: Grim Holiday Hack, Beefy Whitehat Response'
tags: [security]
---
![](../../images/blog/title2.png)

The safety of user funds is a core Beefy value and we take our commitment to it seriously. Grim Finance still has the responsibility to help those with funds stolen. We are now working to ensure that the funds recovered are safely returned to the right hands. We hope this can provide some respite to those users affected, and we’d like to express our sincere condolences to all victims of the recent Grim hack.

### Summary

We have been made aware of unfounded accusations against Beefy in regards to the Grim exploit. After explaining to the Grim team why they needed to take action due to an outstanding smart-contract exploit, Beefy devs showed Grim an exploit transaction to prove the possibility of an exploit. **A slow and inadequate response from the Grim team was followed by a hacker then exploiting $32 million of the platform’s $100+ million TVL.** 

The whitehat-hack contract address was shared with their team at 18:40 UTC, December 18, 2021, **before our knowledge of the blackhat attack taking place**. Grim Finance had the whitehat contract in their hands 24 hours before the safety operation was executed. Though Grim had knowledge via Beefy of the possible exploit, Grim left vaults unpaused and vulnerable. Beefy initiated whitehat operations in an attempt to save funds from the multiple blackhat attackers.

The rescued funds were swapped from altcoins to stables and bluechips to hold value, as well as comparable assets where possible (ginSpirit for binSpirit for example). Since then, Beefy has been waiting for a reputable third party to find that no inside exploit occurred before returning the funds to Grim.

### Timeline

**December 18, 2021**

**7:12 UTC**: The BSC protocol Charge DeFi is exploited. The timeline table of Charge DeFi’s response may be seen below ([https://chargedefi.medium.com/chargedefi-security-incident-1fcc134392f0](https://chargedefi.medium.com/chargedefi-security-incident-1fcc134392f0 "https://chargedefi.medium.com/chargedefi-security-incident-1fcc134392f0")).

**Note how Grim Finance was notified as early as 9:58 UTC of the situation.**

|  | Time (UTC) 18/12/2021 | Time since incident |  |
| --- | --- | --- | --- |
| Security incident | 07:12 | - |  |
| Core team notified | 07:27 | 15m |  |
| First response | 07:37 | 25m |  |
| First official communication | 07:37 | 25m |  |
| Exploit hacked | 08:03 | 51m |  |
| Notified investigation agency | 08:21 | 1h 09m |  |
| Analysis complete | 08:50 | 1h 38m |  |
| Analysis of all Grim vaults | 09:20 | 2h 08m |  |
| Notified Grim.Finance | 09:58 | 2h 45m |  |
| Compensation plan starts | 10:15 | 3h 03m |  |
| Notified Tomb.Finance | 11:34 | 4h 22m |  |
| Second attempt to notify Grim | 11:35 | 4h 23m |  |
| Notified Beefy.finance | 16:22 | 9h 10m |  |
| Grim vaults exploited (approx.) | 19:50 | 12h 38 |  |

**8:27 UTC:** An alert is posted in Beefy’s Discord by a Beefy moderator that Charge Defi has been hacked. In the ensuing hours, Beefy pieces together that Charge Defi’s code is a fork of Grim Finance's and that Grim’s code is a fork of Beefy’s.  
![](../../images/blog/1-1.png)

Beefy’s first order of business is to determine whether the matter affects the Beefy platform. We determined that it does not, simply because the exploited code section is not present in Beefy’s contracts. The precise form of the exploit takes time to trace out.

**16:00 UTC:** Moonster (Beefy Dev) examined the matter and determines that the exploit was code from Grim Finance contracts.

![](../../images/blog/2.png)

Grim’s vulnerability is owed to the Solidity function below. This function requires the caller to pass the address of a contract, unconcerned that the provided contract could be malicious. The function calls _safeTransferFrom()_ on this passed contract, but a malicious contract may call again (“re-enter”) _depositFor()_. By recursively nesting this way a few times a blackhat may mint 10x or 100x the amount of shares than it has rights to.

[https://discordapp.com/channels/755231190134554696/755231436294062120/921794058685382737](https://discordapp.com/channels/755231190134554696/755231436294062120/921794058685382737 "https://discordapp.com/channels/755231190134554696/755231436294062120/921794058685382737")

![](../../images/blog/3-1.png)Code snippet starts on line 1111: [https://ftmscan.com/address/0xfdc10560bd833b763352c481f5785dd69c803429#code](https://ftmscan.com/address/0xfdc10560bd833b763352c481f5785dd69c803429#code "https://ftmscan.com/address/0xfdc10560bd833b763352c481f5785dd69c803429#code")

**17:28 UTC:** Weso (Beefy Lead Dev) reaches out to Grim through Discord. Weso notifies LUT (Grim mod) of the exploit and asks to set up a group to discuss details.

**17:30 UTC:** LUT states that Grim “devs had a look when reports started pouring - 7 hours ago.” In other words, Grim should have been fully aware of their situation.  
![](../../images/blog/4.png)

**17:40 UTC:** An advanced blackhat attacker starts exploiting Grim Finance.[ ](https://ftmscan.com/address/0xdefc385d7038f391eb0063c2f7c238cfb55b206c)[https://ftmscan.com/address/0xdefc385d7038f391eb0063c2f7c238cfb55b206c](https://ftmscan.com/address/0xdefc385d7038f391eb0063c2f7c238cfb55b206c "https://ftmscan.com/address/0xdefc385d7038f391eb0063c2f7c238cfb55b206c")

**17:53 UTC:** Discord group chat is set up between the Beefy and Grim dev teams. Beefy’s devs immediately detail the nature of the problem and explain that all Grim vaults must be urgently secured. Specifically, vaults should be paused to prevent them from performing transactions like drainage of funds.

**17:57 UTC:** Weso mentions that Kexley (Beefy’s Chief Strategist) is developing an exploit whitehat-hack contract to demonstrate the problem, as proof and aid to Grim.

**18:40 UTC:** Kexley, having finished writing the example exploit contract to prove Moonster’s points, asks Grim to “please pause all your vaults,” indicating that all of Grim’s user funds are at risk. Grim agrees and starts the process. **Kexley additionally provides Grim with the whitehat-hack contract address and links to the contract’s first transaction proving the exploitable reentrancy flaw.**  
![](../../images/blog/5.png)

Before Kexley completed the example whitehat exploit, a blackhat had already deployed and activated its own, more advanced exploit contract. Grim identified the attacker’s address at [https://ftmscan.com/address/0xdefc385d7038f391eb0063c2f7c238cfb55b206c](https://ftmscan.com/address/0xdefc385d7038f391eb0063c2f7c238cfb55b206c "https://ftmscan.com/address/0xdefc385d7038f391eb0063c2f7c238cfb55b206c").

The blockchain shows that the attacker began the exploit an hour before Kexley completed the whitehat-exploit contract. Only once Beefy showed Grim that the exploit could be done did Grim commence safety measures (vault pauses), at 19:00 UTC.

Soon after, Kexley checks in and notices the attack still unfolding and that Grim’s response has been slow and inadequate. He notices an unprotected vault and decides to proactively target it with the proof code Beefy developed to preserve user funds sitting there. **In other words, Kexley implements a whitehat hack to help preserve the integrity of Fantom DeFi using the same contract he had shared with Grim previously.**

Minimal funds (less than $3,000) were recovered with this first whitehat attempt. The next day, Kexley checks again and finds numerous vaults still unprotected, and he spends three hours continuing a whitehat hack. A large amount of the funds Kexley preserves are in an unstable form. Since he knows that a post mortem will take weeks or months to complete, he converts the unstable altcoin into stables and bluechips in order to preserve value. Beefy wanted the affected users to retain as much value as possible from the date of the incident.

Timings of Kexley’s whitehat maneuvers may be verified in the whitehat-exploit contract here[ ](https://ftmscan.com/address/0x9c7c5af937f53340314ac244b39c96fe71fb646d)[https://ftmscan.com/address/0x9c7c5af937f53340314ac244b39c96fe71fb646d](https://ftmscan.com/address/0x9c7c5af937f53340314ac244b39c96fe71fb646d "https://ftmscan.com/address/0x9c7c5af937f53340314ac244b39c96fe71fb646d").

### Key facts

Beefy has been made aware of specific unfortunate accusations about the incident, each of which needs a clear response. With this table, you can plainly note the reality of what occurred and the actions Beefy took.

| Accusation | Fact |
| --- | --- |
| The Grim team was never notified of the Beefy whitehat hacks and found the exploit contract for the first time 2 days ago. | Beefy shared the used whitehat exploit contract with Grim. It was deployed from a deployer address at 18:40 UTC.  Link1* You can see this in the chat logs above. |
| Context |  |
| Beefy washed funds acquired through the exploit. | Beefy converted the funds to stables, bluechips, and comparable assets to retain as much value as possible. Most of the funds were in volatile assets and we knew a full investigation would have to take place before the funds could be returned. The funds sit still in a plainly tagged, deployed Beefy Treasury contract. Link2* Note: Debank does not include another $50K of xGinSpirit & binSpirit in the treasury contract. |
| Beefy whitehat hacked 90 vaults. | Beefy initiated whitehat operations on 26 vaults in an attempt to save what victims' funds it could. |

Link1: https://ftmscan.com/tx/0xc3e4a8c27d9178bb35f506110949b3f88471968fe3114175dd0f002a5ee74a13

Link2: https://debank.com/profile/0xc7d2c0b34e84f66e237bf7260552a645629ac753

### Conclusion

Beefy wants to ensure our actions are completely transparent. While we acknowledge the mistake of holding back on an incident report this long, our intention was to avoid delivering more FUD in the heat of the incident. Given the information detailed above, it is plain to see the reasons behind each move Beefy took. As mentioned, the rescued funds remain secure. We continue to work to find a third-party intermediary so that funds are properly distributed back to impacted users.
