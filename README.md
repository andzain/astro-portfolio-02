# Vahram Aghasyan — Portfolio (Astro + Svelte)

Rebuild of the Joomla site at vahram.aghasyan.net using Astro (static pages) and
Svelte islands for interactive UI (theme toggle, mobile nav, gallery filter).

## Setup

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
npm run preview
```

## Version note

The first draft of this scaffold pinned outdated package versions (Astro 4,
an old `@astrojs/svelte`, and the deprecated `@astrojs/tailwind` integration)
from stale reference knowledge instead of checking the registry. This has
been corrected:

- **Astro** `^7.2.7` (was 4.15) — the content collections API also changed
  in Astro 5+: collections are now defined in `src/content.config.ts` (not
  `src/content/config.ts`) using a `loader: glob(...)` instead of
  `type: 'content'`, entries expose `.id` instead of `.slug`, and rendering
  a Markdown body uses `import { render } from 'astro:content'` instead of
  the old `entry.render()` method. All of that is already updated here.
- **svelte** `^5.56.6` and **@astrojs/svelte** `^9.0.1` (was 5.1 / 5.7) —
  the Svelte islands still use Svelte 4-style syntax (`export let`,
  `on:click`), which Svelte 5 still runs in backward-compatibility mode.
  Consider migrating them to runes (`$props()`, `$state()`, `onclick`) for
  a fully idiomatic Svelte 5 codebase.
- **Tailwind** — `@astrojs/tailwind` is deprecated as of Tailwind v4.
  Styling here is now wired through the official `@tailwindcss/vite` plugin
  directly in `astro.config.mjs`, with no separate `tailwind.config.mjs`
  (Tailwind v4 is CSS-first; add an `@theme` block in `global.css` if you
  start using Tailwind utility classes — this project currently styles by
  hand with plain CSS custom properties, so Tailwind isn't actually
  exercised yet beyond being available).

Always double check current package versions yourself before a real
install — check the date this was generated against npm.

## Recent changes

- **Exhibitions removed.** The `/exhibitions` page, its nav link, and the
  `exhibitions` content collection have all been removed per current scope
  — the site is now Works / CV/Bio / Contact only.
- **Each project page now has a hero + gallery.** The cover image renders
  full-width at the top of `/works/[slug]`; any additional images in that
  project's `gallery` frontmatter render below the body as a click-to-expand
  lightbox (`ImageViewerModal.svelte` — supports keyboard arrows/escape).
  16 of 17 projects now have a populated gallery; **The Story of Automatika**
  only has one surviving source image, so it has a hero only.
- Two images remain thumbnail-resolution only (`decolonize-land`'s
  `IMG_7112.jpg`, `museum-of-revolution`'s `5086.jpg`, `red-flags`'s
  `100_0230.jpg`) — swap in full-res versions if you locate the originals.

## Why this isn't a 1:1 automated migration

The original Joomla export was a **filesystem-only backup** (core, plugins,
templates, and the raw `/images` media library) with no database dump. In
Joomla, page text and the mapping of "this image belongs to this project" live
in the database, not in files — so the zip alone couldn't tell us which loose
image belonged to which artwork. Everything in `src/content/projects/` here
was instead migrated directly from the **live site** (all 17 published works,
About, Contact), then cross-referenced against the zip's
`images/phocagallery/art/` folder to source the actual full-resolution files.

## What's included — fully migrated

**All 17 projects**, each with real title, year, medium, and full body text
copied from the live pages, plus every full-resolution image that page used:

1. Day One (2026)
2. Reduction (2026)
3. Echoes from Day 3650 (2025)
4. Radiation and Revolution (2022)
5. Decolonize Land (2021)
6. Objects that Question Other Objects (2019)
7. Red Flags (2016)
8. Museum of Revolution (2020) — live site marks this "coming soon"; only images published so far, text is a placeholder
9. Ghost City (2005) — includes link to original PDF
10. Into the Wilderness (2016)
11. Ruins of Private Property (2007) — video piece, stills only
12. The Story of Automatika (2007)
13. Reverberations of Utterance (2016)
14. Reading Hut (2014)
15. Bangladesh (2003) — video piece, stills only
16. Ruins of Our Time (2005)
17. Architecture Speaks Back (2020)

**About page** — full bio text migrated verbatim, portrait image, and a link
to the real CV PDF (`public/images/cv/cv-vahram-aghasyan.pdf`).

**Contact page** — real email (`vahramaghasyan@gmail.com`) and a static form
matching the live site's fields (name, email, message, website/social link).

## Known gaps / next steps

- **Contact form has no backend.** The live site uses a Joomla contact-form
  extension. This form currently only renders — wire it to a form service
  (Formspree, Resend, a serverless function) or your own API route before
  going live.
- **Video works** (Ruins of Private Property, Bangladesh) — only cover
  stills were migrated; the actual video files weren't in the backup. Source
  the originals separately and embed with a `<video>` tag or hosted player.
- **Museum of Revolution** — live site itself has no write-up yet ("coming
  soon"). Update `src/content/projects/museum-of-revolution.md` once text
  exists.
- **CV PDF** is linked as a static download; consider rendering it as a page
  instead if you want it indexable.
- Two images (`decolonize-land`'s `IMG_7112.jpg`, `museum-of-revolution`'s
  `5086.jpg`) only existed at thumbnail resolution in the backup — swap in
  full-res versions if you have them.

## Structure

- `src/content/projects/` — one Markdown file per artwork, matching the
  slugs used on the live site (so old URLs like `/day-one`, `/ghost-city`
  map directly to `/works/day-one`, `/works/ghost-city`, etc. with a
  redirect rule if desired).
- `src/content/info/` — `bio.md` (real bio text) rendered on the About page.
- `src/components/static/` — Astro-only components (no client JS).
- `src/components/islands/` — Svelte components hydrated with `client:load`.
- `public/images/works/<slug>/` — cover + gallery images per project, all
  migrated from the live site's actual media library.
- `public/images/about/`, `public/images/cv/` — About page portrait and CV PDF.
