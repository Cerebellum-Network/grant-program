# UofT AI Agents Club × Cere Network Mini‑Hackathon

> **For UofT AI Agents Club students only.** Build, test, and deploy a live AI agent on Cere’s ROB platform in hours — no servers, no pipelines, no infra headaches.

---

## Why this hackathon?

Learn the building blocks of modern, event‑driven AI apps — **Streams → Rafts → Agents → Engagements (Concierge)** — and go from **idea → live deployment** fast. You’ll process **Telegram group data** in real time, index it, trigger agents, and ship something fun and useful.

> After the hackathon you’ll keep access to ROB so you can create new Streams (e.g. Discord), spin up new agents (spam filter, support agent, rewards bot), and continue iterating.

---

## Quickstart (0 → live)

1. **Sign up**
   Use the **UofT student email** on the sign‑up form you receive from the club. We’ll provision access to **ROB** (Cere’s agent orchestration environment) to student accounts only.

2. **Create your Stream**
   Create a **Telegram Message Stream** in your workspace. This connects to the provided data service that publishes Telegram events.

3. **Add a Raft (Indexing)**
   Create a **Raft** for your stream to store & index messages (RedisGraph under the hood). The Raft will emit events that **trigger agents**.

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
* **Agent**: a modular function with a `handle(event, context)` entry that **must return a plain JavaScript object (JSON‑serializable)**.
* **Playground**: run & iterate on an agent with sample inputs.
* **Engagement**: a declarative flow — usually orchestrated by the **Concierge** agent — that calls your agents in sequence/branches.
* **Data Service**: the runtime that hosts models and deployed agents used by scripts.

---

## Pre‑loaded models (available in ROB)

These models are already available to use in your agents:

* **Llama 3.2 11B Vision Instruct** — multimodal text+image generation & reasoning
* **MobileNetV2 Image Classification** — lightweight image classifier (ImageNet)
* **OWL‑ViT Base Patch32** — zero‑shot object detection
* **SAM2 Hiera Large** — image segmentation (prompted)
* **Stable Diffusion XL Base 1.0** — text‑to‑image generation
* **Stable Diffusion XL Inpainting 1.0** — image editing / inpainting
* **Whisper Large v3** — speech recognition

> Tip: Prefer small/fast models in inner loops and call heavier models sparingly.

---

## Example: call a pre‑loaded model from an agent

```ts
// src/agents/visionLabeler.ts
// Example: use OWL‑ViT zero‑shot detection inside an agent
import { z } from "zod";

export const inputSchema = z.object({
  imageURL: z.string().url(),
  labels: z.array(z.string()).min(1)
});

export async function handle(event: any, context: any) {
  const { imageURL, labels } = inputSchema.parse(event);

  const result = await context.models["owlvit-base-patch32"].detect({
    imageURL,
    labels
  });

  // ✅ Always return JSON
  return { result };
}
```

> If your `handle` does **not** return a plain object (e.g., you `return someString;`), you’ll get **`MCP Gateway request failed: 500 Internal Server Error`**. Always return an object that is JSON‑serializable, e.g. `return { result: value }`.

---

## Example: call an external API (Runware) from an agent

```ts
// src/agents/runwareImage.ts
// Generates a retro 16‑bit image using Runware’s API, then returns base64
import Jimp from "jimp";

export async function handle(event: any, context: any) {
  const API = "https://api.runware.ai/v1";
  const KEY = context.secrets.RUNWARE_API_KEY; // set in workspace secrets

  const payload = [{
    taskType: "imageInference",
    taskUUID: context.uuid(),
    model: "runware:101@1",
    width: 1024,
    height: 1024,
    numberResults: 1,
    positivePrompt: "16‑bit retro image depicting a 1980’s black computer terminal prompt that says 'hello world' in green letters",
    negativePrompt: "low quality, blurry, deformed, text, keyboard, computer"
  }];

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
  const base64 = await image.getBase64Async(Jimp.MIME_PNG);

  return { result: { base64, imageURL } };
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
export async function handle(event: any, context: any) {
  // Calls the helloWorld agent’s sayHelloWorld task
  const message = await context.agents.helloWorld.sayHelloWorld({});

  // Use outputs to branch/route logic
  if (message?.result?.text?.includes("hello")) {
    // call more agents, write to raft, etc.
  }

  return { result: { ok: true, message } };
}
```

---

## Agent template (Playground‑first)

```ts
// src/agents/helloWorld.ts
export async function handle(event: any, context: any) {
  const returnText = "hello world";
  // ✅ Always return a plain JS object (JSON‑serializable) from handle
  return { result: returnText };
}
```

**Playground checklist**

* Validate inputs with `zod` or equivalent
* Log useful metadata with `context.log.info(...)`
* Keep outputs small (store blobs in Raft/files, return references)
* Fail fast with helpful error messages
* **Return a plain object** – values must be JSON‑safe (no `undefined`, functions, BigInt, circular refs; convert Dates with `.toISOString()`, Buffers to base64)

---

## Build path (suggested)

1. **Hello World** agent → prove your toolchain
2. **Image or text effect** (emoji/sticker overlay, meme caption, object tagger)
3. **Chain multiple agents** with Concierge (filter → detect → inpaint → caption)
4. **Wire to Telegram** (react to messages/commands)
5. **Polish & ship** (sandbox, then deploy)

---

## Best practices

* Keep agents **single‑purpose** and stateless where possible
* Use **fast CV models** for gating, heavier models for finals
* Write **idempotent** logic (safe to retry)
* Guardrail inputs (file type/size, prompt cleaning)
* Return **structured JSON** consistently: `{ result, metrics?, debug? }`

---

## Learn more

* **ROB Platform Developer Onboarding Guide**: [https://www.notion.so/cere/ROB-Platform-Developer-Onboarding-Guide-eaa8764057c547f7a950e003469bb4be](https://www.notion.so/cere/ROB-Platform-Developer-Onboarding-Guide-eaa8764057c547f7a950e003469bb4be)
* Background & challenge inspiration: Cere’s earlier **AI Agent Image Challenge** README (structure & flow)

---

### Code of conduct

Be kind, be curious, help each other ship great agents. This is a learning‑first, creativity‑first event.
