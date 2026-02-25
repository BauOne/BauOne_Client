<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# BauOne Webseite

React/Vite-Webseite für BauOne (Projektsteuerung & Ingenieurmanagement im Hochbau).

## Aktueller Kontakt-Flow

Das Kontaktformular sendet **nicht** über eine API.
Beim Absenden wird per `mailto` das lokale E-Mail-Programm mit vorausgefülltem Betreff und Nachricht geöffnet.

## Run locally

**Voraussetzung:** Node.js

1. Abhängigkeiten installieren:
   `npm install`
2. Frontend starten:
   `npm run dev`

Das Frontend läuft lokal i. d. R. unter `http://localhost:3000` (oder dem von Vite gewählten freien Port).

## Build

- Produktionsbuild erstellen:
  `npm run build`
- Build lokal prüfen:
  `npm run preview`

## Scripts

- `npm run dev` → Frontend
- `npm run build` → Produktionsbuild
- `npm run preview` → Vorschau des Produktionsbuilds

Hinweis: `npm run dev:api` und `npm run dev:full` existieren weiterhin im Projekt, werden vom aktuellen Kontaktformular aber nicht verwendet.

## Analytics & Consent

- Beim ersten Laden erscheint ein Consent-Banner.
- Google Analytics wird erst nach aktiver Zustimmung geladen.
- Ohne Zustimmung bleiben nur technisch notwendige Cookies aktiv.
