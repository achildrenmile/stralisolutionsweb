import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Resolve __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the "dist" directory
const buildPath = path.join(__dirname, 'dist');
app.use(express.static(buildPath));

// Fallback route for React SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

// Add your backend routes here
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
