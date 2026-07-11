# Noble Sub-Zero Service — Design System

Premium refrigeration appliance service, presented with museum-gallery restraint. Noble services **Sub-Zero refrigeration** and **Wolf ranges/ovens**, plus maintenance plans. The design language is modeled on Apple's web presence: reverent full-bleed photography tiles, near-invisible UI, quiet accents, and typography that is confident but never loud.

**Sources:** A written design-language specification (Apple web presence analysis: homepage, environment, store, iPhone buy page, accessories index) supplied in chat. No Figma, codebase, or image assets were provided. **No logo was provided** — the brand renders as a plain-type wordmark ("Noble Sub-Zero Service") wherever a mark would go. Do not invent a logo.

## Content Fundamentals

- **Voice:** Calm, assured, minimal. Short declarative headlines ("Cold, kept perfectly."), one-line taglines, no exclamation points, no hype adjectives stacked ("very", "amazing").
- **Person:** "You/your" for the customer; the brand speaks as "we" sparingly. ("Your Sub-Zero, serviced by specialists.")
- **Casing:** Sentence case everywhere — headlines, buttons, links. Never ALL CAPS, never Title Case CTAs.
- **CTAs:** Two-word maximum, verb-first: "Book service", "Learn more", "Get a quote", "Call now".
- **Emoji:** Never.
- **Numbers:** Concrete and unadorned ("Same-week appointments", "20 years of factory-certified service") — no starburst stats, no icon-stat rows.
- **Legal/fine print:** Present but whisper-quiet at 12px/10px in muted ink at the page bottom.

## Visual Foundations

- **Color:** White canvas with TWO accents — Action Blue `#0066cc` for Sub-Zero and all default interactive elements, Wolf Red `#c8102e` for Wolf-related CTAs and links (co-equal by brand line, per client direction). On dark tiles: Sky Link Blue `#2997ff` / bright red `#ff453a`. Surfaces are white, parchment `#f5f5f7`, and three micro-stepped near-blacks. Pure black is reserved for the global nav.
- **Type:** SF Pro Display/Text via `system-ui, -apple-system` (Inter substitute off-Apple; see Caveats). Weight ladder 300/400/600/700 — **500 is deliberately absent**. Headlines are 600 with negative tracking ("Apple tight"). Body is 17px/1.47/-0.374px, not 16px. Rare weight 300 at 18px button-large and 24px lead-airy.
- **Backgrounds:** Full-bleed edge-to-edge tiles alternating light ↔ dark; the color change IS the divider. No gradients, ever. Atmosphere comes from photography.
- **Spacing:** 8px base; section vertical padding 80px (48px on small phones); card padding 24px; ≥64px air above tile headlines; product imagery never within 40px of other content.
- **Elevation:** Exactly one drop-shadow — `rgba(0,0,0,0.22) 3px 5px 30px` — for product renders resting on a surface. Never on cards, buttons, or text. Cards use 1px hairline borders; sticky bars use parchment-80% + `saturate(180%) blur(20px)` backdrop-filter.
- **Radii grammar:** 0 for tiles, 8px compact utility, 11px pearl capsule (rare), 18px utility cards, full pill for every "action" (primary CTAs, chips, search).
- **Hover:** Links underline; buttons do not change color. **Press:** `transform: scale(0.95)` on every button — the system-wide micro-interaction. **Focus:** 2px solid `#0071e3` outline.
- **Animation:** Minimal — the press scale and gentle opacity/position fades only. No bounces, no parallax gimmicks.
- **Imagery:** Photographic-realistic appliance renders on tinted surfaces; cool, clean color grade; full-bleed rectangular in heroes; 1:1 crops at 18px radius in grids. No illustration, no drawn SVG artwork.

## Iconography

- No icon assets were provided. The system's icon needs are minimal: search glyph, bag/cart, chevrons, close — thin-stroke, monochrome, Apple-SF-Symbols-like.
- **Substitution:** Use [Lucide](https://lucide.dev) from CDN (1.5px stroke, monochrome, tinted `currentColor`) as the nearest match to SF Symbols' thin outline style. Flagged as a substitution — replace with brand SVGs if supplied.
- Never emoji, never unicode dingbats as icons. Circular translucent chips (`rgba(210,210,215,0.64)`, 44×44) host icons floating over photography.

## Tokens

- `styles.css` — entry point (imports everything below)
- `tokens/colors.css` · `tokens/typography.css` · `tokens/spacing.css` (radii, elevation, frost, press scale) · `tokens/fonts.css` · `tokens/base.css`

## Index

- `readme.md` — this file
- `guidelines/` — foundation specimen cards (Design System tab)
- `components/` — (not yet built; extract from `ui_kits/website/site.css` patterns)
- `ui_kits/website/` — the Noble marketing site: `index.html` (home), `services.html`, `about.html`, `contact.html`, `site.css`. Clean static HTML/CSS, portable to any IDE.
- `SKILL.md` — agent skill entry point

## Intentional additions

- **Lucide CDN icons** — no icon set was provided; nearest thin-stroke match to the SF Symbols style described in the spec.

## Caveats

- **Fonts:** SF Pro Display/Text are Apple-proprietary; no font files were provided. The stack leads with `system-ui, -apple-system` (real SF Pro on Apple platforms) and falls back to Inter (Google Fonts, weights 300/400/600/700). Supply licensed font files to replace.
- **No logo** was provided; the wordmark is plain type. Supply a real mark to replace.
- **No photography** was provided; the site uses labeled gray placeholder blocks — swap each `.ph` / `.card-ph` div for a real `<img>`.
- Placeholder phone number `(800) 555-0199`, placeholder email, generic "metro area" service area — replace with real business details.
- Form validation/error states, hover-state documentation, and dark-mode card variants are undefined in the source spec and intentionally omitted.
