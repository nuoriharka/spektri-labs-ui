# Spektri.Labs UI

Moderni Next.js-pohjainen käyttöliittymä Spektri.Labsille. Tavoite on **nopea, kestävä kehitys**: pienet PR:t, vihreä build ja automaattiset previuut.

## Pika-aloitus

```bash
npm ci
npm run dev
# http://localhost:3000
```

**Build/tuotanto**

```bash
npm run build
npm start
```

## Arkkitehtuuri (tiivis)

- **Next.js App Router (RSC + client islands)** – server-first
- **Tailwind** + (valikoiden) shadcn/ui
- **SSE/WebSocket** run-tapahtumille (mock-API löytyy paketista tarvittaessa)
- **Design-tokenit** CSS-muuttujina → Tailwind-teema
- **Observability**: Sentry (opt), PostHog/Mixpanel (opt)

## Design system

- Tokenit: katso `docs/DESIGN_TOKENS_FI.md`
- Komponenttikirjasto ja skeletit: `docs/UI_COMPONENTS_SPEC_FI.md`
- UX-linjaukset ja virrat: `docs/UX_GUIDELINES_FI.md`
- Kopiostandardi: `docs/COPYWRITING_STYLE_FI.md`
- Saavutettavuus: `docs/ACCESSIBILITY_FI.md`

## Ympäristömuuttujat

- Runtime → **Vercel Project Env** (Development/Preview/Production)
- CI → **GitHub Secrets** vain jos workflow tarvitsee (`VERCEL_TOKEN`)

Esimerkit ja taulukot: `docs/ENV_AND_SECRETS_FI.md`

## Työvirrat

- CI: `.github/workflows/ci.yml` – **lint → typecheck → build** (nopea, välimuistit)
- Deploy: `.github/workflows/deploy.yml` – Vercel deploy (jos `VERCEL_TOKEN` on asetettu)
- Release: `.github/workflows/release-please.yml` – semver & CHANGELOG
- Riippuvuudet: `renovate.json` – viikoittaiset päivitys-PR:t

## Kontribuointi

- Pienet, keskittyneet PR:t; Conventional Commits
- Lue `docs/REVIEW_PROCESS_FI.md` ja `docs/WORKFLOWS_FI.md`
- Käytä `docs/CONTENT_PAGES_FI.md` sivukopion lähteenä

---

> 🔧 Tarvitsetko mock-run streamin kehitykseen? Lisää `src/app/api/runs/[id]/stream/route.ts` -reitti *Autopilot Pack* -paketista.
