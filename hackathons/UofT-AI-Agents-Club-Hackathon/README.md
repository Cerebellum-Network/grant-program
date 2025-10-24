# UofT AI Agents Club × Cere Network Mini‑Hackathon

> **For UofT AI Agents Club students only.** Build, test, and deploy a live AI agent on Cere’s ROB platform in hours — no servers, no pipelines, no infra headaches.

---

## Why this hackathon?

Learn the building blocks of modern, event‑driven AI apps: **Stream → Raft → Engagements → Agents**; and go from **idea → live deployment** fast. You’ll process **Telegram group data** in real time, index it, trigger agents, and ship something fun and useful that any student on the UofT campus can try out for themselves.

> After the hackathon you’ll keep access to ROB so you can create new Streams (e.g. Discord or X), spin up new agents (spam filter, support agent, rewards bot), and continue iterating. You'll also be ready to dive into paid bounties like [RFP4: Customer Service Calls Agent](https://github.com/Cerebellum-Network/grant-program/tree/master/request_for_proposals/rfp4) and [RFP5: AI Game Sessions Analysis](https://github.com/Cerebellum-Network/grant-program/tree/master/request_for_proposals/rfp5)

---

## Quickstart (0 → live)

1. **Sign up**
   Use the **UofT student email** on the [sign‑up form](https://noteforms.com/forms/bullish-image-challenge-ytl4yu) you receive from the club. We’ll provision access to **ROB** (Cere’s agent orchestration environment) to student accounts only.

2. **Create your Stream**
   Create a **Telegram Message Stream** in your workspace. This connects to the provided data service that publishes Telegram events.

3. **Add a Raft (Indexing)**
   Create a **Raft** for your stream to store & index messages. The Raft will emit events that **trigger agents**.

4. **Create agents**
   Author one or more agents (e.g., Filtering, Emoji, Embeddings, Clustering, Topic Naming, LLM Vision). **Always test each agent in the Playground** first.

5. **Create an Engagement (Concierge)**
   Use the **Concierge agent** to orchestrate your flow. Wire your Stream → Raft → Agents to form an **agent flow**.

6. **Test in Sandbox**
   Run your engagement end‑to‑end in the **Sandbox** against live sample data.

7. **Deployment**
   Once everything looks good, request deployment of your agents into the **Data Service** (see Concierge section below). Then ship your engagement.

---

## Tech 101: the moving parts

* **Stream**: live event feed (Telegram messages).
* **Raft**: indexes/stores stream data and emits triggers.
* **Agent**: a modular function with a `handle(event, context)` entry that **must return a plain JavaScript object**.
* **Playground**: run & iterate on an agent with sample inputs.
* **Engagement**: a declarative flow — usually orchestrated by the **Concierge** agent — that calls your agents in sequence/branches.
* **Data Service**: top-level container that organizes your data sources, indexing rafts, and agent engagements into a deployable pipeline.

---

## Pre‑loaded models (available in ROB)

These models are already available to use in your agents:

* **Llama 3.2 11B Vision Instruct** — multimodal text+image generation & reasoning
* **MobileNetV2 Image Classification** — lightweight image classifier
* **OWL‑ViT Base Patch32** — zero‑shot object detection
* **SAM2 Hiera Large** — image segmentation (prompted)
* **Stable Diffusion XL Base 1.0** — text‑to‑image generation
* **Stable Diffusion XL Inpainting 1.0** — image editing / inpainting
* **Whisper Large v3** — speech recognition

> Tip: Prefer small/fast models in inner loops and call heavier models sparingly.

---

## Example: call a pre‑loaded model from an agent

```ts
async function handle(event: Event, ctx: Context) {
  const { imageUrl, objectsToFind, minConfidence = 0.3 } = event.payload;
  
  const response = await ctx.fetch('http://<ask_for_ip>:8000/inference', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: {
        bucket: "1317",
        path: "fs/owlvit-base-patch32.zip"
      },
      input: [
        { type: "image", link: imageUrl, parameter: "image" }
      ],
      options: {
        candidate_labels: objectsToFind,
        task: "zero-shot-object-detection",
        threshold: minConfidence
      }
    })
  }).then(res => res.json());
  
  const detections = response.output.filter(det => det.score >= minConfidence);
  
  return {
    totalDetections: detections.length,
    detections: detections.map(det => ({
      object: det.label,
      confidence: det.score,
      location: det.box
    })),
    processingTime: response.metrics.inference_time
  };
}
```

> If your `handle` does **not** return a plain object (e.g., you `return someString;`), you’ll get **`MCP Gateway request failed: 500 Internal Server Error`**. Always return an object that is JSON‑serializable, e.g. `return { result: value }`.

---

## Example: call an external API (Runware) from an agent

```ts
import {Jimp, JimpMime} from "jimp";

export async function handle(event: Event, context: Context) {
  const API = "https://api.runware.ai/v1";
  const KEY = "YourRunwareKEY"; 

  const payload = [
    {
    taskType: "imageInference",
    taskUUID: "0e2c3e7e-91a6-4d2f-9d7a-3a0d0c8a1a1b",
    model: "runware:101@1",
    width: 1024,
    height: 1024,
    numberResults: 1,
    positivePrompt: "16‑bit retro image depicting a 1980’s black computer terminal prompt that says 'hello world' in green letters",
    negativePrompt: "low quality, blurry, deformed, text, keyboard, computer"
  }
  ];

  const res = await context.fetch(API, {
    method: "POST",
    headers: { "Authorization": `Bearer ${KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw new Error(`Runware inference failed (${res.status})`);

  const out = await res.json();
  const imageURL = out?.data?.[0]?.imageURL;
  if (!imageURL) throw new Error("Inference missing imageURL");

  const image = await Jimp.read(imageURL);
  const base64 = await image.getBase64("image/png");

  return { result: base64 };
}
```

---

## Concierge: orchestrate your flow (and how to call agents)

The **Concierge** agent is your flow conductor. Inside its script you can **call other agents** that are available in the **script context**.

> **Important**
>
> 1. An agent is **only available** to Concierge **after it’s deployed into the Data Service**.
> 2. Only **Cere** can deploy an agent into the Data Service.
> 3. When your agent is tested & ready, ping **Bren** on Telegram (**@nerbke**) with the agent name and version.

**Calling another agent from Concierge**

```ts
// Inside Concierge engagement script
export async function handle(event: Event, context: Context) {
  // Calls the helloWorld agent’s sayHelloWorld task
  const message = await context.agents.helloWorld.sayHelloWorld({});

  return { result: message };
}
```

---

## Agent template (Playground‑first)

```ts
// src/agents/helloWorld.ts
export async function handle(event: Event, context: Context) {
  const returnText = "hello world";
  // ✅ Always return a plain JS object (JSON‑serializable) from handle
  return { result: returnText };
}
```

**Playground checklist**

* Log useful metadata with `context.log(...)`
* Keep outputs small (store blobs in Raft/files, return references)
* Fail fast with helpful error messages
* **Return a plain object** – values must be JSON‑safe (no `undefined`, functions, BigInt, circular refs; convert Dates with `.toISOString()`, Buffers to base64)

---

## Build path (suggested)

1. **Hello World** agent → prove your toolchain
2. **Image or text effect** (face swap, meme caption, object tagger)
3. **Chain multiple agents** with Concierge (detect input → SD XL + ControlNet → caption)
4. **Wire to Telegram** (react to messages/commands)
5. **Polish & ship** (sandbox, then deploy)

---

## Best practices

* Keep agents **single‑purpose** and stateless where possible
* Use **small purpose build models** where possible
* Write **idempotent** logic (safe to retry)
* Guardrail inputs (file type/size, prompt cleaning)
* Return **object** consistently at the end: `{ result: returnVar}`

---

## Resources

* Telegram Bot Github: https://github.com/cere-io/integration-telegram-app-bot

---

### Code of conduct

Be kind, be curious, help each other ship great agents. This is a learning‑first, creativity‑first event.
