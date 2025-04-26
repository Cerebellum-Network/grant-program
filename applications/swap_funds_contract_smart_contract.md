# Swap funds contract (Smart contract)
## Proposal submitted to Cere Foundation on Saturday April 26 2025 by David Onyedikachi Anyatonwu

## Project Slug
This proposal addresses the bounty described here:
[https://dorahacks.io/hackathon/bounty/1151](https://dorahacks.io/hackathon/bounty/1151)


## Abstract
This project proposes the development of a smart contract on an EVM-compatible chain (specifically Sepolia testnet initially). The contract will accept deposits of USDC, USDT, or ETH along with a destination **32-byte Cere Mainnet (Substrate) public key**. Upon receiving funds, the contract will automatically swap the deposited tokens for CERE tokens using **Uniswap V3**. Subsequently, it will utilize Hyperbridge to bridge the acquired CERE tokens to the specified recipient public key on the Cere Mainnet. The outcome will include verifiable execution of each step, demonstrated via **testnet transaction links**.

## Team 🧑‍🤝‍🧑

> [!IMPORTANT]
> Please note that the data provided in this section is for administrative and informational purposes only.

### Team members

- David Onyedikachi Anyatonwu

### Contact

- **Contact Name:** David Onyedikachi Anyatonwu
- **Contact Email:** davidanyatonwu@gmail.com
- **Website:** [David Onyedikachi](https://personal-website-rouge-eta-88.vercel.app/)

### Team's experience

Winner of several web3 hackathons, demonstrating proficiency in Solidity and EVM development. Active open-source contributor.

### Team GitHub Profiles

- https://github.com/onyedikachi-david


## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 3 Weeks
- **Full-Time Equivalent (FTE):** 1

### Milestone 1 — Smart Contract Development & Swap Integration

- **Estimated duration:** 1 Week
- **FTE:** 1

| Number | Deliverable                       | Specification                                                                                                                               |
| -----: | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
|    1.1 | EVM Smart Contract                | A Solidity smart contract deployed on the **Sepolia testnet**. Capable of receiving ETH, USDC, and USDT deposits. Requires the recipient's **32-byte hex public key** as input (user-provided). Uses OpenZeppelin contracts for ERC20 interactions and security utilities (ReentrancyGuard). |
|    1.2 | Uniswap V3 Integration            | Contract integrates with Uniswap V3 pools on Sepolia to swap deposited tokens for CERE testnet tokens. Includes basic slippage protection parameter. |
|    1.3 | Unit Tests                      | Comprehensive unit tests covering deposit handling, swap logic, and basic access control/security checks.                                        |
|    1.4 | Error Handling (Swap)           | Contract includes checks for swap success (non-zero output amount, checks return values) and reverts on failure. Emits events on success/failure. |
|    1.5 | Initial Documentation & Verification | README updated with contract details, setup instructions, and ABI. **Links to representative testnet transactions** (deposit, swap) on Sepolia Etherscan. |

### Milestone 2 — Hyperbridge Integration & Finalization

- **Estimated Duration:** 2 Weeks
- **FTE:** 1

| Number | Deliverable                   | Specification                                                                                                                                                                                               |
| -----: | ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    2.1 | Hyperbridge Teleport Call   | Contract correctly formats and executes the `teleport` call to the Hyperbridge TokenGateway contract on Sepolia. Requires correct `assetId`, destination chain data (`SUBSTRATE-cere`), recipient **32-byte public key**, and **SCALE-encoded call data** for the `deposit_extra` function (encoding likely performed off-chain initially for the `data` parameter). |
|    2.2 | Error Handling (Bridge)       | Contract checks for `teleport` call success (if possible via return values or reverts). Emits events on initiation and potential failure detection on the EVM side.                                          |
|    2.3 | End-to-End Testing & Verification | Test the full flow: Deposit EVM token -> Swap -> Bridge CERE -> Verify CERE receipt on Cere testnet. **Verification via links to block explorers (Sepolia Etherscan & Cere Testnet Explorer)** for all relevant transactions. |
|    2.4 | Final Documentation & Demo  | Complete documentation detailing the full process, contract interfaces, deployment steps, usage, and verification steps.                                                                                       |
|    2.5 | Code Repository             | Final, cleaned-up code pushed to the GitHub repository specified above.                                                                                                                                       |

## Security Considerations
- **Standard Libraries:** Utilizes OpenZeppelin contracts for ERC20 handling, SafeMath (if needed for Solidity <0.8), and ReentrancyGuard.
- **Checks-Effects-Interactions:** Pattern will be followed to mitigate reentrancy risks.
- **Input Validation:** Basic input validation will be performed (e.g., non-zero addresses, amount checks). Validation of the 32-byte public key format itself might be limited on-chain.
- **DEX Interaction:** Assumes standard risks associated with Uniswap V3 interactions (e.g., slippage, pool availability). Basic slippage protection included.
- **Bridge Interaction:** Relies on the security of the Hyperbridge contracts and infrastructure. This contract primarily acts as a caller.
- **Access Control:** Basic Ownable pattern for administrative functions (like withdrawing accidentally sent tokens, pausing if necessary).

## Gas Considerations
Gas costs associated with swaps and bridging calls can be significant. While code clarity and correctness are the primary focus for this grant, unreasonably inefficient operations will be avoided. Extensive gas optimization is considered out of scope for this initial version but can be explored in future iterations.

## Future Plans

- Fixes and updates

## Preferred method of funds delivery
- USDC on ETH address: 

## Link to Logo image 1:1 (in github)
- 

## Other Bio and details or thoughts, etc.

---
🛟 Questions? Ask in our [Contributor Discord](https://cere.network/discord) or write us at [community@cere.io](mailto:community@cere.io). 