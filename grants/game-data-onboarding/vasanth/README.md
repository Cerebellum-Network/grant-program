# Game Voice Chat Audio Onboarding
## Proposal submitted to Cere Foundation on Nov 14 2025 by Vasanth Pugalenthi


## Abstract
This proposal focuses on end-to-end game voice chat audio onboarding for game sessions and pushing it into an existing workspace, ensuring the existing workflow can process audio by converting it to text. The game data is simply onboarded and processed through existing Pipeline 3 in A6.


The system will:
- Record voice through a microphone
- Capture game data through a game API
- Transcribe voice audio before passing it on to the existing NLP framework (A6)
- Simulate live game sessions or replay via controlled input datasets using the testing framework (A6), which is already integrated with the Client SDK (A1)
- Leverage the existing Query Tool to extract results of the NLP processing (A8), which stores outputs in a Cubbie

## Team 🧑‍🤝‍🧑


### Team members

- Vasanth Pugalenthi (Team Leader)

### Contact

- **Contact Name:** Vasanth Pugalenthi
- **Contact Email:** vasanth.pugalen@gmail.com

### Team's experience

Vasanth Pugalenthi is a Computer Science major studying at Cal Poly San Luis Obispo. He has experience with audio processing, API integration, and working with existing frameworks and SDKs.


### Team Code Repos

- 
- 

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- VasPug

## Development Roadmap:


### Overview

- **Total Estimated Duration:** 2 days
- **Full-Time Equivalent (FTE):** 1 FTE

### Milestone 1 — E2E Data Onboarding Demo

- **Estimated duration:** 2 days
- **FTE:** 1

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 1 | Voice Recording System | A UI that records voice through a microphone during live Marvel Rival game sessions. Captures audio input and transcribes it using Whisper. |
| 2 | Testing Framework Integration | Simulate live game audio sessions or replay via transcribed audio data into Pipeline 3 using the testing framework (A6), which is already integrated with the Client SDK (A1). |
| 3 | Query Tool Integration | Leverage the existing Query Tool to extract results of the NLP processing (A8), which stores outputs in a Cubbie. Provides access to processed data for verification and testing. |
| 4 | Documentation | Basic documentation covering: how to run the system, required configurations, and credentials needed. Includes setup instructions and usage examples. |



## Preferred method of funds delivery
- USD/EUR Fiat 
