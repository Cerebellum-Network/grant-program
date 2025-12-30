# Built-in AES-256 Encryption for Cere DDC SDK

## Proposal submitted to Cere Foundation on 30 December 2025 by Dinesh Kumar R

---

## Project Slug

This application responds to the official Cere RFP:

**DDC SDK: Built-in Encryption (RFP #3)**  
https://github.com/Cerebellum-Network/grant-program/tree/master/request_for_proposals/rfp3

---

## Abstract

The Cere DDC SDK currently encrypts user data only when developers explicitly configure and inject a cipher implementation (e.g., `NaclCipher`). While flexible, this design introduces a security foot-gun: encryption can be unintentionally omitted during development, onboarding, or rapid prototyping.

This proposal implements **AES-256 encryption (CBC mode with PKCS7 padding)** as a **built-in, first-class cipher** in the DDC SDK, fully aligned with the scope and requirements of RFP #3. The implementation mirrors the existing `NaclCipher` API to ensure drop-in compatibility, uses **pure TypeScript with Node.js native crypto**, and introduces **zero external dependencies**.

Milestone 1 delivers the complete AES256Cipher implementation, comprehensive unit tests (including NIST test vectors), documentation updates, example usage, and a semver-compliant release. The result is a **secure-by-default developer experience**, where every application built on the DDC SDK benefits from strong, audited encryption without additional configuration or risk.

---

## Team 🧑‍🤝‍🧑

### Team Members

- **Dinesh Kumar R** (Team Lead)

### Contact

- **Contact Name:** Dinesh Kumar R  
- **Contact Email:** dineshkumar.26csa@licet.ac.in 
- **Website / GitHub:** https://github.com/dkwhitedevil  

### Team Experience


I am a Computer Science Engineering student with hands-on experience in backend systems, SDK-level development, and cryptography-aware application design. I have worked on multiple Web3 and infrastructure-focused projects involving secure data handling, developer tooling, and protocol-level integrations.

Notably, I built **SuiVote**, a blockchain-based voting application that uses cryptographic primitives and decentralized infrastructure to prevent duplicate and fraudulent votes. The system incorporates on-chain verification, secure identity handling, and tamper-resistant data flows, requiring careful attention to encryption, key management, and correctness guarantees.

My recent work emphasizes **correctness, test coverage, and developer experience**, which directly aligns with the requirements of this RFP. I have not previously applied for or received a Web3 Foundation grant.

### Team Code Repositories

- https://github.com/dkwhitedevil

### GitHub Accounts

- https://github.com/dkwhitedevil

### LinkedIn Profiles (optional)

- N/A

---

## Development Roadmap 🔧

### Overview

- **Total Estimated Duration:** 1 dev-day  
- **Full-Time Equivalent (FTE):** 1.0  

---

### Milestone 1 — AES-256 Built-in Cipher (RFP #3)

- **Estimated Duration:** 1 dev-day  
- **FTE:** 1.0  

| # | Deliverable | Specification |
|---:|------------|---------------|
| 1 | `AES256Cipher` implementation | Pure TypeScript implementation using Node.js `crypto`, AES-256-CBC with PKCS7 padding, API-compatible with `NaclCipher` |
| 2 | SDK integration | Exported alongside `NaclCipher` under `packages/core/src/cipher/` |
| 3 | Unit tests | Full round-trip tests, invalid key/IV handling, tampered ciphertext detection, and NIST test vectors |
| 4 | Coverage | ≥ 95% line coverage for the `cipher` folder |
| 5 | Example usage | `examples/encryption/aes256.ts` |
| 6 | Documentation | README snippet explaining how to switch ciphers |
| 7 | Release hygiene | CHANGELOG entry and semver bump (e.g. `v0.5.0-aes`) |
| 8 | CI compliance | Lint, build, tests, and type-check passing |

### Verification & Success Criteria

- `encrypt()` and `decrypt()` return identical plaintext for all NIST test vectors  
- No existing SDK tests regress  
- Bundle size increase ≤ 5 KB gzipped  
- No new `eslint-plugin-security` or weak-crypto warnings  

---

## Technical Approach

- AES-256 encryption using CBC mode with PKCS7 padding
- Key and IV validation consistent with cryptographic best practices
- Node.js native `crypto` module only (no third-party dependencies)
- Strict API parity with `NaclCipher` to ensure seamless adoption
- Defensive error handling for malformed inputs and tampered ciphertext

This approach ensures auditability, performance, and minimal bundle impact while preserving SDK ergonomics.

---

## Future Plans

Upon successful completion of Milestone 1, I am open to continuing with future milestones outlined in the RFP, including integration into the DDC Playground and CLI tooling. Long-term, I plan to remain an active contributor to the Cere SDK ecosystem, focusing on security, reliability, and developer experience improvements.

---

## Preferred Method of Funds Delivery

- **USDC on Ethereum**  
  *0x95704618F3601289f26489677ABCcA4B08beA81F*

---

## Link to Logo Image (1:1)

- Not applicable

---

## Additional Notes

This proposal intentionally adheres **strictly to the RFP scope**. The focus is on delivering a correct, auditable, and well-tested AES-256 cipher implementation that can be safely shipped as a default encryption option in the Cere DDC SDK.

---

🛟 Questions? Ask in the [Cere Contributor Discord](https://cere.network/discord) or write to [community@cere.io](mailto:community@cere.io)