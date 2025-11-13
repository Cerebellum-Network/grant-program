## 🚨🚨 THIS RFP IS CLOSED - no winning proposal submitted / RFP is restructured into RFP6 and 7 🚨🚨
🚨 **Reminder: Review the Contribution Guidelines!** 🚨

Before submitting your proposal, please make sure to carefully review the [Contribution Guidelines](https://github.com/Cerebellum-Network/grant-program/blob/master/README.md). ✅

# RFP: AI Agent Flow – Game Sessions Analysis

## Summary

We invite proposals for the development and deployment of a **multi-agent system** that analyzes game session data (events and chat) to identify key player states: **Progression, Fun, and Frustration**. The system will demonstrate the orchestration of multiple AI agents (via Raft, EventRelay, and compatible frameworks) collaborating to produce structured insights about player experience.

---

## Scope of Work 

The primary objective is to **deploy multi-agents within our system** to:  
1. Ingest raw game event logs and track player **Progression State**.  
2. Calculate **Progression Rate** (e.g., levels per hour).  
3. Process chat data (text + transcribed voice) to detect **Toxicity** and **Collaborative/Joyful Language**.  
4. Identify frustration "moments" where low progression immediately precedes high toxicity.  
5. Detect sustained **Flow States** (high progression without major sentiment change).  
6. Coordinate outputs across agents into a **session summary report**.

---

## Suggested Multi-Agent Functionality

### Agent 1 – Game Event Ingestion & Progression
- Ingests raw game event logs.  
- Maintains a player’s **Progression State**.  
- Computes a **Progression Rate** metric (e.g., “Levels per Hour”).  

### Agent 2 – Chat Processing
- Processes chat (text + transcribed voice).  
- Outputs:  
  - **Toxicity Score** (frustration proxy).  
  - **Collaborative/Joyful Language Score** (fun proxy).  

### Agent 3 – Frustration Detector
- Cross-references **Progression Rate** and **Toxicity Score**.  
- Identifies **frustration moments** when low progression directly precedes spikes in toxicity.  
- Outputs time windows + relevant game events.  

### Agent 4 – Flow State Detector
- Identifies periods of **sustained high progression** without major sentiment changes.  
- Outputs start/end times for detected **Flow States**.  

### Agent 5 – Coordinator
- Orchestrates across all agents.  
- Produces the **final session report**, including:  
  - **Total Time**  
  - **Final Progression State**  
  - **Top 3 Frustration Moments**  
  - **Total Flow State Duration**
 
---

## Input Data

- **Game Event Logs**: Structured event records (e.g., “Level Cleared”, “Item Acquired”, “Death”).  
- **Chat Data**: In-game text messages and transcribed voice chat.  

---

## Deliverables

- **Multi-agent pipeline implementation** (open-sourced under compatible license).  
- **Session summary report generator** producing outputs such as:  
  - **Total Time**  
  - **Final Progression State**  
  - **Top 3 Frustration Moments**  
  - **Total Flow State Duration**  
- **Demo/test UI page** for visualization of results.  
- **Sample processed outputs** from provided session data.  
- **Documentation** describing agent architecture & agent interactions.  

---

## Evaluation Criteria

- **Technical Completeness**: Robustness of agents 
- **Accuracy**: Fidelity of progression metrics, sentiment detection, and frustration/flow identification.  
- **Integration**: Ability of agents to share data via Raft.  
- **Usability**: Clarity of structured outputs and UI display.  
- **Extensibility**: Ease of adding new agents or extending the workflow to more data sources.  

---

## 📬 Current Applications

| Team                  | #PR  | Status  |
|-----------------------|------|---------|
| _No applications yet_ |      |         |

---

## Quickstart Guide

### Step 1: Prerequisites

1. Apply for access: [Noteforms Application](https://noteforms.com/forms/bullish-image-challenge-ajxsbr)  
   ⏱ Please allow up to **48h** for confirmation.  
2. Upon approval, you’ll receive:
   - Closed beta access to the Cere AI Stack
   - Access to a private Discord channel  
3. If you have issues, reach out to **Bren** on Telegram: [@nerbke](https://t.me/nerbke) or Discord: [@InvB](https://discord.gg/HtkRSgUCMB)

---

### Step 2: Deploy Your First Agent

#### 2.1 Choose Your Model

1. Navigate to [ROB Platform](https://rob.stage.cere.io/) 
2. Login via email  (use the e-mail you signed up with)
3. Go to **Model Registry**  
4. Select the model you want to use  
5. Click on **Quickstart**  
6. Copy the code & save it somewhere (e.g. in a text file)
7. Close **Model Registry**  

#### 2.2 Create Your Agent

1. Go to **Agent Registry**  
2. Click **Create Agent**  
3. Select **Programmable Agent**  
4. Configure details - make sure you follow this naming format: "BIC - your name - your agent name"
   ```
    name: "CSC - Alice - Call Sentiment Analyzer"
    description: "Multi-agent pipeline for speech-to-text, semantic context building, and sentiment analysis"

   ```
5. Skip tools setup 
6. Add task
7. Copy & paste the **Quickstart code** you copied earlier from the model registry
8. Review & submit your agent
9. IMPORTANT: ask the admin (eg Bren on Discord) to deploy your agent into the datastream

#### 2.3 Test Your Agent in Playground

1. Go to the Agent Registry
2. Filter on "own models"
3. Click on your model
4. Click on "Playground"
5. Run a first test

---

### Step 3: Concierge agent
Using the concierge agent you can trigger your agent(s) based on the Telegram data stream coming in through your bot.

1. Go to your organisation dashboard in ROB
2. Click on "Engagements"
3. Click & edit the "AI Image Agent challenge Engagement" that was prepared for you (if you don't see this, ask Bren on Discord ot make it)
4. Click on the "CONCIERGE AGENT" tab
5. Look for "// CHANGE THIS CODE TO YOUR BOT; in this example we use the faceSwapAgent" and replace the code with your agent(s)
6. Go to your Telegram channel and type "/fun" to invoke your agent flow

---

### Step 4: Deploy Your Own Model

#### 4.1 Package a Model

Example using HuggingFace MobileNetV2:

```bash
brew install git-lfs
git lfs install
git clone https://huggingface.co/google/mobilenet_v2_1.0_224
cd mobilenet_v2_1.0_224
zip -r ../mobilenet_v2_cv.zip .
cd ..
```

💡 **Note:** Most HuggingFace models should be supported by Model Runtime. If a model doesn’t work, let us know and we’ll extend runtime support.

Result: you now have `mobilenet_v2_cv.zip` (~14MB) ready for upload.

#### 4.2 Upload Model to DDC

1. Go to: [Cere Developer Console](https://stage.developer.console.cere.network/)  
2. Sign up with your e-mail  
3. Go to **Account**  
4. Click **Top Up**  
5. Copy your **Cere Wallet Address**  
6. Request tokens in Discord and tag **@InvB** (provide your public address)  
7. Once received, use 40 tokens to top up your account  
8. Confirm  
9. Go to **Content Storage** → **Create New Bucket**  
10. Click **Upload File** (upload your model archive)  

After upload, you’ll get a model link like:

```text
https://cdn.ddc-dragon.com/1317/baear4ibdfxtw6zvhlbr37i4sobqvo4qheiee37hwj2gtnuvgwzi5aol
fte/mobilenet_v2_cv.zip
```

This link contains:

- **Bucket ID**: `1317`  
- **Path**: `baear4ibdfxtw6zvhlbr37i4sobqvo4qheiee37hwj2gtnuvgwzi5aolfte/mobilenet_v2_cv.zip`  

Keep these values — you’ll need them for inference.

#### 4.3 Run Your First Inference

Example inference request:

```bash
curl -X POST --location 'http://202.181.153.253:8000/inference' -H "Content-Type: application/json" -d '{
  "model": {
    "bucket": "1317",
    "path": "baear4ibdfxtw6zvhlbr37i4sobqvo4qheiee37hwj2gtnuvgwzi5aolfte/mobilenet_v2_cv.zip"
  },
  "input": {
    "type": "image",
    "link": "https://cdn.ddc-dragon.com/1317/.../dog.jpeg"
  },
  "options": {
    "model_type": "huggingface",
    "top_k": 3,
    "min_confidence": 0.0001
  }
}'
```

Expected response:

```json
{
  "output": [
    { "label": "golden retriever", "score": 0.77 },
    { "label": "Leonberg", "score": 0.06 },
    { "label": "Tibetan mastiff", "score": 0.02 }
  ],
  "metrics": {
    "inference_time": 0.0616
  }
}
```
---

## Resources

- **Application Template**: https://github.com/Cerebellum-Network/grant-program/blob/master/applications/application_template.md  
- **Grant Program Guidelines**: https://github.com/Cerebellum-Network/grant-program/blob/master/README.md  
