# Proposal: Fiat-Based Top-Up for DDC Accounts (via Stripe)

## Abstract

This proposal enables users to top up their **Decentralized Data Cluster (DDC)** accounts using **fiat payments** through **Stripe** (credit/debit cards).  
Users will no longer need to manually acquire cryptocurrencies.  
The system will automatically convert fiat to **USDC**, swap **USDC to CERE**, bridge CERE to the **Cere Mainnet**, and credit DDC accounts.  
Additionally, the system will:
- Calculate how many **$CERE tokens** the user should receive for their fiat deposit.
- Handle secure transactions and exceptions such as **low funds**.
- Send **$CERE tokens** from a "pot account" to the user's wallet.

---

## Team 🧑‍🤝‍🧑

### Team Members
- **Team Leader:** Abhijeet Singh

### Contact
- **Name:** Abhijeet Singh  
- **Email:** abhijeetsingh@mapx.world

  
### GitHub accounts:
- https://github.com/abhijeetsingh0401


### LinkedIn profiles:
- https://www.linkedin.com/in/abhijeetsi

### Team Experience
- Previously worked in 5ireChain 
- Built native cross-platform desktop in rust
- Built Bitcoin parser for memory limitation device STM32F in Rust

## Preferred Method of Funds Delivery
- USDC on Eth address: `0xFA7f58079f52438769277b34C31562ec5d351Ee4` 

---

## Development Roadmap 🔧

### Overview
- **Total Estimated Duration:** 2.5 months
- **Full-Time Equivalent (FTE):** 1 FTE

---

### Milestone 1 — Stripe Integration and Smart Contracts
- **Duration:** 1 Month
- **FTE:** 1

| # | Deliverable                    | Specification                                                                |
|:-:|---------------------------------|------------------------------------------------------------------------------|
| 1 | Stripe Payment Integration      | Integrate Stripe to accept USD/EUR fiat payments.                            |
| 2 | Fiat to USDC Conversion          | Handle conversion from fiat payments to USDC tokens internally.              |
| 3 | Smart Contract for Swapping      | Create smart contract to swap USDC for CERE tokens on DEX.                   |
| 4 | Real-Time Price Lookup           | Integrate service (like CoinGecko or Chainlink) to fetch current USDC/CERE prices.(Need to research the design for secure calculation and layout the vulnerability in design approach and use best method)  |

---

### Milestone 2 — Bridging, DDC Top-up, and UI/UX
- **Duration:** 1 Month
- **FTE:** 1

| # | Deliverable                    | Specification                                                                |
|:-:|---------------------------------|------------------------------------------------------------------------------|
| 1 | Cross-Chain Bridging             | Use Hyperbridge to move CERE tokens to Cere Mainnet.                         |
| 2 | Developer Console UI Integration | Add top-up feature into DDC UI.                                               |
| 3 | Automatic Credit to DDC Balance  | Automatically credit user's DDC account after bridging.                     |
| 4 | Secure $CERE Calculation         | Calculate the exact amount of $CERE tokens for the fiat deposited. Handle low funds and exceptions. |

---

### Milestone 3 — Testing, Research, Documentation, Deployment
- **Duration:** 0.5 Month
- **FTE:** 1

| # | Deliverable                    | Specification                                                                |
|:-:|---------------------------------|------------------------------------------------------------------------------|
| 1 | Test Environment Setup           | Simulate full flow on testnets.                                              |
| 2 | Security Research & Audit        | Research vulnerabilities, audit smart contracts, propose fixes.             |
| 3 | User and Dev Documentation       | Complete user manuals, API docs, and FAQs.                                   |


---

## Proposed Solution 💡

Users top up DDC accounts using fiat payments through **Stripe**.  
System flow:
- Stripe payment (fiat USD/EUR)
- Fiat to USDC conversion
- **Real-time USDC/CERE price fetch**
- **$CERE calculation** based on fiat deposit:
  - Convert fiat to $CERE using real-time rates.
  - Ensure sufficient $CERE funds are available in the "pot account".
  - Handle low funds or other exceptions securely.
- Swap USDC to CERE using decentralized exchanges (DEX)
- Bridge CERE to Cere Mainnet using Hyperbridge
- Send **$CERE** from "pot account" to the user’s wallet and credit their DDC account.

---

## DesignFlow JSON

```json
{
  "title": "Proposal: Fiat-Based Top-Up for DDC Accounts (via Stripe)",
  "abstract": "This proposal enables users to top up their Decentralized Data Cluster (DDC) accounts using fiat payments through Stripe (credit/debit cards). Users will no longer need to manually acquire cryptocurrencies. The system will automatically convert fiat to USDC, swap USDC to CERE, and bridge CERE to the Cere Mainnet to credit DDC accounts. Real-time pricing lookup, $CERE calculation, and secure fund handling are included.",
  "team": {
    "members": ["Abhijeet"],
    "contact": {
      "name": "Abhijeet",
      "email": "abhijeetsingh@mapx.world"
    }
  },
  "roadmap": [
    {
      "milestone": "Stripe Integration and Smart Contracts",
      "duration": "1 Month",
      "fte": "1",
      "deliverables": [
        "Stripe Payment Integration",
        "Fiat to USDC Conversion",
        "Smart Contract for Swapping USDC to CERE",
        "Real-Time Price Lookup Integration"
      ]
    },
    {
      "milestone": "Bridging, DDC Top-up, and UI/UX",
      "duration": "0.8 Month",
      "fte": "1",
      "deliverables": [
        "Cross-Chain Bridging",
        "Developer Console UI Integration",
        "Automatic Credit to DDC Balance",
        "Secure $CERE Calculation"
      ]
    },
    {
      "milestone": "Testing, Research, Documentation, Deployment",
      "duration": "0.2 Month",
      "fte": "1",
      "deliverables": [
        "Test Environment Setup",
        "Security Research & Audit",
        "User and Dev Documentation",
        "Mainnet Deployment"
      ]
    }
  ],
  "proposed_solution": "Users top up DDC accounts using fiat payments through Stripe. Fiat is converted to USDC, real-time prices are fetched, $CERE tokens are calculated based on the fiat deposit, and securely sent from the pot account to the user wallet.",
  "sequence_diagram": "User -> Stripe Payment -> Backend -> Fiat to USDC -> Fetch Price -> Calculate $CERE -> Ensure Funds in Pot Account -> Smart Contract -> USDC to CERE -> Hyperbridge -> CERE to Mainnet -> Credit DDC Account",
  "benefits": [
    "No need for users to manage crypto wallets.",
    "Extremely simplified onboarding for Web2 developers.",
    "Accurate top-up amounts with real-time prices.",
    "Faster and more reliable top-ups inside Cere Developer Console.",
    "Secure calculation of CERE tokens and fund transfers with low funds handling."
  ],
  "funds_delivery": "USDC on Ethereum Address: 0x00000"
}
```

Credits: [PR](https://github.com/Cerebellum-Network/grant-program/pull/2) for the desing flow diagrams
