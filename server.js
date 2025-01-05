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
app.use(cors());
app.use(express.json());

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

app.post('/api/contact', limiter, async (req, res) => {
  const { name = 'Unbekannt', email, message } = req.body; // Default name if not provided

  // Validate inputs
  if (!email || !message) {
    return res.status(400).json({ success: false, error: 'Email and message are required.' });
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
app.use(express.static(buildPath));

// Fallback route for React SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
