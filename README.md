<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# BauOne Webseite

React/Vite-Webseite mit serverseitigem Kontaktformular-Endpoint.

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Create env file:
   `copy .env.example .env.local`
3. Set SMTP values in `.env.local` (`SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `CONTACT_TO`)
   - Optional Spam-Schutz: `CONTACT_RATE_LIMIT_WINDOW_MS`, `CONTACT_RATE_LIMIT_MAX_REQUESTS`
   - Optional Tracking: `VITE_GA_MEASUREMENT_ID` (GA4-ID, z. B. `G-XXXXXXXXXX`)
   - Optional dev fallback: `CONTACT_DEV_FALLBACK=true` (Formular funktioniert ohne SMTP, Anfrage wird in der Server-Konsole ausgegeben)
4. Start frontend + contact API together:
   `npm run dev:full`

Frontend läuft standardmäßig auf `http://localhost:3000`, die Kontakt-API auf `http://localhost:8787`.

## Scripts

- `npm run dev` → nur Frontend
- `npm run dev:api` → nur Kontakt-API
- `npm run dev:full` → Frontend + API parallel
- `npm run build` → Produktionsbuild

## Cookie & Analytics

- Beim ersten Laden erscheint ein Consent-Banner.
- Google Analytics wird erst nach aktiver Zustimmung geladen.
- Ohne Zustimmung bleiben nur technisch notwendige Cookies aktiv.
