# Built-in AES-256 Cipher for DDC SDK
## Proposal submitted to Cere Foundation on 25-12-17 by Tong Zhu

## Project Slug
If your application is using an existing RFP provided by Cere, please add the link here:  
[Existing RFP: AES-256 Built-in Cipher](https://github.com/Cerebellum-Network/grant-program/blob/master/request_for_proposals/rfp3/README.md)

## Abstract
This project implements a built-in AES-256 cipher for the Decentralized Data Cloud (DDC) SDK, providing developers with out-of-the-box encryption. Currently, developers must manually integrate a cipher, which adds complexity and potential security risks. This solution delivers strong, audited encryption by default, fully compatible with the existing NaclCipher API. It is implemented in TypeScript with zero external dependencies, and includes complete unit tests and documentation. Successful completion of Milestone 1 will allow integration into the Playerground and CLI, significantly enhancing developer experience and ensuring secure handling of user data.

## Team 🧑‍🤝‍🧑

> Tong Zhu (yes just me...)

### Team members

- Tong Zhu

### Contact

- **Contact Name:** Tong Zhu (call me "Ellen")  
- **Contact Email:** tongzhu233@gmail.com

### Team's experience

- TypeScript / Node.js development experience  
- Previous Web3 or open-source contributions
- 
### Team Code Repos

- https://github.com/TongZhu-Ellen

### Team LinkedIn Profiles (if available)

- N/A

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 2 days for Milestone 1  
- **Full-Time Equivalent (FTE):** 1 (solo developer)

### Milestone 1 — AES-256 Cipher Implementation

- **Estimated duration:** 2 days (as per RFP)  
- **FTE:** 1  

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 1 | AES256Cipher class | TypeScript implementation, zero external dependencies, mirrors NaclCipher API |
| 2 | Unit tests | Full round-trip coverage (happy path, bad key/iv, tampered ciphertext) |
| 3 | Plug-in registration | Export class from `@cere-ddc-sdk/core/src/cipher/` alongside NaclCipher |
| 4 | Documentation | Short “how to switch ciphers” snippet in `packages/core/README.md` |

### Milestone 2 — Integration & Additional Features

- **Estimated Duration:** 1 week  
- **FTE:** 1  
- Integrate AES256Cipher into Playerground & CLI  
- Optional: add advanced tests or CI checks

### Milestone 3 — Final Testing & Documentation

- **Estimated Duration:** 1 week  
- **FTE:** 1  
- Complete typedoc, finalize unit tests  
- Ensure compliance with Cere coding standards

## Future Plans

- Long-term maintenance will be self-funded and contributed back to the Cere SDK  
- Continuous improvement and bug fixes after initial integration  
- Promote the feature to the community via documentation and demos

## Preferred method of funds delivery

- USD/EUR Fiat or  
- USDC on Eth address: 0xcae9cb16967e0d4bb4b5e69bd0eec623bfb2c6d8

## Link to Logo image 1:1 (in github)

- ...


## Other Bio and details or thoughts, etc.

Please note that Milestone 2 and 3 specifics and timelines are not yet clearly defined by the Cere Grants Committee. The durations listed above for these milestones are estimates and will be finalized in collaboration with Cere upon successful completion of Milestone 1.


---
🛟 Questions? Ask in our [Contributor Discord](https://cere.network/discord) or write us at [community@cere.io](mailto:community@cere.io).
