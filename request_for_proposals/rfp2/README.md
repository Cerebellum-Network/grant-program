This document outlines the details of the program, including its objectives, challenges, proposed solutions, deliverables, and resources. Below is the index for easy navigation:

## 📚 Index

1. [Introduction 🌟](#introduction-)
2. [Objective 🎯](#objective-)
3. [Key Concepts/Keywords 📝](#key-conceptkeywords-)
4. [Existing System ⚙️](#existing-system-)
5. [Deliverables 📦](#deliverables-)
6. [Quick Start Guide 🚀](#quick-start-guide-)
7. [Resources 📚](#resources-)

---

## Introduction 🌟

In this challenge, you’ll contribute to the heart of Cere’s Developer toolkit: the DDC SDK. Using this SDK, developers interact with Cere’s decentralized data cloud (DDC).

**Problem:**

- Data is currently stored “as is”. This means developers are responsible for encrypting content before uploading if they feel it’s important.
- Preserving data privacy is important and Cere Network wants to make it as easy as possible for developers to do so.

**Proposed Solution:**

1. Integrate a new functionality into the DDC SDK that allows to encrypt data using one or more encryption algorithms  
   a. Both encryption & decryption will happen on the client side  
   b. Secure key management is outside the scope  
2. Integrate this new functionality into Cere Network’s tooling  
   a. There is a Cere Developer Console component where this processing option can be invoked.  
   b. The same functionality should also be available in the CLI  
   c. Both integrations should work using the Cere Wallet  

---

## Objective 🎯

- **Built-in data privacy**
  - Enhance the DDC SDK by introducing built-in encryption capabilities, enabling automatic encryption during uploads and decryption during downloads.
- **Privacy by default**
  - Making encryption the default option in both the CLI and Cere Developer Console will ensure all dApps built on Cere Network are safe & secure.

---

## Key Concepts/Keywords 📝

1. **DDC (Decentralized Data Cluster):** Blockchain-based storage solution.
2. **Cere Developer Console:** A user-friendly tool, designed to onboard App Developers to the Cluster (Cere’s Decentralized Data Cloud Cluster). This self-service platform, supported by robust smart contracts, enables DDC Clusters to deliver high-powered, automated data cloud operations tailored to developers' needs.
3. **DDC SDK:** A development kit used by developers to create applications that interact with the CERE infrastructure. It provides a set of modules and methods that allow seamless integration with the Cerebellum Network's decentralized data cloud (DDC).
4. **Storage Node:** A fundamental component of the DDC that enables storing, reading, and searching data, like objects, files, and documents within the Cere Network.
5. **CID:** Content Identifier, based on the content’s cryptographic hash label used to point to material. It doesn't indicate where the content is stored, but it forms an address based on the content itself. CIDs are short, regardless of the size of their underlying content.
6. **Piece:** An abstraction that signifies a unit of data stored in the DDC. It doesn't have a fixed size and can represent fully logically complete data or a part of it.
7. **CNS:** Content Name System to associate CIDs with human-readable names.
8. **DAG:** Directed Acyclic Graph stored on DDC is used to establish data relationships between different pieces of data.
9. **Cere Wallet:** Provides all the basic functionality of any wallet, such as creating, importing and funding accounts, viewing account balances and NFTs, signing transactions, and includes custom functionality to support interaction with Cere’s DDC and Mainnet Blockchain.

---

## Existing System ⚙️

<image>

The SDK provides several modules. The DDC Client module acts as an entry point and offers a concise API for straightforward use cases, like creating a bucket or uploading/downloading a file. Additional modules present more advanced APIs that provide enough flexibility for other SDKs to be built on top of the DDC SD

<image>

The diagram above illustrates the role of the DDC SDK as a general-purpose system component. It is used in a variety of cases, such as CerePlay, the NFT Marketplace, and it operates behind the scenes in Media and Game SDKs.

<image>

The Cere Developer Console is a user-friendly tool, designed to onboard App Developers to the Cluster (Cere’s Decentralized Data Cloud Cluster). This self-service platform, supported by robust smart contracts, enables DDC Clusters to deliver high-powered, automated data cloud operations tailored to developers' needs. This package by default suggests to devs the following options:
1. Seamless developer onboarding and account set up+top up
2. Bucket creation and management
3. DDC file uploader and explorer widget
4. Basic analytics of usage and payments

---

## Deliverables 🥡

1. **Modified DDC SDK** with a configuration-based encryption that supports secure encryption algorithms (e.g., AES, ChaCha20, or another suitable method). Users should be able to enable encryption by passing a simple configuration option when initializing the SDK.
2. **Modified DDC SDK playground** showcasing the encryption and decryption.
3. **Modified DDC SDK documentation and examples** explaining how to use the new encryption functionality.
4. **Modified DDC CLI** with the ability to encrypt content before upload and decrypt content after download (the same upload/download commands but with optional encryption parameter).
5. **Modified Developer Console** that allows users to optionally encrypt/decrypt content. One of the options is to use Cere Wallet’s embedded encryption feature (see Tools & Resources section in WIKI for more details).

---

## Quick Start Guide 🚀

### 1. Setup environment

- Clone GitHub repository: [`cere-ddc-sdk-js`](#)
- Download and install Node.js **v18.17.1**  
  [Node.js – Download Node.js](https://nodejs.org/)

### 2. Run DDC SDK Playground

1. **Install dependencies:**
    ```bash
    npm i
    ```
2. **Build packages and playground application**
    ```bash
    npm run build
    ```
3. **Run playground application**
    ```bash
    npm run playground
    ```
4. **Open** [http://localhost:5174/](http://localhost:5174/)
    - You should be able to see this page.

5. **Upload file to test how it’s working**
    - **Step 1** - Keep default Seed phrase as is and click `Continue` button
    - **Step 2** - Select `Testnet` and click `Continue` button
    - **Step 3** - Click `Skip`
    - **Step 4** - Keep default Cluster (`0x825...`) and use existing bucket `573062`
    - **Step 5** - Click `Skip`
    - **Step 6** - Select file on your local file system you would like to upload and click `Continue`
    - **Step 7** - Click a blue link to download a file
	
---

### 3. Start coding

#### Extend `DdcClient` (cipher option)

1. **Define Cipher interface** and put it next to Signer package here: [`cere-ddc-sdk-js/packages/blockchain/src/Signer`](#)
    > 💡 The interface can be as simple as:
    ```typescript
    export interface Cipher {
      encrypt(data: Uint8Array): Promise;
      decrypt(encryptedData: Uint8Array): Promise;
    }
    ```
2. **Extend `DdcClient` constructor** (link) to accept optional Cipher (interface) parameter.
3. **Intercept store (link) and read (link) methods** (for file only, don’t care about `DagNode`) to invoke Cipher (in case it has been passed on `DdcClient` initialisation) to encrypt/decrypt a file.

---


Here’s your content from the screenshots, converted to GitHub-flavored Markdown with correct formatting for code, links, and emphasis. You can copy-paste this directly into your README.md.

---

## Extend Playground to Showcase Encryption

1. **Add a simple/demo Cipher implementation.**  
   E.g. use XOR byte operation to convert data.

   
   Example

   

   

2. **Update playground**
   - Add **Encrypt** step where you can enable or disable encryption (checkbox) and put `Data encryption key` (if encryption checkbox enabled).
   - Add **Download & Decrypt** button to last step. So that you can either use a direct link (blue) to download file as is (encrypted), or decrypt it after download.

3. **Test encryption feature**
   - Create a file that contains `Hello world!`.
   - Upload it via Playground and use encryption.
   - Show that file has been encrypted (download it via direct link).
   - Download original file (by clicking Download & Decrypt button).

---

## Extend DDC CLI to Showcase Encryption

DDC CLI provides a flexible set of commands for developers to help with setting up a DDC account, upload/download files and more. It’s implemented as a separate package inside DDC SDK that uses the same codebase.

Try out DDC CLI before any code changes:

1. **Install `ddc-cli` package**
    ```bash
    npm install -g @cere-ddc-sdk/cli
    ```
2. **Install `npx`**
    ```bash
    npm install -g npx
    ```
3. Put any file you would like to upload to the same directory from where you execute commands.
4. **Upload file**
    ```bash
    npx @cere-ddc-sdk/cli upload ./hello-world.txt network=testnet --signer="hybrid la..."
    ```
5. More details and examples you can find here: [README.md](#) and [Cerebellum-Network/cere-ddc-sdk-js](#).

---

## Extend Upload and Download Commands

1. Use simple Cipher implementation (see the item 1 in Extend Playground section).
2. Update client initialisation and extend `CreateClientOptions` with parameters you need for encryption (e.g. `encrypt` flag true/false or `encryption-key` as a string).
3. Update upload command.
4. Update download command.
5. **Test encryption feature**
    - Create a file that contains `Hello world!`.
    - Upload it via DDC CLI and use encryption.
    - Show that file has been encrypted (download it via `download` command but without encryption parameters).
    - Download original file (use `download` command and pass encryption parameters).

---

## Resources 📚

Here’s your **Resources** section, formatted for GitHub-flavored Markdown with direct links and clear structure:

---

## Resources 📚

- **Dev Console:** [GitHub Link](https://github.com/Cerebellum-Network/cluster-apps)
- **Cere Wallet Client:** [GitHub Link](https://github.com/cere-io/cere-wallet-client)
- **Cere Wallet SDK:** [GitHub Link](https://github.com/cere-io/cere-wallet-client/tree/dev/packages/embed-wallet)
- **Cere Wallet API:** [GitHub Link](https://github.com/cere-io/cere-wallet-api)
- **DDC SDK:** [GitHub Link](https://github.com/Cerebellum-Network/cere-ddc-sdk-js/)

**Testnet Details:**
- **Developer Console:** [https://stage.developer.console.cere.network/](https://stage.developer.console.cere.network/)
- **Cere Wallet:** [https://wallet.stg.cere.io/wallet/home](https://wallet.stg.cere.io/wallet/home)


