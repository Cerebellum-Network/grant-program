# PayCere - Smart Contract for USDC/USDT to $CERE Swap and Bridge

## Proposal submitted to Cere Foundation on 2025-04-18 by Dai Mian

## Project Slug


## Abstract
PayCere is a smart contract solution designed to automate the process of topping up developer accounts on the Cere Network. Users deposit USDC or USDT into the PayCere contract on an EVM-compatible network. The contract then automatically swaps these stablecoins for $CERE via a DEX like Uniswap, and subsequently bridges the $CERE tokens to the Cere Mainnet using the official Cere bridging tool.

The goal of PayCere is to reduce user friction and simplify the onboarding process by enabling a one-click solution for users to top up their Cere Developer Console balances using familiar stablecoins. It also emits structured events for potential integration with balance-tracking tools or Cere APIs, thus supporting future expansions like account update automations (Bounty 3).

## Team 🧑‍🤝‍🧑

### Team members
- Dai Mian  — Project Lead & Developer

### Contact
- **Contact Name:** Dai Mian
- **Contact Email:** fahthrone@gmail.com
- **Website:** (coming soon)

### Team's experience
- Proficient in Solidity, Hardhat, Ethers.js, Web3.py
- Multiple years worked as a backend developer

### Team Code Repos
- https://github.com/HikaRiwwww/pay_cere

### GitHub Accounts
- https://github.com/HikaRiwwww

### LinkedIn Profiles

## Development Roadmap:

### Overview
- **Total Estimated Duration:** 2 weeks
- **Full-Time Equivalent (FTE):** 1 FTE

### Milestone 1 — Architecture & Local Testing
- **Estimated duration:** 1 week
- **FTE:** 1.0

| Number | Deliverable                    | Specification                                                                 |
|--------|--------------------------------|-------------------------------------------------------------------------------|
| 1      | Smart Contract Design          | USDC/USDT handling, Uniswap integration, $CERE bridge interface               |
| 2      | Local Test Environment         | Hardhat setup, mock tokens, Uniswap local testing                             |
| 3      | Unit Tests                     | Comprehensive unit tests for all logic                                        |

### Milestone 2 — Mainnet Integration & Events
- **Estimated duration:** 1 week
- **FTE:** 1.0

| Number | Deliverable                    | Specification                                                                 |
|--------|--------------------------------|-------------------------------------------------------------------------------|
| 1      | Bridge Integration             | Use of Cere official bridge for sending $CERE to mainnet                      |
| 2      | Event Emission Module          | Emits swap and bridge events with metadata                                   |
| 3      | Deployment Scripts             | Scripts for deployment and testing on EVM testnet and Cere testnet            |
| 4      | Technical Documentation        | Includes architecture explanation and setup instructions                      |

## Future Plans
- Long-term maintenance will be community-supported or integrated into the Cere Developer Console
- Potential expansion to support Bounty 3 and automated developer account balance updates via Cere APIs

## Preferred method of funds delivery
- USDT on Eth address: 0xCD36274DC304de874644a176Ce5eC325Df7c9c2b

## Link to Logo image 1:1 (in github)
- ...

## Other Bio and details or thoughts, etc.
- This tool is open source and MIT licensed
- Focus is on seamless UX for developer onboarding
- Designed for easy integration into dApps or wallets

