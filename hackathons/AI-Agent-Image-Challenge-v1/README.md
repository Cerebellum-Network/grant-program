# Cere AI Agent Image Challenge (Closed Beta)
This is your chance to be among the **first external developers** to build custom AI agents on our closed beta platform.

The goal: **create your own agent flow (image filter) that produces consistent results on par with ChatGPT**.

## 🎯 Challenge Overview

- Create & deploy a Computer Vision AI agent using Cere’s AI stack – Doing something fun, creative, and viral-ready. Be sure to design your agent in such a way that brand assets can be included (e.g. company logo or a mascot) to customize the experience.
- Each developer to deploy a fun AI Agent that can be used in our partner campaign will receive **$200 each**.  
- On top of that, if your AI Agent is used in the live partner campaign you can win a bonus! You’ll earn an **additional $100** each time a user wins by using your AI agent.

## 🏆 Prizes

1. **$200 each** for each successful AI Agent deployment 
2. **+ $100 bonus** for AI Agents that are used for winning submissions 

## ℹ️ How your agent will be used
![AI Image Challenge USER FLOW](https://cdn.ddcdragon.com/1312/baear4ig2due6ml6mstlpyssi5mee2ulzdam4fena3yolmmvdkixfaatq4u/bullish_image_challenge_flow_v2.png)

## 🤖 What You’ll Learn

In this guide you’ll learn how to:

- Deploy your own **Computer Vision (photo) AI agent** (≈ 15 minutes)  
- Deploy your own **custom model** (≈ 10 minutes)  

Some fun project ideas to get you started:

- Tattoo the project logo onto anyone  
- Put project logos on an image of a race car  
- Change the background into the company logo  
- Swap whatever print is on a T-shirt into the company logo  
- Take the face of 2 people and transform them into the *Stepbrothers* movie poster


## ✅ Pre-loaded models
- Stable Diffusion 1.5
- LLama 3
- MobileNet v2

👍🏻**You can load your own models as long as they fit our guidelines.**

---

## 🚀 Quickstart

This guide will help you deploy your first agent on the Cere AI Stack.

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

#### 2.3 Test Your Agent

1. Go to the Agent Registry
2. Filter on "own models"
3. Click on your model
4. Click on "Playground"
5. Run a first test

**Tip:** the output of the image models is a BASE64 image. You can quickly convert it to a viewable format here: https://base64.guru/converter/decode/image.

---

### Step 3: Set Up Your Testing Environment (Telegram Channel)

#### 3.1 Create a New Telegram Group

1. Open Telegram  
2. Tap the menu (☰) → **New Group**  
3. Enter channel name (e.g., `Cere Image Challenge`)  
4. Click **Create**  

#### 3.2 Configure Group Settings

1. Tap the menu (☰) → **Manage group**  
2. Add a profile picture  
3. Click on **Group type** → change to **Public**  
4. Set your group name (e.g., `cereimagechallenge`)  

#### 3.3 Invite the Bot to Your Channel

1. Tap the menu (☰) → **Manage group**  
2. Click **Members → Add member** → add our bot (`STG Cere Media Bot` for staging, `Cere Media Bot` for production)  
3. Tap the menu (☰) → **Manage group**  
4. Click **Administrators → Add administrator** → add the bot again  
5. Remove all rights  

#### 3.4 Whitelist your channel

1. DM Bren on Telegram ([@nerbke](https://t.me/nerbke)) and ask him to whitelist your channel for the bot
2. Share the link to your channel with Bren
3. Wait for Bren to confirm your channel is whitelisted

#### 3.5 Verify Bot Access

1. Send `/help` command in the channel  
2. Bot should respond with instructions  
3. If bot doesn’t respond, check administrator permissions  

---

### Step 4: Concierge agent
Using the concierge agent you can trigger your agent(s) based on the Telegram data stream coming in through your bot.

1. Go to your organisation dashboard in ROB
2. Click on "Engagements"
3. Click & edit the "AI Image Agent challenge Engagement" that was prepared for you (if you don't see this, ask Bren on Discord ot make it)
4. Click on the "CONCIERGE AGENT" tab
5. Look for "// CHANGE THIS CODE TO YOUR BOT; in this example we use the faceSwapAgent" and replace the code with your agent(s)
6. Go to your Telegram channel and type "/fun" to invoke your agent flow

---

### Step 5: (Optional) Deploy Your Own Model

#### 5.1 Package a Model

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

#### 5.2 Upload Model to DDC

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

## 📋 Evaluation Criteria (to be finalized)

- ✅ Filter must be **fully functional**
- ✅ Fun/viral factor
- ✅ Results must be **consistent & comparable to ChatGPT-level quality**  
- ✅ Creative use of Cere AI Stack  

---

## 📅 Timeline

- Applications open: Wednesday Aug 20th 16:00 UTC  
- Submissions due:  Wednesday Sep 8th 23:00 UTC  
- Partner campaign kickoff: Sep 8th 12:00 UTC

---

## 💬 Support

- Discord: [@InvB](https://discord.gg/HtkRSgUCMB)
- Telegram: [@nerbke](https://t.me/nerbke)

---

## 📖 References

- [Cere Developer Console](https://stage.developer.console.cere.network/)  
- [Quickstart Guide PDF](./quickstart.pdf)  


---
