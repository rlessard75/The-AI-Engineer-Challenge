/** @type {import('next').NextConfig} */
// Where the FastAPI app listens (Next proxies /api/chat here). Use 127.0.0.1 to
// avoid some Windows/IPv6 "localhost" resolution issues between Node and uvicorn.
const backendBase =
  process.env.BACKEND_URL?.replace(/\/$/, "") || "http://127.0.0.1:8000";

const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/chat",
        destination: `${backendBase}/api/chat`,
      },
    ];
  },
};

module.exports = nextConfig;
