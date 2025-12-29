# BIC - Param Singh - The On-Chain Hero: Dynamic Rarity Action Figure Agent

- **Proposer:** Param Singh
- **Payment Address:** 0x5A43a975a632a77828BF9659F1f09Aa53C99C4B9
- **Contact Email:** paramsingh1810@gmail.com
- **Project Slug:** [PR Link]

## Abstract

The "On-Chain Hero" is a sophisticated AI Agent that transforms user selfies into high-fidelity, 3D-modeled digital action figures housed in branded, interactive collector boxes. Leveraging my experience in optimizing Deep Learning models and real-time inference, this agent performs two distinct tasks:

1.  **Visual Feature Analysis:** Using a lightweight classification model (like MobileNet v2) to detect user attributes (e.g., "Developer," "Creator," "Explorer").
2.  **Generative Transformation:** Applying Stable Diffusion 1.5 with custom-trained LoRAs and ControlNet to render the user as a high-quality vinyl figure within a branded box template featuring the Cere Network logo.

The agent is "viral-ready" because it generates a unique "Rarity Score" for every user, encouraging social sharing and competition during partner campaigns.

## Team 🧑‍🤝‍🧑

- **Team Leader:** Param Singh
- **Contact Email:** paramsingh1810@gmail.com
- **GitHub Profile:** [ParamSingh24](https://github.com/ParamSingh24)

### Team's Experience

-   **SciPy Contributor:** Successfully rectified mathematical inconsistencies in the `sparse.linalg.eigsh` documentation (**PR #18214**), proving a deep understanding of low-level mathematical operator definitions.
-   **Hackathon Champion:** 1st Place Winner of Hackathon 2025 (BBD University) and Winner of "AI and Robotics for Disaster Management" by WUST.
-   **MLE & Full Stack Expert:** Experienced in architecting end-to-end ML pipelines for IoT and enterprise workflows, ensuring seamless frontend-backend integration.
-   **Academic Excellence:** B.Tech in CSE (AI) with a 9.33 CGPA, consistently on the Dean’s List.

## Technical Specification

-   **Agent Logic:** Built using Python and PyTorch, the agent will ingest a photo, run a feature-detection pass, and dynamically construct a prompt (e.g., "A legendary developer action figure in a Cere-branded neon box").
-   **Diffusion Pipeline:** Uses Stable Diffusion 1.5 + styled LoRA (for plastic texture) + ControlNet Canny/Depth (to preserve facial structure and box geometry).
-   **Data Sovereignty:** All inference and model assets will be managed via Cere’s Decentralized Data Clusters (DDC), ensuring user data privacy—a key differentiator for this project.

## Development Roadmap 🔩

- **Total Estimated Duration:** 1 Month
- **Full-Time Equivalent (FTE):** 1

### Milestone 1 — Logic & Model Preparation
- **Duration:** 2 Weeks
- **Deliverables:**
    -   **Feature Analysis Script:** A Python module using OpenCV/PyTorch to identify user "traits" for rarity assignment.
    -   **LoRA Training:** Fine-tuning a style model for the "Collectible Toy" aesthetic.
    -   **Branded Templates:** Designing the 3D-style box featuring the Cere logo and partner slots.

### Milestone 2 — Cere Stack Integration & Deployment
- **Duration:** 2 Weeks
- **Deliverables:**
    -   **DDC Content Storage:** Uploading model weights to Cere DDC and configuring the Model Registry.
    -   **Telegram/Discord Integration:** Deploying the agent as a programmable unit that responds to the `/fun` command in whitelisted partner channels.
    -   **Quality QA:** Ensuring results meet "ChatGPT-level quality" and consistent branding.

## Future Plans

-   **Dynamic Metadata:** Long-term, I plan to integrate the rarity scores as on-chain metadata for users to mint their action figures as NFTs.
-   **Monetization:** Utilizing the $100 "per-win" bonus structure to fund continuous updates for new partner-specific box designs.
