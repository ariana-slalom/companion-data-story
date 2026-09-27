# The Support Side

An interactive data story about the companion experience in chronic illness.

Built for Protogen P302 certification — Interactive Data Story.

## What It Is
A scroll-driven narrative that surfaces the invisible data around caregiving
and companionship in chronic illness. Not the patient's story — the person
beside them.

## Who It's For
Companions, caregivers, and the healthcare designers who build tools in this
space. Anyone who has reorganized their life around someone else's diagnosis.

## What It Does
- Scrollytelling narrative with data reveals
- Condition filter (Lupus, MS, RA, Hashimoto's, Crohn's, Sjögren's, EDS, T1D)
- Day in the Life toggle — patient view vs. companion view
- Interactive prototype of a companion-focused support tool

## Stack
Vue 3 + Vite + TypeScript · Vuetify 3 · chart.js + vue-chartjs · Vercel

## Develop
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

Deployed to Vercel with SPA rewrite rules (see `vercel.json`). The site sits
behind a client-side password screen — a lightweight gate for a private
preview link, not a substitute for real authentication.

Live site: https://companion-data-story-ekjk.vercel.app/

## Disclaimer
This project is an educational resource and design exploration. It does not
replace clinical medical advice, professional diagnosis, or treatment direction.

## Protogen
Part of the Slalom Protogen certification series.
Designer: Ariana Deryss