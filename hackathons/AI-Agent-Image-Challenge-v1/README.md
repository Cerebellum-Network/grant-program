# Cere AI Agent Image Challenge (Closed Beta)
This is your chance to learn how to build an AI agent that can immediatly be dropped into a user data stream!

The goal: **create your a fun AI Agent image filter that will be used by thousands of users**.

## 🎯 Challenge Overview

- Create & deploy a Computer Vision AI agent using Cere’s AI stack – Doing something fun, creative, and viral-ready. Be sure to design your agent in such a way that brand assets can be included (e.g. company logo or a mascot) to customize the experience.
- Every developer that succesfully launches an AI agent that meets the quality requirements will receive **$200**.  
- On top of that, your agent will be used during our partner campaign and you’ll earn an **additional $100** each time a user wins by using your AI agent!
- **Limited slots are available, so be quick to sign up!**


**Can't wait to start?** Apply for access: [Noteforms Application](https://noteforms.com/forms/bullish-image-challenge-ajxsbr)  

## 🏆 Prizes

1. **$200 Bounty** for launching your AI agent 
2. **+ $100 bonus** for **EACH** time your AI Agent was used in a winning submission in our partner campaign 🔥

3. ## 🧾 Requirements 
1. Experience with fine-tuning CFG/samplers
2. Basic understanding the diffusion workflow
3. Understanding of key concepts like VAE, LoRA, Checkpoints and ControlNets

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
- Stable Diffusion 1.0 (SDXL)
- Stable Diffustion InPainting + IP Adapter
- Llama 3.2 Vision 11 B
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

### Step 2: Set Up Your Testing Environment (Telegram Channel)

#### 2.1 Create a New Telegram Group

1. Open Telegram  
2. Tap the menu (☰) → **New Group**  
3. Enter channel name (e.g., `Cere Image Challenge`)  
4. Click **Create**  

#### 2.2 Configure Group Settings

1. Tap the menu (☰) → **Manage group**  
2. Add a profile picture  
3. Click on **Group type** → change to **Public**  
4. Set your group name (e.g., `cereimagechallenge`)  

#### 2.3 Invite the Bot to Your Channel

1. Tap the menu (☰) → **Manage group**  
2. Click **Members → Add member** → add our bot (`STG Cere Media Bot` for staging, `Cere Media Bot` for production)  
3. Tap the menu (☰) → **Manage group**  
4. Click **Administrators → Add administrator** → add the bot again  
5. Remove all rights  

#### 2.4 Whitelist your channel

1. DM Bren on Telegram ([@nerbke](https://t.me/nerbke)) and ask him to whitelist your channel for the bot
2. Share the link to your channel with Bren
3. Wait for Bren to confirm your channel is whitelisted

#### 2.5 Verify Bot Access

1. Send `/help` command in the channel  
2. Bot should respond with instructions  
3. If bot doesn’t respond, check administrator permissions  

---

### Step 3: Deploy Your First Agent

#### 3.1 Choose Your Model

1. Navigate to [ROB Platform](https://rob.stage.cere.io/) 
2. Login via email  (use the e-mail you signed up with)
3. Go to **Model Registry**  
4. Select the model you want to use  
5. Click on **Quickstart**  
6. Copy the code & save it somewhere (e.g. in a text file)
7. Close **Model Registry**  

#### 3.2 Create Your Agent

1. Go to **Agent Registry**  
2. Click **Create Agent**  
3. Select **Programmable Agent**  
4. Configure details (example):
   ```
     name: "Smart Photo Filter",
     description: "AI-powered filter that transforms selfies into mascot PFPs"
   ```
5. Skip tools setup (not supported yet)  
6. Add task
7. Copy & paste the **Quickstart code** you copied earlier from the model registry
8. Review & submit your agent  

#### 3.3 Test Your Agent

1. Go to your test Telegram channel
2. Run the `/fun` command
3. Reply to the bot by submitting/attaching an image
4. Your AI agent will return a processed result to the bot which will share it in the Telegram channel

---

### Step 4: (Optional) Deploy Your Own Model

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

## 📋 Evaluation Criteria (to be finalized)

- ✅ Filter must be **fully functional**
- ✅ Fun/viral factor
- ✅ Results must be **consistent & comparable to ChatGPT-level quality**  
- ✅ Creative use of Cere AI Stack  

---

## 📅 Timeline

- Applications open: Wednesday Aug 20th 16:00 UTC  
- Submissions due:  Wednesday Aug 27th 23:00 UTC  
- Partner campaign kickoff: Sep 3rd 12:00 UTC

---

## 💬 Support

- Discord: [@InvB](https://discord.gg/HtkRSgUCMB)
- Telegram: [@nerbke](https://t.me/nerbke)

---

## 📖 References

- [Cere Developer Console](https://stage.developer.console.cere.network/)  
- [Quickstart Guide PDF](./quickstart.pdf)  


---
