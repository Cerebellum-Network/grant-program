# Game Analysis Pipeline
## Proposal submitted to Cere Foundation on Nov 14 2025 by Vasanth Pugalenthi


## Abstract
The Game Analysis Pipeline is an end-to-end system that analyzes gameplay audio transcripts to discover semantic topics and correlate them with game events. The pipeline transcribes audio files into text segments using Whisper, processes transcripts by batching them into messages, filtering for quality, and grouping into threads. It then uses HDBSCAN clustering on embeddings to discover semantic topics from gameplay commentary. The system enriches audio transcripts with game events (kills, deaths, match events) within time windows and stores messages, topics, and game events in RedisGraph for querying.

The architecture consists of modular components: Audio Ingestion handles transcription requests and creates message batches, Concierge orchestrates message processing and topic discovery, Enrichment correlates audio batches with game events, and Storage/Query interfaces manage RedisGraph operations. The pipeline integrates with existing gameplay capture systems and visualization tools to provide a complete analysis workflow. This enables deeper insights into player behavior, commentary patterns, and the relationship between gameplay events and player communication.

## Team 🧑‍🤝‍🧑

> [!IMPORTANT]
> Please note that the data provided in this section is for administrative and informational purposes only.

### Team members

- Vasanth Pugalenthi (Team Leader)

### Contact

- **Contact Name:** Vasanth Pugalenthi
- **Contact Email:** vasanth.pugalen@gmail.com

### Team's experience

Vasanth Pugalenthi is a Computer Science major studying at Cal Poly San Luis Obispo. He has developed the Game Analysis Pipeline, a comprehensive system that processes gameplay audio transcripts and correlates them with game events. The project demonstrates expertise in audio processing (Whisper transcription), NLP (topic discovery via HDBSCAN clustering), graph databases (RedisGraph), and distributed systems architecture.

The pipeline integrates seamlessly with existing gameplay capture systems and includes automated testing, Docker-based deployment, and query interfaces for data analysis. The modular architecture showcases experience in building production-ready data processing systems.

If anyone on your team has applied for a grant at the Web3 Foundation previously, please list the name of the project and legal entity here.

### Team Code Repos

- https://github.com/gharibyan/nlp-processor-lab/pull/4
- https://github.com/VasPug/NLPDevdemo

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- VasPug

## Development Roadmap :nut_and_bolt:

This section should break the development roadmap down into milestones and deliverables. Since these will be part of the agreement, it helps to describe *the functionality we should expect in as much detail as possible*, plus how we can verify and test that functionality. Whenever milestones are delivered, we refer to this document to ensure that everything has been delivered as expected.


> [!CAUTION]
> If any of your deliverables are based on somebody else's work, make sure you work and publish *under the terms of the license* of the respective project and that you **highlight this fact in your milestone documentation** and in the source code if applicable! **Projects that submit other people's work without proper attribution will be immediately terminated.**

### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):** 1 FTE

### Milestone 1 — Core Audio Processing & Transcription

- **Estimated duration:** 1 month
- **FTE:** 1

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 1 | Audio Ingestion System | Complete audio transcription pipeline using Whisper. Handles audio file segmentation, creates message batches, and stores transcribed text segments. Includes error handling and batch processing capabilities. |
| 2 | Message Processing & Filtering | Concierge service that batches transcripts into messages, filters for quality, and groups messages into threads. Includes configurable filtering criteria and thread detection algorithms. |
| 3 | Docker Setup & Infrastructure | Docker Compose configuration for Redis and Postgres services. Automated service startup scripts and health checks. |

### Milestone 2 — Topic Discovery & Clustering

- **Estimated Duration:** 1 month
- **FTE:** 1

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 1 | Topic Discovery Engine | HDBSCAN clustering implementation on text embeddings to discover semantic topics from gameplay commentary. Includes embedding generation, clustering parameters, and topic labeling. |
| 2 | Storage Layer | RedisGraph storage implementation for messages and topics (raftStorage.ts, raftMerge.ts). Includes graph schema definition, node/relationship creation, and data persistence. |
| 3 | Query Interface | Basic query interfaces for retrieving messages and topics from RedisGraph. Includes Cypher query examples and result formatting. |

### Milestone 3 — Game Event Correlation & Integration

- **Estimated Duration:** 1 month
- **FTE:** 1

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 1 | Game Event Enrichment | Enrichment service (enrichAudioBatchesWithGameEvents.ts) that correlates audio batches with game events (kills, deaths, match events) within time windows. Includes temporal correlation algorithms and event matching logic. |
| 2 | Advanced Query System | Enhanced query interfaces (queryGameEvents.ts, queryMergedGraph.ts) for querying game events and merged graph data. Supports complex Cypher queries via HTTP API. |
| 3 | Integration Testing & Documentation | Complete test suite (test-cypher-queries.ts), automated testing script (run-full-test.sh), and comprehensive documentation. Includes integration tests for the full pipeline workflow. |



## Preferred method of funds delivery
- USD/EUR Fiat 


## Other Bio and details or thoughts, etc.

This Game Analysis Pipeline represents a practical application of NLP and graph database technologies to the gaming domain. The system demonstrates how semantic analysis of player commentary can reveal insights into gameplay patterns and player experiences. As a Computer Science student at Cal Poly SLO, this project showcases hands-on experience with modern software engineering practices, including containerization, graph databases, and data processing pipelines.

---
🛟 Questions? Ask in our [Contributor Discord](https://cere.network/discord) or write us at [community@cere.io](mailto:community@cere.io).
