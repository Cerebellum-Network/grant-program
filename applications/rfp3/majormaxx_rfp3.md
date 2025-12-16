# DDC SDK Built-In Encryption Implementation

**Proposal submitted to Cere Foundation on December 16, 2025 by Emerson Majormaxx Daniel**

---

## Project Slug

This application is for an existing RFP provided by Cere: **RFP3: DDC SDK "Built-In Encryption"**

- **RFP Location**: [request_for_proposals/rfp3/README.md](../README.md)
- **Full RFP Documentation**: [Built-in Encryption RFP](https://github.com/Cerebellum-Network/cere-ddc-sdk-js/blob/rfp/built-in-encryption/rfps/built-in-encryption.md)

---

## Abstract

This proposal addresses Cere Network's need for **built-in encryption** in the DDC SDK. Currently, developers must manually implement encryption when storing sensitive data on the Decentralized Data Cloud (DDC), which is error-prone, non-uniform, and creates security inconsistencies across the ecosystem.

I propose implementing **client-side encryption as a first-class SDK feature** across three integrated components:

1. **Core SDK**: Pluggable `Cipher` interface with production-ready AES-256-CBC implementation
2. **Playground Application**: Browser-based encryption UI controls with AES-GCM for developer testing
3. **CLI Tool**: Command-line encryption flags for automated workflows

This will enable **"privacy by default"** for all DDC users without requiring specialized cryptography knowledge or additional dependencies.

My experience with TypeScript/JavaScript, particularly in Web3 projects like Story Protocol CLI and DDC SDK integrations, combined with strong testing practices and documentation skills, positions me to deliver production-quality code with ≥95% test coverage, comprehensive documentation, and adherence to NIST security standards.

---

## Team 🧑‍🤝‍🧑

### Team members

- **Emerson Majormaxx Daniel** - Solo Developer

### Contact

- **Contact Name:** Emerson Majormaxx Daniel
- **Contact Email:** emersondaniel300@gmail.com
- **Website:** https://github.com/majormaxx

### Team's experience

I am a full-stack web3 developer proficient in TypeScript/JavaScript development, specializing in CLI tools, SDK design, and blockchain integrations. My relevant experience includes:

**TypeScript/JavaScript Proficiency:**

- professional development in TypeScript and modern JavaScript (ES6+)
- Extensive experience with Node.js, particularly in building CLI tools and SDK libraries
- Proficient with modern tooling: npm workspaces, Lerna, Vite, React

**Cryptography & Security:**

- Core contributor to PILI project implementing privacy-preserving computations on encrypted data using Fhenix.js
- Implemented client-side FHE encryption with type-safe utilities for React integration
- Built FHE integration tests and deployment infrastructure for production-ready encrypted smart contracts
- Experience with Web Crypto API for browser-based cryptographic operations
- Understanding of symmetric encryption (AES-256-CBC, AES-GCM, ChaCha20), key derivation (PBKDF2, HKDF), and secure random generation
- Familiar with NIST standards, OWASP cryptographic best practices, and homomorphic encryption schemes

**Testing & Quality:**

- Strong commitment to test-driven development (TDD)
- Experience achieving high code coverage (90%+) using Jest, Vitest, and other testing frameworks
- Proficient in writing unit tests, integration tests, and E2E tests
- Knowledge of CI/CD pipelines and automated testing workflows

**Web3 Development:**

- Built and published **Story Protocol CLI** (`@story-protocol/cli`) to npm with 1000+ downloads
- Developed decentralized applications with content-addressable storage concepts
- Understanding of blockchain wallet integration, signing, and transaction flows
- Experience with ethers.js

**Open Source Contributions:**

- Active contributor to Web3 projects and open-source ecosystems
- Familiar with GitHub workflows, PR reviews, and collaborative development
- Strong documentation skills with Markdown, JSDoc, and TypeDoc

**Notable Projects:**

1.  **Story Protocol CLI** ([npm package](https://www.npmjs.com/package/@story-protocol/story-protocol-cli))

    - Built complete CLI tool for Story Protocol blockchain interactions
    - Implemented project scaffolding with template system
    - Published to npm with comprehensive documentation
    - Technologies: TypeScript, Node.js, Commander.js, Next.js templates

2.  **PILI: FHE-Protected Uniswap v4 Hook** ([GitHub](https://github.com/Godbrand0/PILI))
    - Contributed FHE (Fully Homomorphic Encryption) integration for privacy-preserving DeFi application
    - Implemented client-side encryption SDK with type-safe React utilities
    - Built FHE testing infrastructure and deployment automation
    - Core features: Encrypted impermanent loss calculations, privacy-preserving price bounds, client-side parameter encryption
    - Technologies: Solidity, Fhenix.js, TypeScript, React, Foundry
    - **Key Contributions**:
      - `feat: FHE integration` - Core encryption implementation
      - `feat(client-sdk): implement type-safe FHE utilities with React integration`
      - `feat: add FHE integration tests and deployment infrastructure`
      - `feat: FHE testing setup`

### Code Repo

- https://github.com/majormaxx/story-protocol-cli
- https://github.com/majormaxx

### LinkedIn Profile

- https://www.linkedin.com/in/emersonmajormaxxdaniel

---

## Development Roadmap :nut_and_bolt:

This roadmap precisely follows the RFP requirements, breaking down the implementation into three clear milestones. Each milestone is independently testable, has concrete deliverables aligned with the official RFP specification, and builds incrementally upon previous work.

> [!CAUTION]
> All deliverables will be original work implementing the specifications from the official RFP. Any reference implementations reviewed will be properly attributed, and all code will be published under the Apache 2.0 license as required by the SDK.

### Overview

- **Total Estimated Duration:** 9-10 working days
- **Full-Time Equivalent (FTE):** 1.0

---

### Milestone 1 — Core SDK Encryption (AES-256 Cipher)

**Priority**: ⚡ **CRITICAL** - Foundation for all subsequent milestones

- **Estimated duration:** 2 working days
- **FTE:** 1.0
- **Deliverable Deadline:** Within first 2 days (as specified in RFP)
- **Funding:** TBD (based on Cere's grant structure)

| Number | Deliverable                     | Specification                                                                                                                                                                                                                                                                     |
| ------ | ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0a.    | **License**                     | Apache 2.0 (inherited from SDK license)                                                                                                                                                                                                                                           |
| 0b.    | **Documentation**               | Inline JSDoc comments for all public APIs, TypeDoc-compatible annotations, README section in `packages/ddc-client/README.md` explaining cipher usage                                                                                                                              |
| 0c.    | **Testing Guide**               | Comprehensive unit test suite with ≥95% line coverage for cipher directory, documented test scenarios                                                                                                                                                                             |
| 0d.    | **Article**                     | Usage guide in `packages/ddc-client/README.md` with code examples showing how to enable encryption                                                                                                                                                                                |
| 1.     | **Cipher Interface**            | Define `Cipher` interface in new file `packages/ddc-client/src/Cipher.ts` with:<br/>- `encrypt(data: Uint8Array): Promise<Uint8Array>`<br/>- `decrypt(data: Uint8Array): Promise<Uint8Array>`                                                                                     |
| 2.     | **AES256Cipher Implementation** | Create `packages/ddc-client/src/AES256Cipher.ts`:<br/>- Pure TypeScript, zero external deps<br/>- Node.js `crypto` module only<br/>- AES-256-CBC mode with PKCS7 padding<br/>- Automatic IV generation and prepending<br/>- Proper error handling for bad keys/IVs/ciphertext     |
| 3.     | **DdcClient Integration**       | Extend `DdcClientOptions` interface with optional `cipher?: Cipher` field<br/>Store cipher instance in `DdcClient` constructor<br/>Wrap `upload()` with `cipher.encrypt()`<br/>Wrap `download()` with `cipher.decrypt()`                                                          |
| 4.     | **Unit Tests**                  | Test file `packages/ddc-client/src/__tests__/AES256Cipher.test.ts`:<br/>✅ Round-trip encryption/decryption equality<br/>✅ NIST test vector validation<br/>✅ Tampered ciphertext rejection<br/>✅ Invalid key/IV scenarios<br/>✅ Empty data handling<br/>✅ Large file support |
| 5.     | **Example Code**                | Working example `examples/node/encryption-aes256.ts` demonstrating:<br/>- Creating AES256Cipher instance<br/>- Uploading encrypted file<br/>- Downloading and decrypting<br/>- Verifying plaintext equality                                                                       |
| 6.     | **CI/CD Integration**           | CHANGELOG entry documenting new feature<br/>Semver minor bump (e.g., `v2.14.0`)<br/>All CI checks passing (lint → build → tests → type-check)<br/>No bundle size regression                                                                                                       |

**Success Criteria:**

- ✅ `encrypt()` + `decrypt()` return byte-for-byte identical plaintext for all NIST test vectors
- ✅ No existing SDK tests regress (100% backward compatibility)
- ✅ Bundle-size increase ≤ 5 KB gzipped
- ✅ Zero new `eslint-plugin-security` or `no-weak-crypto` warnings
- ✅ Code review approved by Cere maintainers
- ✅ Completed within **2 working days** as specified in RFP

**Technical Implementation Details:**

```typescript
// Cipher interface design
export interface Cipher {
  encrypt(data: Uint8Array): Promise<Uint8Array>;
  decrypt(data: Uint8Array): Promise<Uint8Array>;
}

// AES256Cipher usage pattern
import { AES256Cipher } from "@cere-ddc-sdk/ddc-client";

const key = Buffer.from("your-32-byte-key-here...", "hex");
const cipher = new AES256Cipher(key);

const ddcClient = await DdcClient.create(seed, {
  ...TESTNET,
  cipher, // Enable encryption
});
```

---

### Milestone 2 — Playground Encryption Controls

- **Estimated Duration:** 4 working days
- **FTE:** 1.0
- **Funding:** TBD

| Number | Deliverable                | Specification                                                                                                                                                                                                                                                                             |
| ------ | -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0a.    | **License**                | Apache 2.0                                                                                                                                                                                                                                                                                |
| 0b.    | **Documentation**          | Inline React component documentation, user-facing help text in UI, updated Playground README                                                                                                                                                                                              |
| 0c.    | **Testing Guide**          | Manual E2E testing scenarios with screenshots, step-by-step verification instructions                                                                                                                                                                                                     |
| 1.     | **Browser AES-GCM Cipher** | Create `playground/src/lib/BrowserCipher.ts`:<br/>- Web Crypto API implementation (AES-GCM mode)<br/>- Browser-compatible, no Node.js dependencies<br/>- Accept user-supplied key string<br/>- PBKDF2 key derivation from password<br/>- Automatic IV generation and handling             |
| 2.     | **UI Components**          | React components in `playground/src/components/`:<br/>- `<EncryptionToggle />` - Enable/disable checkbox<br/>- `<EncryptionKeyInput />` - Secure text input with validation<br/>- `<EncryptedDownloadButton />` - Download & Decrypt button<br/>- Visual indicators for encrypted uploads |
| 3.     | **State Management**       | Integrate encryption state using React Context or local state:<br/>- Persist encryption preference (sessionStorage)<br/>- Track current encryption key<br/>- Update UI dynamically based on encryption status                                                                             |
| 4.     | **Key Derivation**         | Implement secure key derivation:<br/>- PBKDF2 with 100,000 iterations<br/>- Random salt generation and storage<br/>- Derive AES-256 key from user password<br/>- Clear security warnings about key loss                                                                                   |
| 5.     | **Error Handling**         | User-friendly error messages:<br/>- Invalid key format warnings<br/>- Decryption failure guidance<br/>- Empty key field validation<br/>- Network error vs. decryption error differentiation                                                                                               |
| 6.     | **Manual Testing**         | Documented test scenarios:<br/>1. Upload file with encryption enabled<br/>2. Verify direct CDN download is ciphertext<br/>3. Download & Decrypt via playground UI<br/>4. Verify plaintext matches original<br/>5. Test incorrect key rejection                                            |

**Success Criteria:**

- ✅ Upload with encryption enabled produces unintelligible ciphertext when downloaded directly from CDN
- ✅ "Download & Decrypt" button successfully recovers original plaintext
- ✅ Graceful error handling for incorrect decryption keys
- ✅ Clear user warnings about key security and storage responsibilities
- ✅ Playground builds and runs without errors (`npm run build && npm run playground`)

### Milestone 3 — CLI Encryption Flags

- **Estimated Duration:** 3 working days
- **FTE:** 1.0
- **Funding:** TBD

| Number | Deliverable              | Specification                                                                                                                                                                                                                                                               |
| ------ | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0a.    | **License**              | Apache 2.0                                                                                                                                                                                                                                                                  |
| 0b.    | **Documentation**        | Updated `packages/cli/README.md` with encryption flag examples, help text for new flags                                                                                                                                                                                     |
| 0c.    | **Testing Guide**        | E2E CLI test scenarios, automated test script if possible                                                                                                                                                                                                                   |
| 1.     | **CLI Flag Parsing**     | Extend `upload` and `download` commands in `packages/cli/src/commands/`:<br/>- Add `--encrypt` boolean flag<br/>- Add `--key <hex>` string option<br/>- Commander.js or yargs integration<br/>- Validation for flag combinations                                            |
| 2.     | **Upload Integration**   | Modify upload command handler:<br/>- Instantiate `AES256Cipher` when `--encrypt` flag present<br/>- Pass cipher to `DdcClient` constructor<br/>- Display encryption status in console output                                                                                |
| 3.     | **Download Integration** | Modify download command handler:<br/>- Instantiate `AES256Cipher` when `--encrypt` flag present<br/>- Apply decryption during download<br/>- Write decrypted plaintext to output file                                                                                       |
| 4.     | **Key Format Support**   | Support multiple key input formats:<br/>- Hexadecimal (default): `--key ABC123...`<br/>- Base64: `--key-base64 dGVzdC4uLg==`<br/>- Clear documentation and examples for each format                                                                                         |
| 5.     | **Error Handling**       | Comprehensive validation:<br/>- Missing `--key` with `--encrypt` produces helpful error<br/>- Invalid key format shows clear guidance<br/>- Incorrect decryption key shows specific error<br/>- Exit codes: 0 (success), 1 (error)                                          |
| 6.     | **E2E Testing**          | Create test script `packages/cli/test-encryption.sh`:<br/>1. Upload file with encryption<br/>2. Download without decryption (verify ciphertext)<br/>3. Download with decryption<br/>4. Compare decrypted file to original (SHA256 hash)<br/>5. Test incorrect key rejection |

**Success Criteria:**

- ✅ `ddc upload ./file.txt --encrypt --key <hex>` produces encrypted data on DDC network
- ✅ `ddc download <CID> --encrypt --key <hex>` successfully decrypts and matches original file
- ✅ Incorrect decryption key produces clear, actionable error message
- ✅ Missing `--key` with `--encrypt` flag shows helpful usage guidance
- ✅ All existing CLI tests continue to pass (backward compatibility)

## Future Plans

### Short-term (Post-Grant Completion)

**Maintenance & Support:**

- Actively monitor GitHub issues and Discord for encryption-related questions
- Provide timely bug fixes and security patches
- Respond to community feedback within 24-48 hours

**Documentation Enhancement:**

- Write blog post: "Privacy by Default: Encrypting Your DDC Data"
- Develop best practices guide for key management
- Add interactive encryption examples to online playground demo

**Community Engagement:**

- Participate in Cere Discord #developers channel
- Help onboard new developers to encryption features
- Collect feedback for future improvements

### Medium-term Enhancements

**Additional Cipher Algorithms:**

- **ChaCha20-Poly1305**: Modern AEAD cipher for high-performance encryption
- **ECIES**: Elliptic Curve Integrated Encryption Scheme for asymmetric encryption
- **Hybrid Encryption**: Combine ECIES for key exchange + AES-GCM for data encryption

**Key Management Improvements:**

- **BIP39 Integration**: Derive encryption keys from mnemonic phrases
- **Hardware Wallet Support**: Integrate with Ledger/Trezor for key security
- **Key Rotation**: Implement secure key rotation without data re-encryption
- **Multi-Key Support**: Enable different keys for different buckets

**Performance Optimization:**

- Benchmark encryption/decryption throughput for large files (GB+)
- Implement streaming encryption for memory efficiency
- Optimize browser crypto operations with Web Workers
- Add encryption progress indicators for large uploads

### Long-term Vision

**Continued Ecosystem Contribution:**

- Take on additional Cere grants (smart contract integrations, analytics tools)
- Contribute to DDC SDK roadmap discussions
- Mentor new contributors interested in security features

**Privacy-Focused dApps:**

- Build production dApps showcasing Cere DDC encryption capabilities
- Develop reference implementations for common use cases (private file sharing, encrypted messaging)
- Explore integration with privacy protocols (zero-knowledge proofs, MPC)

**Knowledge Sharing:**

- Speak at Web3 conferences about privacy-preserving decentralized storage
- Write technical articles on encryption best practices in Web3
- Create open-source encryption templates for common dApp patterns
- Contribute to Web3 security education initiatives

---

## Preferred method of funds delivery

**USDC on Ethereum Mainnet**

- Address: 0x64D13a03D7f37c3d0a3F92e7633b6fB889F9824d

## Additional Information

### Why I'm Excited About This Project

Built-in encryption is **fundamental to Web3's promise** of user-owned, private data. Unlike centralized cloud providers who can access user data at will, Cere DDC empowers users with true data sovereignty—but only if encryption is accessible and foolproof.

By making encryption a **seamless, default feature** of the DDC SDK, we:

1. **Eliminate security footguns** - Developers can't accidentally ship unencrypted sensitive data
2. **Reduce barrier to entry** - No specialized cryptography knowledge required
3. **Enable new use cases** - Private healthcare records, confidential business documents, encrypted AI datasets
4. **Strengthen competitive positioning** - "Privacy by default" becomes a core Cere differentiator

This project directly aligns with my passion for **building developer tools that make Web3 more accessible** while maintaining the highest security standards.

### Timeline Transparency

The RFP suggests Milestone 1 can be completed in **1 dev-day**. While I'm confident in my implementation skills, I've allocated **2 days** for Milestone 1 to ensure:

1. **Thorough NIST Test Vector Validation** - Testing against official test vectors takes time to implement correctly
2. **Comprehensive Edge Case Testing** - Bad keys, tampered ciphertext, large files, etc.
3. **High-Quality Documentation** - Clear examples and usage guides for developers
4. **Code Review Buffer** - Time to iterate based on Cere maintainer feedback

This realistic, quality-first approach ensures delivery of production-ready, secure code rather than rushing to meet an aggressive deadline and introducing security vulnerabilities.

**Overall, the 9-10 day timeline** (2 + 4 + 3 days) is achievable while maintaining the highest quality standards expected from a cryptographic implementation.

---

**Questions?** Feel free to reach out via:

- 📧 Email: emersondaniel300@gmail.com
- 💬 Discord: [Cere Contributor Discord](https://cere.network/discord)
- 🐙 GitHub: [@majormaxx](https://github.com/majormaxx)
