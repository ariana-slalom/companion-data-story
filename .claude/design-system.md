# Design System — The Support Side

## Design Direction
Warm, editorial, illustration-led. Art book meets health advocacy publication.
Not a hospital portal. Not a wellness startup. Something that feels considered,
human, and worth reading slowly.

A first-time visitor should feel seen — not studied, not lectured.

## Typography
Headings: Playfair Display (Google Fonts) — serif, editorial weight
Body / UI: DM Sans (Google Fonts) — clean, warm, accessible
Loaded via index.html, not imported in CSS.

Heading scale:
- H1: Playfair Display, 3rem, normal weight
- H2: Playfair Display, 2rem, normal weight
- H3: DM Sans, 1.25rem, 600 weight
- Body: DM Sans, 1rem, 400 weight, 1.7 line height
- Caption / label: DM Sans, 0.8rem, 500 weight, letter-spacing 0.05em

## Color Palette
Warm neutrals as base. Intentional color moments for emotional weight only.

--color-bg: #FAF8F5          (warm off-white — page background)
--color-surface: #F2EDE6     (slightly darker warm — card/section bg)
--color-text: #2C2825        (near-black warm — primary text)
--color-text-secondary: #6B5F58  (muted warm brown — secondary text)
--color-border: #E0D8CF      (soft warm — dividers)

Accent palette (use sparingly — emotional markers only):
--color-accent-rose: #C97A7A     (flare / difficulty moments)
--color-accent-sage: #7A9E8E     (stability / support moments)
--color-accent-gold: #C9A96E     (data highlights / key stats)
--color-accent-slate: #7A8EA0    (companion-specific data)

## Illustration & Visual Style
- Soft organic shapes — no hard geometric grids
- Line weight consistent and gentle — not clinical, not playful
- No stock photography under any circumstances
- SVG illustrations inline where possible for performance
- Charts use chart.js with custom colors from the palette above
- No drop shadows — use border and background contrast instead

## Spacing
Base unit: 8px
Section padding: 80px top/bottom on desktop, 48px on mobile
Content max-width: 760px centered (narrative column)
Chart/visual max-width: 960px centered

## Component Patterns
- Stat callout: large number in Playfair Display + DM Sans label below
- Section reveal: opacity 0 → 1 + translateY(24px) → 0 on scroll intersection
- Condition filter: pill buttons, single select, sage accent when active
- Toggle: two-state, labeled clearly, no icon-only
- Cards: surface color bg, 16px padding, 8px border-radius, no shadow

## Tone of Voice
Empathetic, direct, data-grounded. Not clinical. Not inspirational-poster.
Writes like a thoughtful health journalist who has been in this situation.
Never minimizes. Never catastrophizes. Holds complexity without resolving it.
Second person ("you") for companion-addressed sections.
Third person for data and research sections.