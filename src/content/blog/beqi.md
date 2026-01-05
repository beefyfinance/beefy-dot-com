---
date: 2024-02-22T12:00:00Z
header_image: "../../images/blog/beqi/cover.png"
short_description: "Dive into the new dynamics as we release Version 2 of our Beefy-escrowed QI token."
sub_header: "beQI: The Next Evolution"
title: "beQI: The Next Evolution"
tags: [products, partners]
---

![](../../images/blog/beqi/cover.png)

It is time for the next evolution of the Beefy Escrowed QI (beQI) token!

As a recap, beQi was a perpetually locked Qi tokens. 80% of QI deposits into beQI were locked to eQI and 20% remained available as a reserve pool where users could burn beQI for an equal amount of QI. The beQI could then be staked into the beQI Earnings Pool to earn QI or the beQI vault to have the QI rewards converted to beQI and get compounded rewards!

Qi Dao updated their eQI functionality to aveQI as  part of their token relaunch on Ethereum so that 80-20 QI-ETH Balancer Pool Tokens (BPTs)  instead of just QI tokens are locked, increasing the liquidity over the long haul.

### Enter beQI V2

A lot will remain the same.
* Users can mint beQI which is perpetually locked for maximum rewards
* When new beQI is minted, the reserves will be filled first before additional locking (Reserves > 20% of beQI supply)
* 100% of rewards will go to the [beQI Earnings Pool](https://app.beefy.com/vault/beqiv2-pool)
* beQI will need to be staked in order to receive rewards

Some things will also be changing, to align with aveQI mechanics:
* Users will create QI-WETH 80-20 BPTs and then use those mint new beQI 1:1

vQI will be joining the fray!  1 vQI is counted the same as 1 beQI for calculating the disbursement of rbeQI.

beQI v2 is not 1:1 with old beQI due to BPTs being locked instead of QI.  The sum of beQI v1 and vQI is 4,801,892.42 and the amount of rbeQI (beQI staked in the beQI Earnings Pool) is 584,813.04 for a ratio of rbeQI-beQI v1 of 0.1218.

There were no reserves available for beQI v1 and beQI v2 will launch without a reserve. New beQI minted will fill the reserves before locking any additional QI-ETH BPTs as previously mentioned.

### Distribution

The distribution will occur as follows
* EOA addresses with greater than or equal to 300 beQI/vQI will receive rbeQI on ETH [txn link](https://etherscan.io/tx/0x695b8cb5ef26ac81fa01adc9ddf6dd8aad61704b9f865289c5461eebc6aab960)
* All addresses with less than 300 beQI/vQI will receive the USDC equivalent value of their share of beQI/vQI on Polygon Network [txn link](https://polygonscan.com/tx/0x732db79cfb279ff2b12d789e04a59519addf46da9652390c41dd7e9dba208770)
    * This decision was made because  gas costs to distribute on Ethereum mainnet would be greater than the value of the token
    * Addresses with owed amounts less than $0.50 will be considered dust and distribution will not occur
* Contracts will be handled separately. For vault type contracts Beefy will snapshot depositors and distribute accordingly
    * Gnosis Safe contracts will be required to show proof of ownership before receiving rbeQI on mainnet
    * This distribution will require additional time, and we thank you for your patience as we continue with this process

Beefy has enjoyed years of working with Qi Dao and is thrilled to continue working together. Beefy certainly agrees with the Qi Dao’s decision to redeploy their token on Ethereum, having done so ourselves last year.

[beQI Earnings Pool](https://app.beefy.com/vault/beqiv2-pool)

![](../../images/blog/beqi/upgrade.png)