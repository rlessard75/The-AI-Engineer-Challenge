"use client";

import { useCallback, useState } from "react";

/** Base URL for the FastAPI server (override for deployed backends). */
const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8000";

type ChatSuccess = { reply: string };
type ChatErrorBody = { detail?: string | { msg?: string }[] };

/**
 * Calls POST /api/chat with the user message and returns the model reply text.
 */
async function fetchExplanation(message: string): Promise<string> {
  const res = await fetch(`${API_BASE}/api/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });

  const data: unknown = await res.json().catch(() => ({}));

  if (!res.ok) {
    const err = data as ChatErrorBody;
    const detail =
      typeof err.detail === "string"
        ? err.detail
        : Array.isArray(err.detail)
          ? err.detail.map((d) => d.msg ?? "").filter(Boolean).join(" ")
          : `Request failed (${res.status})`;
    throw new Error(detail || `Request failed (${res.status})`);
  }

  const ok = data as ChatSuccess;
  if (typeof ok.reply !== "string") {
    throw new Error("Unexpected response from server.");
  }
  return ok.reply;
}

export default function Home() {
  const [input, setInput] = useState("");
  const [explanation, setExplanation] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      const trimmed = input.trim();
      if (!trimmed || loading) return;

      setError(null);
      setExplanation(null);
      setLoading(true);
      try {
        const reply = await fetchExplanation(trimmed);
        setExplanation(reply);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong.");
      } finally {
        setLoading(false);
      }
    },
    [input, loading],
  );

  return (
    <div className="flex min-h-full flex-1 flex-col bg-white">
      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-center text-3xl font-semibold tracking-tight text-neutral-900 sm:text-left">
          Explain It Simply
        </h1>
        <p className="mt-2 text-center text-sm text-neutral-600 sm:text-left">
          Paste or type complicated text, jargon, or a concept. We will send it
          to the API and show a plain-English explanation.
        </p>

        <form onSubmit={onSubmit} className="mt-10 flex flex-col gap-4">
          <label htmlFor="user-input" className="sr-only">
            Text to explain
          </label>
          <textarea
            id="user-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste or type something complicated here…"
            rows={8}
            disabled={loading}
            className="min-h-[12rem] w-full resize-y rounded-lg border border-neutral-200 bg-neutral-100 px-4 py-3 text-base text-neutral-800 shadow-inner outline-none transition placeholder:text-neutral-400 focus:border-neutral-300 focus:ring-2 focus:ring-blue-500/30 disabled:opacity-60"
          />
          <div>
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:cursor-not-allowed disabled:bg-blue-400"
            >
              {loading ? "Explaining…" : "Explain it simply"}
            </button>
          </div>
        </form>

        {error && (
          <div
            role="alert"
            className="mt-8 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
          >
            {error}
          </div>
        )}

        {explanation !== null && !error && (
          <section className="mt-10 flex flex-col gap-2" aria-live="polite">
            <h2 className="text-sm font-medium uppercase tracking-wide text-neutral-500">
              Explanation
            </h2>
            <div className="rounded-lg border border-neutral-200 bg-white px-4 py-4 text-base leading-relaxed text-neutral-800 shadow-sm">
              <p className="whitespace-pre-wrap">{explanation}</p>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
