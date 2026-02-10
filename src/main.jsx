import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.jsx'

const container = document.getElementById('root');

const app = (
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
);

if (container.hasChildNodes()) {
  // Prerendered HTML present — hydrate to attach event listeners
  hydrateRoot(container, app);
} else {
  // SPA shell (200.html fallback) — full client render
  createRoot(container).render(app);
}
