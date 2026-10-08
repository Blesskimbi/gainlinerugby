# FILL-IN — replacing the demo data

The site now previews as a finished page. **Most of what it says is invented.**

Everything below is demo content: plausible, not true. In `src/data/site.js`
each value is tagged `// DEMO` or `// REAL` so you can see at a glance which
is which. Search the file for `DEMO` to find them all.

---

## 1. Verified — already correct, leave alone

From the GainLine Instagram profile:

| Fact | Value |
|---|---|
| Name | GainLine Rugby |
| Area | South Wales |
| Tagline | Develop. Perform. Dominate. |
| Positioning | Elite rugby coaching for ambitious players |
| Instagram | [@gainlinerugbycoaching](https://www.instagram.com/gainlinerugbycoaching/) |
| Facebook | [profile.php?id=61590333356743](https://www.facebook.com/profile.php?id=61590333356743) |
| TikTok | [@gainline.rugby](https://www.tiktok.com/@gainline.rugby) |
| Booking route | DM to book |
| Brand colours | lime `#B0E30C` on black `#121212` |
| Logo | real artwork, in use site-wide |

---

## 2. Social handles

**Live:** Instagram, Facebook, TikTok — all three wired and verified.

> The TikTok URL you sent carried an `fbclid` click-tracking parameter. It is
> stripped in `site.js`: that parameter identifies whoever copied the link and
> does nothing useful on your own outbound link.

**Still dimmed:** Snapchat and WhatsApp render greyed and non-clickable until
you supply handles — a guessed URL could point at a stranger's account. Paste
the real URL into `socials` in `site.js` and the icon lights up:

```js
{ label: "Snapchat", icon: "snapchat", href: "https://snapchat.com/t/..." },
```

Set `href: null` on any platform GainLine doesn't use, or delete the line.

*(Worth clicking the Facebook link once to confirm — `profile.php?id=` URLs
are valid but a numeric-ID link is more fragile than a claimed `/username`
one. If the page has a vanity URL, use that instead.)*

---

## 3. Demo content to replace

### Business facts

| Item | Demo value | Where |
|---|---|---|
| Coach name | **Rhys Morgan** — not a real person | `about.coach.name` |
| Coach bio | 15 yrs club game, WRU Level 2, back-row specialism | `about.coach.bio` |
| About story | "GainLine exists because club training…" | `about.body` |
| Coach quote | "Every player leaves knowing…" | `about.quote` |
| Email | hello@gainlinerugby.co.uk — domain not registered | `contact.details` |
| Phone | 07700 900123 — Ofcom's fiction range, cannot ring anyone | `contact.details` |
| Session times | Mon–Fri 16:00–21:00 etc. | `contact.hours` |

### Prices and durations — `sessionTypes.items`

| Session | Demo duration | Demo price |
|---|---|---|
| One-to-One | 60 minutes | £40 per session |
| Small Group | 75 minutes | £22 per player |
| Team & Squad | 90 minutes | On enquiry |

### Statistics — all invented

`hero.stats`, `about.stat`, `whyGainLine.stats`:
Players Coached **150**, Years Coaching **8**, Clubs Worked With **12**,
Sessions Delivered **900**, Clubs & Schools **12**.

Set a value to `null` and it renders a grey **TBC** instead of a number —
better than a wrong figure if you don't have the real one yet.

### Reviews — `testimonials.items`

Three invented reviews from "Hannah D.", "Cai T." and "Dewi P." **Replace with
real, permission-given reviews**, or empty the array and the whole section
removes itself. Instagram DMs and comments are a good source — ask first.

### Clubs & schools — `partners.items`

Six invented names (Cwmbrook RFC, St Ellis College, …). Rendered as **typeset
names, not crests**, on purpose: a club crest is their trademark and needs
written permission. Empty the array to hide the section.

### Camps — `camps.items`

Three invented dates at invented venues. Empty the array and the section shows
a tidy "no dates announced yet" message instead.

### Instagram captions — `feed.posts`

Three invented captions. Swap in real post thumbnails and point each `href` at
the actual post URL.

---

## 4. The enquiry form

`src/components/Contact.jsx`:

```js
const FORM_ENDPOINT = null;
```

While `null`, submitting shows an honest message telling the visitor to DM —
it never pretends to have sent anything. Point it at any endpoint accepting a
JSON POST and it starts working: [Formspree](https://formspree.io),
[Basin](https://usebasin.com), Netlify Forms, or your own handler.

Fields posted: `name`, `email`, `phone`, `ageGroup`, `position`, `message`.

---

## 5. Logo — done, with one caveat

The real GainLine logo is now in use across the site:

| Where | Asset |
|---|---|
| Header + mobile drawer | text wordmark (`Logo.jsx`, no image) |
| Footer | `gainline-logo.png` — full stacked lockup, the only on-page use |
| Browser tab | `favicon.ico` / `favicon.png` |
| Link previews | `og-image.jpg` (1200×630) |

The artwork is used **once** on the page, in the footer. Everywhere else is
type, so the logo stays an event rather than wallpaper. `gainline-mark.png`
(the GL monogram alone) is still in `public/images/` if you want it somewhere.

**Caveat:** these were rebuilt from your 1080px TikTok avatar with the black
background keyed out. That's plenty for screen use, but it is a raster
upscale, not the original artwork. **If you have the vector (SVG/AI/EPS) or a
transparent PNG from whoever designed it, send it** — it will be sharper on
high-DPI screens and scales for print.

Because the artwork is white + lime, it only reads on dark surfaces — which is
everywhere it is placed. `<Logo variant="wordmark" />` gives a type-only
fallback in brand colours for light backgrounds.

---

## 6. Photography — placeholder, and two things to know

24 image slots are filled from **13 distinct photos**, sourced from Openverse
under Creative Commons. No repeat appears twice inside the same grid.

**① Seven are CC0 (no obligations). Six are CC BY — these legally require
attribution for as long as they're on the site.** That's what the
"Photography credits" block in the footer is for (`ImageCredits.jsx`). Don't
delete it while those photos are in use.

**② They show real players from other clubs.** On a live commercial site this
implies they're GainLine's players, which isn't true. This is the strongest
reason to swap them out.

**The fix for both: use GainLine's own session photos.** You already have 16
Instagram posts — those are better for conversion anyway, carry no licence
burden, and let you delete `ImageCredits.jsx` and
`src/data/image-credits.json` entirely.

### Slot map

| File | Used for |
|---|---|
| `rugby-hero-bg.jpg` | Hero background (floodlit pitch) |
| `rugby-hero-action.jpg` | Hero feature photo, 16:9 |
| `rugby-coach.jpg` | About — coach portrait, 11:12 |
| `rugby-session-1/2.jpg` | About — collage pair |
| `rugby-juniors.jpg` | Who We Coach — Juniors |
| `rugby-agegrade.jpg` | Who We Coach — Age-Grade |
| `rugby-senior.jpg` | Who We Coach — Senior & Club |
| `rugby-position.jpg` | Who We Coach — Position-Specific |
| `rugby-turf.jpg` | Why GainLine — background |
| `rugby-team.jpg` | Why GainLine — photo |
| `skill-contact/breakdown/kicking/passing/conditioning/gamesense.jpg` | What You'll Work On, 9:11 portrait |
| `rugby-testimonial.jpg` | Reviews — side photo, 9:11 |
| `rugby-camp-bg.jpg` | Camps — background |
| `rugby-camp.jpg` | Camps — photo, 4:3 |
| `rugby-cta-bg.jpg` | Booking CTA — background |
| `feed-1/2/3.jpg` | Feed thumbnails, square |
| `pattern-ball.svg` | Ball watermark on Who We Coach cards |

Keep the filenames when you swap images and nothing else needs changing.

---

## 7. Brand colours — changed

The template's red has been replaced with the palette sampled from your logo:

| Token | Value | Used for |
|---|---|---|
| `--color-accent` | `#B0E30C` | brand lime — fills, buttons, text on dark |
| `--color-accent-deep` | `#8CB80A` | gradient end, hover |
| `--color-accent-ink` | `#466209` | accent **text on light backgrounds** |
| `--color-ink` | `#121212` | brand black |

The third one matters: lime on white is **1.5:1 contrast — unreadable**, well
below the 4.5:1 accessibility floor. So the site uses lime on dark surfaces
and the darkened green (7.0:1 on white) for accent text on light ones. Buttons
are lime with **black** text (12.4:1), matching the logo.

If you'd rather keep the template red, it's the four token values in
`src/index.css` — nothing else needs touching.

---

## 8. Legal

Footer **Privacy Policy** and **Terms** links point at `#`. The enquiry form
collects personal data, so a privacy policy is a UK GDPR requirement — these
need real pages, or remove the form.

If you coach under-18s, a safeguarding statement and DBS/WRU credentials are
worth adding; parents look for them.
