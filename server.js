import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import rateLimit from 'express-rate-limit';

const app = express();

// Resolve __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'https://strali.solutions',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json({ limit: '10kb' })); // Limit body size

// Path to the JSON file where queries will be stored
const queriesFilePath = path.join(__dirname, process.env.CUSTOMERQERIES ||'customer_queries.json');

// Ensure the JSON file exists
if (!fs.existsSync(queriesFilePath)) {
  fs.writeFileSync(queriesFilePath, JSON.stringify([]));
}

// Predefined email response template
const predefinedResponse = {
  subject: 'Wir haben Ihre Nachricht erhalten',
  text: `
    Sehr geehrte(r) {name},

    vielen Dank für Ihre Nachricht. Wir werden uns schnellstmöglich bei Ihnen melden.

    Mit freundlichen Grüßen,
    Ihr Strali Solutions Team
  `,
  html: `
    <p>Sehr geehrte(r) {name},</p>
    <p>vielen Dank für Ihre Nachricht. Wir werden uns schnellstmöglich bei Ihnen melden.</p>
    <br>
    <p>Mit freundlichen Grüßen,</p>
    <p>Ihr Strali Solutions Team</p>
  `,
};

// Rate limiting middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
  message: {
    success: false,
    error: 'Too many requests. Please try again later.',
  },
});

// Input sanitization helper
const sanitizeInput = (str) => {
  if (typeof str !== 'string') return '';
  return str
    .replace(/[<>]/g, '') // Remove < and > to prevent HTML injection
    .trim()
    .slice(0, 1000); // Limit length
};

// Email validation regex
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

app.post('/api/contact', limiter, async (req, res) => {
  // Sanitize inputs
  const name = sanitizeInput(req.body.name) || 'Unbekannt';
  const email = sanitizeInput(req.body.email);
  const message = sanitizeInput(req.body.message);

  // Validate inputs
  if (!email || !message) {
    return res.status(400).json({ success: false, error: 'Email and message are required.' });
  }

  // Validate email format
  if (!isValidEmail(email)) {
    return res.status(400).json({ success: false, error: 'Invalid email format.' });
  }

  // Read existing queries from the JSON file
  let queries = [];
  try {
    const data = fs.readFileSync(queriesFilePath, 'utf8');
    queries = JSON.parse(data);
  } catch (error) {
    console.error('Error reading queries file:', error);
    return res.status(500).json({ success: false, error: 'Unable to process the request.' });
  }

  // Add the new query
  const newQuery = {
    id: queries.length + 1, // Incremental ID
    name,
    email,
    message,
    timestamp: new Date().toISOString(),
    response: {
      subject: predefinedResponse.subject,
      text: predefinedResponse.text.replace('{name}', name),
      html: predefinedResponse.html.replace('{name}', name),
    },
  };
  queries.push(newQuery);

  // Save the updated queries back to the JSON file
  try {
    fs.writeFileSync(queriesFilePath, JSON.stringify(queries, null, 2));
    res.json({ success: true, message: 'Your query has been recorded.' });
  } catch (error) {
    console.error('Error writing to queries file:', error);
    res.status(500).json({ success: false, error: 'Unable to save your query.' });
  }
});

// Serve the React app
const buildPath = path.join(__dirname, 'dist');

// Serve assets with long cache (files have version hashes)
app.use('/assets', express.static(path.join(buildPath, 'assets'), {
  maxAge: '1y',
  immutable: true
}));

// Serve other static files with short cache
app.use(express.static(buildPath, {
  maxAge: '1h',
  setHeaders: (res, filePath) => {
    // Never cache index.html
    if (filePath.endsWith('index.html')) {
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    }
  }
}));

// Fallback route for React SPA - no cache for HTML
app.get('*', (req, res) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.sendFile(path.join(buildPath, 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
