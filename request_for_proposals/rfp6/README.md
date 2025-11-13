🚨 **Reminder: Review the Contribution Guidelines!** 🚨

Before submitting your proposal, please make sure to carefully review the [Contribution Guidelines](https://github.com/Cerebellum-Network/grant-program/blob/master/README.md). ✅
# Game Data Onboarding Demo Grant
**Goal:** Demonstrate onboarding of **game session data + voice** into an existing ROB stream, using **A6** ([testing framework](https://github.com/cere-io/nlp-processor-lab)) for capture and **A1** ([client SDK](https://github.com/cere-io/cere-activity-sdk/tree/main/packages/client)) for ingestion, and verify [NLP processing](https://cere.notion.site/NLP-Use-Case-Guide-27fd800083d680f7a383c7d029e9f4c0) via **Cubbie / Query Tool**.

**Out of scope:** UI/UX work, processing game data

---

## Deliverable
### **M1 – E2E Data Onboarding Demo**
- Create input datasets via live game sessions by:
  - Recording voice through a microphone  
  - Capturing game data through a game API
- Add a Speech-to-Text agent to the stream, transcribing voice audio before passing it on to the existing [NLP framework (A8)](https://cere.notion.site/NLP-Use-Case-Guide-27fd800083d680f7a383c7d029e9f4c0)
- Simulate live game sessions or replay via controlled **input datasets** using the [testing framework (A6)](https://github.com/cere-io/nlp-processor-lab), which is already integrated with the [Client SDK (A1)](https://github.com/cere-io/cere-activity-sdk/tree/main/packages/client)
- Leverage the existing [Query Tool](https://github.com/cere-io/NLPDevdemo/) to extract results of the [NLP processing (A8)](https://cere.notion.site/NLP-Use-Case-Guide-27fd800083d680f7a383c7d029e9f4c0), which stores outputs in a Cubbie
- Provide basic documentation: how to run, configs, credentials needed

### **Acceptance Criteria**
- Run the [CLI command](https://github.com/cere-io/nlp-processor-lab#event-replay-tool) from the [testing framework (A6)](https://github.com/cere-io/nlp-processor-lab) to ingest a given input dataset  
- Audio is transcribed and processed by the [NLP framework (A8)](https://www.notion.so/cere/NLP-Use-Case-Guide-27fd800083d680f7a383c7d029e9f4c0)  
- The session results are queryable using the [Query Tool](https://github.com/cere-io/NLPDevdemo/)

**Payment:** $500 **fixed**, payable on acceptance of PR

---

## Constraints & Interfaces
- Must use [**A6**](https://github.com/cere-io/nlp-processor-lab) for collection and [**A1**](https://github.com/cere-io/cere-activity-sdk/tree/main/packages/client) to push to the existing [**ROB**](https://rob.dev.cere.io/) stream (IDs/keys provided)
- The function of a Cubbie is emulated by a Postgres-based raft

---

## How to Submit

**Submit your proposal by** opening a PR adding a single file to:

```
grants/game-data-onboarding/<team>/README.md
```

Alternatively, use our standard template and adapt it for this grant:

```
applications/application_template.md
```

If you do, place the filled template at the same path.

---

## Resources
### Application Process
- **Application Template:** [application_template.md](https://github.com/Cerebellum-Network/grant-program/blob/master/applications/application_template.md)  
- **Grant Program Guidelines:** [README.md](https://github.com/Cerebellum-Network/grant-program/blob/master/README.md)

### Guides
- **NLP Framework Guide (A8):** [NLP Use Case Guide](https://cere.notion.site/NLP-Use-Case-Guide-27fd800083d680f7a383c7d029e9f4c0)  
- **Developer Guide (DRAFT):** [Notion link](https://www.notion.so/Developer-guide-DRAFT-296d800083d68058958afc0c8fb352ae?pvs=21)  
- **Integrator Guide:** [Notion link](https://www.notion.so/Integrator-Guide-2a0d800083d680b8a71deb5cedc7729a?pvs=21)

### Repositories
- **Local Testing Framework (A6):** [nlp-processor-lab](https://github.com/cere-io/nlp-processor-lab)  
- **Client SDK (A1):** [cere-activity-sdk](https://github.com/cere-io/cere-activity-sdk/tree/main/packages/client)  
- **Query Tool:** [NLPDevdemo](https://github.com/cere-io/NLPDevdemo/)

### Other
- **ROB (Devnet):** [https://rob.dev.cere.io/](https://rob.dev.cere.io/)
