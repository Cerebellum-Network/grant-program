# RFP: AI Agent Challenge – Open Developer Track

## Summary

Unlike traditional setups, **Cere’s AI Stack allows developers to deploy an AI agent onto a live data stream in minutes**, without the need to:  
- Set up their own server.  
- Host and manage models themselves.  
- Build and maintain complex data pipelines.  
- Worry about scaling or security.  

This challenge provides developers with the opportunity to showcase how they would design agents that bring real-world value by leveraging Cere’s infrastructure.

Participants are expected to:
1. Select and deploy one or more models on Cere's DDC.  
2. Design and deploy one or more custom agents in a modular way.  
3. Link these agents into a complete **agentic workflow**.  
4. Document their proposal following the official template before starting any coding.  

⚠️ **Important**: Developers must submit and receive approval for their proposal before beginning implementation.

---

## Focus Areas

Proposals should focus on one of the following key areas:  

- **Image Diffusion** (entertainment, consumer apps, etc.)  
  - Data stream: images provided by users  

- **Enterprise Computer Vision** (security, maintenance, etc.)  
  - Data stream: video/images provided by drones  

- **Natural Language Processing (NLP)** (customer support, sentiment analysis, etc.)  
  - Data stream: text provided by users  

---

## Deliverables

Each submission must include the following, **before coding begins**:

1. **Proposal Document** (using the [Application Template](https://github.com/Cerebellum-Network/grant-program/blob/master/applications/application_template.md)) that clearly describes:  
   - The **use case**.  
   - The **agent flow structure** (how multiple agents interact).  
   - The **models** to be used (open source, preferably fine-tuned).  

2. **Technical Design**:  
   - **1 or more custom models**.  
   - **1 or more custom modular agents**, each running inference against those models.  
   - A complete **agentic workflow** that links these agents together.  

3. **Documentation & Submission**:  
   - Submit a complete proposal that describes the above clearly and in detail.  
   - The proposal must be approved by the Cere team before coding starts.  

---

## Quickstart Guide

The following steps outline how developers will eventually execute their approved proposal. These are included for reference and to help structure your submission.

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
     name: "BIC - Bren - Awesome Meme Generator Agent"
     description: "AI-powered filter that transforms selfies into web3 memes"
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

- **Civitai (model discovery)**: https://civitai.com/  
- **Hugging Face (model discovery)**: https://huggingface.co/  
- **Application Template**: https://github.com/Cerebellum-Network/grant-program/blob/master/applications/application_template.md  
- **Grant Program Guidelines**: https://github.com/Cerebellum-Network/grant-program/blob/master/README.md  
