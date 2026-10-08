# GainLine Rugby

Marketing site for **GainLine Rugby** — elite rugby coaching for ambitious
players across South Wales.
[@gainlinerugbycoaching](https://www.instagram.com/gainlinerugbycoaching/)

> ### ⚠ This site is filled with DEMO DATA
>
> Prices, stats, reviews, camp dates, the coach's name, the email and the
> phone number are all **invented** so the page previews as finished. Every
> value in `src/data/site.js` is tagged `// DEMO` or `// REAL`.
>
> **Work through [FILL-IN.md](./FILL-IN.md) before this goes anywhere public.**

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static output in dist/
npm run preview  # serve the production build
```

## Stack

| | |
|---|---|
| Build | Vite 8 |
| UI | React 19 |
| Styling | Tailwind CSS v4 (CSS-first config, no `tailwind.config.js`) |
| Fonts | Barlow + Quantico via Google Fonts |

No runtime dependencies beyond React — the carousel, marquee, counters and
scroll reveals are all hand-rolled.

## Page structure

| Section | Component | `id` |
|---|---|---|
| Sticky header | `Header` | — |
| Hero — Develop. Perform. Dominate. | `Hero` | `#home` |
| Session Types — 1-to-1 / small group / squad | `SessionTypes` | `#sessions` |
| About + the coach | `About` | `#about` |
| Who We Coach — juniors → position-specific | `WhoWeCoach` | `#who` |
| Why GainLine — pillars + stats | `WhyGainLine` | `#why` |
| Reviews carousel | `Testimonials` | `#testimonials` |
| What You'll Work On — six skill areas | `SkillsGrid` | `#skills` |
| Clubs & Schools | `Partners` | `#partners` |
| Upcoming Camps & Blocks | `UpcomingCamps` | `#camps` |
| Straight from the Feed | `Feed` | `#feed` |
| Booking CTA | `BookCTA` | — |
| Contact — details + enquiry form | `Contact` | `#contact` |
| Footer | `Footer` | — |

## Editing content

Everything the visitor reads lives in **`src/data/site.js`**. Components hold
no hard-coded copy, so retitling a section, repricing a session or swapping a
photo is a one-line change there.

Two sections remove themselves when their data array is emptied:

- `testimonials.items` → the Reviews section disappears entirely
- `camps.items` → shows "no dates announced yet" instead

## Honest-by-default behaviour

Demo data fills the page, but four mechanisms stop the site asserting
something false in a way that's hard to spot:

- **Stats render `TBC`** when their value is `null` (`Stat` in `ui.jsx`), so
  an unknown figure never has to be guessed.
- **The enquiry form refuses to fake success.** While `FORM_ENDPOINT` is
  `null` in `Contact.jsx`, submitting shows a message pointing the visitor to
  Instagram instead of a "thanks, we'll be in touch" that goes nowhere.
- **Unset social links render dimmed and non-clickable** (`SocialLinks.jsx`)
  rather than pointing at `#` or a guessed handle.
- **The logo is type, not an image** (`Logo.jsx`), so no other business's mark
  ships by accident.

Two sections delete themselves when their data array is emptied —
`testimonials.items` and `camps.items` — so showing nothing is always an
option.

## Design tokens

Declared in `src/index.css` under `@theme`:

| Token | Value | Role |
|---|---|---|
| `--color-ink` | `#121212` | brand black |
| `--color-body` | `#2C2C2C` | body text |
| `--color-muted` | `#5A5A5A` | secondary text |
| `--color-line` | `#ECECEC` | headings on dark |
| `--color-paper` | `#F5F4F4` | alternating section background |
| `--color-accent` | `#B0E30C` | brand lime — fills, text on dark |
| `--color-accent-deep` | `#8CB80A` | gradient end, hover |
| `--color-accent-ink` | `#466209` | accent text on light surfaces |
| `--color-gold` | `#FEC42D` | review stars |
| `--font-sans` | Barlow | headings and body |
| `--font-display` | Quantico | eyebrows, card titles, wordmark |

Custom utilities in the same file: `corner-kick` (the `0 12px 0 12px`
asymmetric radius used throughout), `btn-accent` (lime gradient that flips on
hover, always black label), `eyebrow` (small-caps section label).

**Lime is dark-surface only.** It scores 12.4:1 on brand black but 1.5:1 on
white, so accent *text* on light backgrounds uses `--color-accent-ink`
(7.0:1). `SectionHeading` and `Stat` pick the right one from their `tone`
prop; buttons use black text on lime.

## Accessibility & responsiveness

- Verified free of horizontal overflow down to 360px.
- Counters and scroll reveals respect `prefers-reduced-motion`, and content is
  shown immediately if `IntersectionObserver` is unavailable — it can never be
  left stuck invisible.
- Skip-to-content link, labelled icon buttons, and a form with real `<label>`
  elements.
- Every accent/background pairing checked against WCAG AA.

## Photography

24 image slots are filled from 13 Creative Commons photos sourced via
Openverse — 7 CC0 and 6 CC BY. **The CC BY images legally require the credit
block in the footer** (`ImageCredits.jsx`, data in
`src/data/image-credits.json`) for as long as they are on the site.

They also show real players from other clubs, which on a live site implies
they are GainLine's. Replacing them with GainLine's own session photos fixes
both issues and lets you delete the credits component. See
[FILL-IN.md](./FILL-IN.md) §6.

## Credits

Built on the layout of the *Kicks* Elementor template kit by CreedCreatives,
rewritten from scratch in React.
