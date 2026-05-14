# Explain It Simply (frontend)

Next.js UI for pasting complicated text and receiving a plain-English explanation from the FastAPI backend.

## Prerequisites

- Node.js 20+ (LTS recommended)
- The API running locally (see the repository root `api/` app), typically at `http://localhost:8000`

## Run locally

1. Install dependencies (once):

   ```bash
   npm install
   ```

2. Start the FastAPI server on port 8000 from the project root (however you usually run `api/index.py`).

3. Start the Next.js dev server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000). Submit text; the app calls `POST http://localhost:8000/api/chat` with `{ "message": "..." }` and shows the `reply` field.

## Configuration

By default the client uses `http://localhost:8000`. To point at another host (for example a deployed API), set:

```bash
NEXT_PUBLIC_API_BASE_URL=https://your-api.example.com
```

Create a `.env.local` file in this folder with that variable if you need a non-default base URL.

## Scripts

- `npm run dev` — development server with hot reload
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — ESLint
