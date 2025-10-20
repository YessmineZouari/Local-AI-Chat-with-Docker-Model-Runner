import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;
const MODEL_URL = process.env.MODEL_URL || 'http://host.docker.internal:12434';

app.use(cors());
app.use(express.json());

// Proxy endpoint
app.post('/api/chat', async (req, res) => {
  try {
    console.log('Received chat request:', req.body);
    
    const response = await fetch(`${MODEL_URL}/engines/llama.cpp/v1/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body)
    });

    if (!response.ok) {
      throw new Error(`Model Runner returned ${response.status}`);
    }

    const data = await response.json();
    console.log('Model response received');
    res.json(data);
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ 
      error: 'Failed to connect to AI model',
      details: error.message 
    });
  }
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', modelUrl: MODEL_URL });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Proxy server running on port ${PORT}`);
  console.log(`Forwarding to Model Runner at: ${MODEL_URL}`);
});