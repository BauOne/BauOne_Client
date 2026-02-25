# BauOne Logo Package

## Dateien

- `logo-mark.svg` → Primärmarke (Verlauf auf der `1`, weiße `b`-Struktur)
- `logo-mark-mono-light.svg` → Monochrom dunkel (für helle Hintergründe)
- `logo-mark-mono-dark.svg` → Monochrom hell (für dunkle Hintergründe)
- `favicon.svg` → Browser-Tab/Favicon
- `social-avatar.svg` → Social Profilbild (quadratisch, 512x512)

## Nutzung

- Website Header/Footer: bestehende React-Komponente `components/Logo.tsx`
- Browser-Tab: über `index.html` auf `/brand/favicon.svg`
- Dokumente/Präsentationen:
  - helle Fläche → `logo-mark-mono-light.svg`
  - dunkle Fläche → `logo-mark-mono-dark.svg`
- Social/Plattformen: `social-avatar.svg`

## Gestaltungsregeln

- Keine Verzerrung oder Änderung der Proportionen.
- Keine zusätzlichen Schatten/3D-Effekte.
- Mindestabstand rund um die Marke: mindestens halbe Markenbreite.
- Primärfarben nicht austauschen (Cyan/Blau-Verlauf auf der `1`).
