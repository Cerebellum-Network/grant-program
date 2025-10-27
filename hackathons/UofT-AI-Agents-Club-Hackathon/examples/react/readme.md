# React Example: Dispatch events to ROB engagements

This is a brief example of how to dispatch Activity Events and receive Engagement results using the CERE Activity SDK in a React (Vite) app.

Important: Do NOT change the signer or any of the constants in src/Playground.tsx. They are predefined and configured for your environment.

## What this example does
- Initializes an EventSource client using a pre-provisioned JsonSigner, NoOpCipher, and preconfigured endpoints/keys.
- Listens for engagement events and logs their execution results to the browser console.
- Sends a sample ActivityEvent (type: TEST_EVENT) with a simple payload when you click “Send event”.

Relevant code: src/Playground.tsx

## Prerequisites
- Node.js 18+ (recommended LTS)
- npm (comes with Node) or another package manager

## Install and run
1. Navigate to this example directory:
   cd hackathons/UofT-AI-Agents-Club-Hackathon/examples/react

2. Install dependencies:
   npm install

3. Start the dev server (Vite will open your browser):
   npm start

4. In the opened page, click the “Send event” button.
   - You should see an alert: "event dispatched successfully. Check your engagement logs".
   - Open the browser console to observe logs.

## Where to see results
- Browser console:
  - When the EventSource is ready, you’ll see: "EventSource ready: true".
  - After the engagement completes, the listener logs: "Engagement execution results: ..." with the results payload.
- Engagement logs (ROB):
  - This environment is already wired to your ROB backend. After dispatch, check your ROB engagement logs for the new execution.

## How it works (src/Playground.tsx)
- Uses a pre-configured JsonSigner with a provided passphrase (uoft25). Do not modify it.
- Constructs an EventSource with these predefined constants:
  - appId, dispatchUrl, listenUrl, dataServicePubKey, appPubKey
- Dispatches a test event on button click:
  new ActivityEvent('TEST_EVENT', { prompt: 'Create Epic Galaxy image' })

## Do not change these
- The signer block and all constants at the top of src/Playground.tsx:
  - APP_ID, DISPATCH_URL, LISTEN_URL, DATA_SERVICE_PUBLIC_KEY
  - The JsonSigner encoded key and passphrase
  Changing any of these may break connectivity to your environment.

## Troubleshooting
- If EventSource ready is false or errors:
  - Ensure you’re online and the configured endpoints are reachable from your network.
  - If you modified anything in src/Playground.tsx, revert your changes.
- If npm install fails:
  - Try deleting node_modules and package-lock.json, then run npm install again.

## Build and preview (optional)
- Production build:
  npm run build
- Preview the build locally:
  npm run preview

That’s it. Click “Send event” to trigger an engagement and inspect the results in the console and your ROB engagement logs.
