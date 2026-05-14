# Explain It Simply (frontend)

Next.js UI for pasting complicated text and receiving a plain-English explanation from the FastAPI backend.

## Prerequisites

- Node.js 20+ (LTS recommended)
- The API running locally (see the repository root `api/` app), typically on **port 8000**

## Run locally

1. Install dependencies (once):

   ```bash
   npm install
   ```

2. Start **FastAPI** on port **8000** (for example `uvicorn api.index:app --reload --port 8000` from the repo root, depending on how you run the app).

3. Start the Next.js dev server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000). Submit text.

By default the browser calls **`POST /api/chat` on the same host as the Next app** (e.g. `http://localhost:3000/api/chat`). Next.js **rewrites** that request to your FastAPI app at **`http://127.0.0.1:8000/api/chat`**, so you avoid many cross-origin and “Failed to fetch” problems. The JSON body is still `{ "message": "..." }` and the UI reads the `reply` field.

## Configuration

| Variable | Where | Purpose |
|----------|--------|---------|
| `BACKEND_URL` | `.env.local` (server only) | Base URL for the rewrite target (default `http://127.0.0.1:8000`). |
| `NEXT_PUBLIC_API_BASE_URL` | `.env.local` | If set, the **browser** calls this base URL + `/api/chat` directly instead of using the proxy. Use when you intentionally want a public API URL; the page and API must be callable under the browser’s security rules (e.g. no `http://` API from an `https://` site). |

## Scripts

- `npm run dev` — development server with hot reload
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — ESLint
