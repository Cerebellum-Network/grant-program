# Built-in AES-256 Encryption for Cere DDC SDK
## Proposal submitted to Cere Foundation on 17.12.2025 by Chris Nikhil Fernando

---

## Project Slug

https://github.com/chrsnikhil/grant-program/tree/master/request_for_proposals/rfp3

*(Responding to the “DDC SDK: Built-in Encryption RFP” for implementing AES-256 as a built-in cipher)*

---

## Abstract

Today, the Cere DDC SDK requires developers to explicitly plug in a cipher to encrypt user data, which increases friction and risks misconfiguration. This proposal aims to deliver secure, built-in encryption out-of-the-box by implementing an AES-256 cipher (CBC mode with PKCS7 padding) directly within the DDC SDK core.

The project will introduce a pure TypeScript `AES256Cipher` implementation using Node’s native crypto module, fully compatible with the existing `NaclCipher` API. This ensures backward compatibility while allowing developers to switch ciphers with minimal effort. Comprehensive unit tests will validate encryption/decryption correctness, error handling, and resistance to tampered ciphertexts, including coverage against official NIST test vectors.

Documentation updates and examples will guide developers on selecting and using the new cipher, improving overall developer experience and security defaults within the SDK. The work is scoped to be completed within one development day, aligns strictly with the provided RFP requirements, and introduces no additional external dependencies or bundle bloat.

---

## Team 🧑‍🤝‍🧑

### Team members

- **Chris Nikhil Fernando** (Solo developer)

### Contact

- **Contact Name:** Chris Nikhil Fernando  
- **Contact Email:** chrsnikhil@gmail.com  
- **Website:** https://chrsnikhil.info  

### Team's experience

I am a Computer Science Engineering undergraduate with strong hands-on experience in TypeScript, Node.js, cryptography fundamentals, and SDK-level development. I have built and shipped multiple production-ready projects involving backend systems, blockchain protocols, and security-sensitive logic.

I am a **two-time ETHGlobal hackathon winner**, having won at:
- **ETHGlobal New Delhi 2025**
- **ETHGlobal Online 2025**

These wins involved designing and shipping end-to-end Web3 systems under tight deadlines, including smart contract development, cryptographic integrations, SDK usage, and production-grade testing.

I have prior experience working with Web3 SDKs, cryptographic primitives, and test-driven development. My work consistently emphasizes clean abstractions, backward compatibility, and minimal surface area for security bugs—principles directly aligned with this proposal’s goals.

This proposal focuses on a tightly scoped, security-critical SDK contribution, leveraging my experience in delivering high-quality infrastructure components quickly and reliably.

### Team Code Repos
  
- https://github.com/chrsnikhil  

### Team GitHub Accounts

- https://github.com/chrsnikhil  

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/chris-nikhil-6883ba290/  

---

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 1 day  
- **Full-Time Equivalent (FTE):** 1.0  

---

### Milestone 1 — Built-in AES-256 Cipher for DDC SDK

- **Estimated duration:** 1 day  
- **FTE:** 1.0  

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 1 | AES256Cipher implementation | Pure TypeScript AES-256-CBC with PKCS7 padding using Node crypto, matching the NaclCipher API |
| 2 | SDK integration | Export and register AES256Cipher under `packages/core/src/cipher/` |
| 3 | Unit tests | Full round-trip coverage including invalid keys/IVs and tampered ciphertext; ≥95% line coverage |
| 4 | Documentation | README update and Typedoc snippet explaining how to switch ciphers |
| 5 | Example usage | Example file under `examples/encryption/aes256.ts` |
| 6 | Release prep | CHANGELOG entry and semantic version bump |

**Verification:**
- `encrypt()` and `decrypt()` return identical plaintext for all tested vectors  
- All existing SDK tests pass  
- No new security or lint warnings  
- Bundle-size increase ≤ 5 KB gzipped  

---

## Future Plans

Upon completion of Milestone 1, I am open to continuing work on Milestone 2 and 3 as described in the RFP, including integration into the Playerground and CLI. Long-term maintenance would be supported through continued open-source contributions and potential follow-up grants or bounties within the Cere ecosystem.

---

## Preferred method of funds delivery

- **USDC on Ethereum address:** [0x6696fa8838A4615800a0Dd541454288698a0703E]

---

## Link to Logo image 1:1 (in github)

- N/A

---

## Other Bio and details or thoughts

This proposal focuses on a narrowly defined, high-impact SDK improvement with clear security and developer experience benefits. The work is intentionally scoped to ensure fast delivery, high test coverage, and minimal risk to existing functionality.

---


