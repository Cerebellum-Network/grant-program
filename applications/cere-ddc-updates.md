# Cere Developer Console Improvement: Smart Contract to Bridge Tokens and Automatic DDC Update

## Proposal submitted to the Cere Foundation on April 21, 2025, by Nikhil Bhintade

## Project Slug

Links to the bounties provided by Cere:

-   [Swap Funds Contract (Smart Contract)](https://dorahacks.io/hackathon/bounty/1151)
-   [Automated DDC Account Update (Substrate)](https://dorahacks.io/hackathon/bounty/1152)

## Abstract

The team intends to work on the bounties linked above. Our deliverables will include a smart contract along with an updated version of the developer console featuring the following:

-   Automated updates
-   Ability to connect to an EOA wallet to interact with the contract, which will swap any token to CERE and bridge them to the CERE mainnet

## Team 🧑‍🤝‍🧑

### Team Members

-   Nikhil Bhintade
-   Ashish Bhintade

### Contact

-   **Contact Name:** Nikhil Bhintade
-   **Contact Email:** bhintadenik@gmail.com
-   **Website:** https://linktr.ee/nikbhintade

### Team's Experience

**Nikhil Bhintade**: I have been working as a freelance Solidity developer and technical writer since late 2020 in the crypto industry. My development experience mainly involves forking DeFi protocols on various EVM-compatible chains, but I’ve recently focused more on creating technical content.

**Ashish Bhintade**: A frontend developer who has primarily worked on frontend apps that interact with EVM chains, mainly using Next.js/React, along with libraries to interact with smart contracts and various wallets.

### Team Code Repos

-   N/A

Please also provide the GitHub accounts of all team members. If they contain no activity, references to other hosted or live projects are also acceptable.

-   https://github.com/nikbhintade
-   https://github.com/ashishbhintade

### Team LinkedIn Profiles (if available)

-   https://www.linkedin.com/in/nikbhintade
-   https://www.linkedin.com/in/ashishbhintade

## Development Roadmap 🔩

### Overview

There’s not much to explain in the roadmap, as we will be following the provided specifications. It will take us 8 days to develop a working and well-tested smart contract deployed to mainnet. The remaining time will be spent implementing automatic DDC updates.

For the first bounty (swap smart contract), the following features will be included:

-   On the DDC, users can connect a wallet (any EOA)
-   After the user sends ETH/ERC-20 tokens to the contract:
    -   The contract swaps the given token to CERE
    -   Then bridges those tokens to the CERE mainnet using Hyperbridge

Regarding the DDC, I will add more details soon—I haven’t reviewed it yet. The current focus has been on understanding Hyperbridge and the token-bridging process.

### Milestone 1 — Smart Contract Functionality

-   **Estimated Duration:** 10 days
-   **FTE:** 1

| Number | Deliverable    | Specification                                                                 |
| ------ | -------------- | ----------------------------------------------------------------------------- |
| 1      | Smart Contract | The smart contract can swap any token to CERE and bridge it using Hyperbridge |

### Milestone 2 — DDC Automated Account Update

-   **Estimated Duration:** 10 days
-   **FTE:** 1

| Number | Deliverable           | Specification                                                                       |
| ------ | --------------------- | ----------------------------------------------------------------------------------- |
| 1      | DDC Automatic Updates | Haven’t had a chance to finalize the details yet, but an outline will be ready soon |

## Future Plans

The current future plans are limited to updating the smart contract if the team decides to conduct an audit. If the team proceeds with an audit through an auditing firm, we can update the contracts based on the audit report. Additionally, if the team wants further updates to the developer console, we’re open to discussing that; assuming the submitted work for the bounty is satisfactory.


## Preferred Method of Fund Delivery

-   USD/EUR fiat (preferred via PayPal or another method the team supports; USDC is also acceptable but fiat is preferred)
-   USDC on Ethereum address: `0x0645AFbfE8e09ECF48B85f583F73978f176dC27C`

## Link to Logo Image (1:1, in GitHub)

## Other Bio, Details, or Thoughts

Regarding the smart contract, I’m fairly confident the team isn’t expecting an audit. Still, I’d like to confirm, please let us know in the PR comments.

There is one remaining bounty I can take on as well. However, I’d like to first discuss the flow, which is why it hasn’t been included here. If the team is okay with us handling all three bounties, we’re happy to do so after discussing the flow. In that case, the timeline would increase by approximately 10 days.

Also, I wanted to check if it would be possible to receive the full $2,000 budget if we decide to take on all three bounties. Please let me know about that as well in the PR comments.

---

🛟 Questions? Ask in our [Contributor Discord](https://cere.network/discord) or write to us at [community@cere.io](mailto:community@cere.io).
