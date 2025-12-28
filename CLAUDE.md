# Strali Solutions Website

## Project Overview
Corporate website for Strali Solutions e.U., an IT consulting company based in Carinthia, Austria.

- **Owner:** Ing. Michael Linder, MSc
- **Location:** Nötsch 219, 9611 Nötsch im Gailtal
- **Website:** https://strali.solutions
- **Repository:** https://github.com/achildrenmile/stralisolutionsweb

## Tech Stack
- React 18 + Vite
- Tailwind CSS
- Framer Motion (animations)
- React Router
- Dual language support (DE/EN)

## Recent Changes (Dec 2025)

### Dark Theme Redesign
- Implemented modern dark theme with CSS variables in `src/index.css`
- Colors: `--primary: #1a237e`, `--accent: #4f46e5`, `--bg-dark: #0a0a0f`
- Glassmorphism navigation with `nav-glass` class
- Dark cards with `card-dark` class and hover effects
- Gradient text effect with `gradient-text` class

### Updated Components
- **Header.jsx** - Dark nav with logo (white text on dark bg)
- **Hero.jsx** - Gradient text, animated scroll indicator
- **Services.jsx** - Dark cards with scroll-triggered animations
- **About.jsx** - Dark theme styling
- **Contact.jsx** - Dark input styling with `input-dark` class
- **Footer.jsx** - Dark theme
- **Impressum.jsx** - Dark card styling
- **ChatWidget.jsx** - Updated to use CSS variables (`--primary`, `--primary-light`)
- **LanguageSwitcher.jsx** - DE/EN toggle buttons

### Content Updates
- **Productivity Solutions** renamed to **"Microsoft 365 & Copilot: Productivity Redefined"**
  - Highlights: Teams, SharePoint, OneDrive, Planner, Power Platform
  - Microsoft Copilot AI-powered assistance features
- Translations updated in `src/context/LanguageContext.jsx`

## CI/CD Pipeline
- **Script:** `/home/oe8yml/deploy-strali.sh`
- **Log:** `/home/oe8yml/strali-deploy.log`
- **Schedule:** Daily at 6:00 PM via cron
- **Target:** `/var/www/stralisolutionsweb/dist/`
- **Process:** Fetches from GitHub → pulls if changes → npm install → vite build

## Git Configuration
- **User:** achildrenmile
- **Email:** michael@strali.solutions
- **Credentials:** Stored in `~/.git-credentials`

## Key Files
- `src/index.css` - Theme variables and custom classes
- `src/context/LanguageContext.jsx` - All translations (DE/EN)
- `src/components/` - All React components
- `/home/oe8yml/deploy-strali.sh` - Auto-deploy script

### IT Assessment Booking Page (Dec 2025)
- **New Page:** `/assessment` - Free IT Assessment booking landing page
- **Component:** `src/components/ITAssessment.jsx`
- **Features:**
  - Landing page with CTA button (opens Microsoft Bookings in new tab)
  - "What You Get" benefits list with checkmarks
  - "How It Works" 4-step process
  - Info cards: Duration (30 min), Cost (Free), Location (Online/On-site), Expert (Michael Linder)
  - Bottom CTA section
  - Dark theme styling with glassmorphism cards
  - Framer Motion animations
- **Navigation:**
  - Primary CTA button in Header (desktop & mobile)
  - Primary CTA in Hero section ("Kostenloses IT-Assessment" / "Free IT Assessment")
  - Secondary "Contact" button in Hero
- **Booking URL:** `https://outlook.office.com/book/ITAssessment1@strali.solutions/` (opens in new tab)
- **Translations:** Full DE/EN support in `LanguageContext.jsx`
- **Note:** Microsoft Bookings doesn't allow iframe embedding (X-Frame-Options), so we use external link

### Cookie Consent Banner (Dec 2025)
- **Component:** `src/components/CookieConsent.jsx`
- **Features:**
  - DSGVO/GDPR compliant cookie consent
  - Animated slide-up banner (Framer Motion)
  - "Accept all" and "Essential only" options
  - Expandable details showing cookie types
  - Saves preference to localStorage
  - Solid dark background (#12121a) with gradient overlay
  - z-index: 60 (above ChatWidget)
  - Full DE/EN translations
- **Cookie Types:**
  - Essential (always enabled)
  - Analytics (optional)
- **Storage:** `localStorage.cookie-consent` with JSON object containing preferences and timestamp
- **Reset:** Delete `cookie-consent` from localStorage to show banner again

## Commands
```bash
# Local development
npm run dev

# Build
npm run build

# Manual deploy
/home/oe8yml/deploy-strali.sh

# View deploy logs
tail -f /home/oe8yml/strali-deploy.log

# Edit cron schedule
crontab -e
```
