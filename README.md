# Local AI Chat with React

A React-based chat interface powered by Docker Model Runner and ai/smollm2.

## Quick Start

1. Ensure Docker Model Runner is running
2. Run: `docker compose up --build`
3. Open: http://localhost:5000

## Architecture

- Frontend: React with Vite
- AI Model: ai/smollm2 via Docker Model Runner
- Communication: REST API (llama.cpp format)
- Deployment: Docker with Nginx

## Development

To run locally without Docker:
```bash
cd chat-react
npm install
npm run dev
```

## Troubleshooting

- **Connection Error**: Ensure Docker Model Runner is running on port 12434
- **Build Fails**: Check that Node.js 18+ is installed
- **Port Conflict**: Change port in docker-compose.yml if 5000 is in use