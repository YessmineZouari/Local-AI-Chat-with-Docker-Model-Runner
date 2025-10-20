# Local AI Chat with Docker Model Runner

A **React-based chat interface** powered by **Docker Model Runner** and **ai/smollm2**, using an **Express proxy** to handle CORS.

---

## Prerequisites

- Docker and Docker Compose installed
- Docker Model Runner running at `http://host.docker.internal:12434`
- Node.js (for local development without Docker)

---

## Quick Start

1. **Ensure Docker Model Runner is running** at `http://host.docker.internal:12434`

2. **Run the stack:**
   ```bash
   docker compose up --build
   ```

3. **Open your browser:** [http://localhost:5000](http://localhost:5000)

---

## Development ( Without Docker )

### Start the Proxy Server

```bash
cd proxy
npm install
npm run dev
```

### Start the Frontend

```bash
cd chat-react
npm install
npm run dev
```

---

## Project Structure

```
my-genai-app/
├── chat-react/          # React frontend
├── proxy/               # Express proxy server
├── docker-compose.yml   # Docker compose configuration
└── README.md            # Project documentation
```

---

## Features

- 🤖 Local AI chat interface
- 🐳 Dockerized deployment
- 🔄 Express proxy for CORS handling
- ⚛️ Modern React frontend
- 🚀 Easy setup and deployment

---

## Troubleshooting

- **Cannot connect to model runner:** Verify Docker Model Runner is accessible at `http://host.docker.internal:12434`
- **Port conflicts:** Ensure port 5000 is available or modify the port in `docker-compose.yml`
- **CORS issues:** The Express proxy handles CORS; ensure it's running correctly
