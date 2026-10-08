// ─────────────────────────────────────────────────────────────────────────────
// GainLine Rugby — all site copy and image paths.
//
// ⚠ THIS FILE CONTAINS DEMO DATA.
//
// Values marked `DEMO` below are invented so the site previews as a finished
// page. They are plausible, not true. Every one must be replaced or deleted
// before the site goes live. FILL-IN.md lists them all.
//
// Values marked `REAL` come from the GainLine profiles or were supplied by
// the client, and are accurate as given.
//
// Safe-by-design choices inside the demo data:
//   • The phone number uses Ofcom's 07700 900xxx range, reserved for drama
//     and fiction — it cannot ring a real person.
//   • The email uses a domain that is not registered to anyone.
//   • Snapchat and WhatsApp are `null` until real handles are supplied, and
//     render dimmed rather than pointing somewhere wrong.
// ─────────────────────────────────────────────────────────────────────────────

/* REAL — supplied by the client. The TikTok link had an `fbclid` click-tracking
   parameter on it, which is stripped here: it identifies whoever copied the
   link and serves no purpose on an outbound link of your own. */
export const INSTAGRAM = "https://www.instagram.com/gainlinerugbycoaching/";
export const FACEBOOK = "https://www.facebook.com/profile.php?id=61590333356743";
export const TIKTOK = "https://www.tiktok.com/@gainline.rugby";

export const brand = {
  name: "GainLine", // REAL
  suffix: "Rugby", // REAL
  location: "South Wales", // REAL
  tagline: "Develop. Perform. Dominate.", // REAL
  strap: "Elite rugby coaching for ambitious players.", // REAL
  blurb:
    "One-to-one and small-group rugby coaching across South Wales, built around the player in front of us.",
};

export const nav = [
  { label: "Coaching", href: "#sessions" },
  { label: "About", href: "#about" },
  { label: "Camps", href: "#camps" },
  { label: "Reviews", href: "#testimonials" },
  { label: "FAQs", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

// `href: null` renders the icon dimmed and non-clickable. Paste the real
// profile URL to switch one on — nothing else needs changing.
export const socials = [
  { label: "Instagram", icon: "instagram", href: INSTAGRAM }, // REAL
  { label: "Facebook", icon: "facebook", href: FACEBOOK }, // REAL
  { label: "TikTok", icon: "tiktok", href: TIKTOK }, // REAL
  { label: "Snapchat", icon: "snapchat", href: null }, // handle needed
  { label: "WhatsApp", icon: "whatsapp", href: null }, // handle needed
];

export const hero = {
  eyebrow: "Elite Rugby Coaching · South Wales", // REAL
  title: "Develop. Perform. Dominate.", // REAL
  blurb:
    "One-to-one and small-group rugby coaching for ambitious players. Built around your position, your goals and the level you're chasing.",
  primaryCta: { label: "Book a Session", href: "#contact" },
  secondaryCta: { label: "See Session Types", href: "#sessions" },
  background: "/images/rugby-hero-bg.webp",
  action: "/images/rugby-hero-action.webp",
  stats: [
    { label: "Players Coached", value: 150 }, // DEMO
    { label: "Years Coaching", value: 8 }, // DEMO
    { label: "Clubs Worked With", value: 12 }, // DEMO
  ],
};

// DEMO — these are serious claims for anyone coaching minors. Do not publish
// a credential GainLine does not actually hold. Delete any that don't apply;
// the strip hides itself if the array is empty.
export const credentials = {
  note: "Qualified, insured and safeguarding-trained.",
  items: [
    { label: "WRU Level 2", detail: "Qualified coach", icon: "badge" },
    { label: "DBS Checked", detail: "Enhanced, current", icon: "shield" },
    { label: "Fully Insured", detail: "Public liability", icon: "check" },
    { label: "Safeguarding", detail: "Trained & certified", icon: "heart" },
  ],
};

export const process = {
  eyebrow: "How It Works",
  title: "Four Steps from First Message to First Session",
  blurb:
    "No contracts, no joining fee. Most players are training within a week of getting in touch.",
  steps: [
    {
      n: "01",
      title: "Get in Touch",
      body: "Send a DM or use the enquiry form. Tell us your age group, position and what you want to work on.",
    },
    {
      n: "02",
      title: "Quick Chat",
      body: "A short call or message thread to understand where you are now and what selection you're chasing.",
    },
    {
      n: "03",
      title: "Your Plan",
      body: "We agree a focus and a block length, then book dates that fit around club training and school.",
    },
    {
      n: "04",
      title: "Train & Review",
      body: "Session-by-session feedback, with a proper review at the end of the block so progress is measurable.",
    },
  ],
};

// DEMO answers — the specifics (travel radius, kit, cancellation terms,
// payment) must be replaced with GainLine's actual policies.
export const faq = {
  eyebrow: "FAQs",
  title: "Questions Players and Parents Ask",
  items: [
    {
      q: "Where do sessions take place?",
      a: "We travel across South Wales and will usually come to your club pitch, school or a nearby 3G. If you don't have access to a surface, tell us where you're based and we'll suggest somewhere close.",
    },
    {
      q: "What age do you coach from?",
      a: "From U8 right through to senior club level. Junior sessions focus on safe technique and confidence; age-grade and senior work gets far more position-specific.",
    },
    {
      q: "What should I bring?",
      a: "Boots for the surface, a gum shield, a drink and warm layers. We bring the balls, cones, pads and anything else the session needs.",
    },
    {
      q: "Do I need to be at a club already?",
      a: "No. Plenty of players come to us before joining a club, or while deciding whether to go back after a break. We'll be honest about whether a session is the right next step for you.",
    },
    {
      q: "Can parents watch?",
      a: "Always, and we'd encourage it for juniors. You'll get a clear summary at the end of every session of what was worked on and what to practise before the next one.",
    },
    {
      q: "What if we need to cancel?",
      a: "Let us know at least 24 hours before and we'll rebook at no cost. Sessions called off for weather are always rescheduled free.",
    },
  ],
};

export const sessionTypes = {
  eyebrow: "Session Types",
  title: "Three Ways to Train with GainLine",
  blurb:
    "Every session is position-specific and goal-led. Pick the format that suits you — or message us and we'll advise.",
  items: [
    {
      name: "One-to-One",
      summary:
        "A full session built entirely around you. Maximum reps, immediate feedback, and a clear focus agreed before you start.",
      bestFor: "Players chasing selection or fixing a specific weakness",
      duration: "60 minutes", // DEMO
      price: "£40 per session", // DEMO
      featured: false,
    },
    {
      name: "Small Group",
      summary:
        "Two to four players training together. Competitive, high-tempo, and still small enough for individual coaching on every rep.",
      bestFor: "Teammates, siblings or friends in the same position group",
      duration: "75 minutes", // DEMO
      price: "£22 per player", // DEMO
      featured: true,
    },
    {
      name: "Team & Squad",
      summary:
        "Club or school squad sessions. Contact, breakdown, attack shape or defensive system — scoped with your coaches beforehand.",
      bestFor: "Club and school squads across South Wales",
      duration: "90 minutes", // DEMO
      price: "On enquiry",
      featured: false,
    },
  ],
};

export const about = {
  eyebrow: "About GainLine",
  title: "Elite Rugby Coaching for Ambitious Players", // REAL (bio line)
  body: "GainLine exists because club training can only do so much. With twenty-five players on the field and one session a week, the detail that decides selection rarely gets coached. We work with one to four players at a time, on the specific part of your game that is holding you back — and we keep working on it until it holds up under pressure.", // DEMO
  quote:
    "“Every player leaves knowing exactly what they did well, what they need to fix, and how to practise it on their own.”", // DEMO
  coach: {
    name: "Rhys Morgan", // DEMO — not a real person
    role: "Head Coach, GainLine Rugby",
    bio: "Fifteen years in the Welsh club game, eight of them coaching. WRU Level 2 qualified, with a background in age-grade pathway coaching and a specialism in back-row and half-back play.", // DEMO
    portrait: "/images/rugby-coach.webp",
  },
  cta: { label: "Book a Session", href: "#contact" },
  gallery: ["/images/rugby-session-1.webp", "/images/rugby-session-2.webp"],
  stat: { label: "Years Coaching", value: 8 }, // DEMO
};

export const whoWeCoach = {
  eyebrow: "Who We Coach",
  title: "From First Contact to Academy Level",
  items: [
    {
      title: "Juniors",
      age: "U8 – U12",
      body: "Core skills, confidence and a genuine love of the game. Safe technique first, always.",
      image: "/images/rugby-juniors.webp",
    },
    {
      title: "Age-Grade",
      age: "U13 – U18",
      body: "The years that decide selection. Position-specific detail, physicality and decision-making under pressure.",
      image: "/images/rugby-agegrade.webp",
    },
    {
      title: "Senior & Club",
      age: "18+",
      body: "Sharpen a specific part of your game, or rebuild a skill that has gone stale. Honest coaching, no filler.",
      image: "/images/rugby-senior.webp",
    },
    {
      title: "Position-Specific",
      age: "All ages",
      body: "Front row, half-backs, back three — detailed work on the demands of your actual shirt number.",
      image: "/images/rugby-position.webp",
    },
  ],
};

export const whyGainLine = {
  eyebrow: "Why GainLine",
  title: "Coaching That Actually Moves the Needle",
  body: "Club training has to serve twenty-five players at once. A GainLine session serves one to four — so every rep is watched, corrected and repeated until it holds up under pressure.",
  background: "/images/rugby-turf.webp",
  image: "/images/rugby-team.webp",
  stats: [
    { label: "Players Coached", value: 150 }, // DEMO
    { label: "Sessions Delivered", value: 900 }, // DEMO
    { label: "Clubs & Schools", value: 12 }, // DEMO
  ],
  pillars: [
    {
      title: "Individual Attention",
      body: "One to four players per session. You are never a number in a queue waiting for a turn on the bag.",
      icon: "whistle",
    },
    {
      title: "Position-Specific",
      body: "A tighthead and a full-back need different sessions. Yours is built around the role you actually play.",
      icon: "player",
    },
    {
      title: "Measurable Progress",
      body: "Clear goals set at the start of a block, reviewed at the end. You should be able to feel the difference.",
      icon: "chart",
    },
  ],
};

// DEMO — every review below is invented. Replace with real, permission-given
// reviews, or empty this array and the whole section removes itself.
export const testimonials = {
  eyebrow: "Reviews",
  title: "What Players and Parents Say",
  image: "/images/rugby-testimonial.webp",
  items: [
    {
      quote:
        "Six weeks of one-to-one work and my son's lineout throwing went from the thing he dreaded to the reason he got picked. The difference in his confidence is the bit we didn't expect.",
      name: "Hannah D.",
      role: "Parent, U16 hooker",
    },
    {
      quote:
        "I'd been stuck at the same level for two seasons. First session we found the problem in my clearout angle — something nobody at club had ever picked up. Regional trial came three months later.",
      name: "Cai T.",
      role: "Age-grade player",
    },
    {
      quote:
        "We brought GainLine in for a squad block on defensive line speed. Properly planned, the lads bought into it immediately, and it showed on the Saturday. We'll be booking again.",
      name: "Dewi P.",
      role: "Club coach, South Wales",
    },
  ],
};

export const skills = {
  eyebrow: "What You'll Work On",
  title: "The Detail That Wins Selection",
  items: [
    {
      title: "Contact & Collision",
      body: "Safe, legal, dominant. Body height, leg drive and the confidence to go looking for contact.",
      image: "/images/skill-contact.webp",
    },
    {
      title: "The Breakdown",
      body: "Jackal technique, clearout angles and the split-second read on whether to compete or move on.",
      image: "/images/skill-breakdown.webp",
    },
    {
      title: "Kicking",
      body: "Out of hand and off the tee. Technique, consistency under fatigue, and knowing which kick the picture calls for.",
      image: "/images/skill-kicking.webp",
    },
    {
      title: "Handling & Passing",
      body: "Both hands, off both feet, under pressure. Pass length, accuracy and catching on the move.",
      image: "/images/skill-passing.webp",
    },
    {
      title: "Strength & Conditioning",
      body: "Rugby-specific speed, power and the repeat-effort capacity to still be effective on eighty minutes.",
      image: "/images/skill-conditioning.webp",
    },
    {
      title: "Game Sense",
      body: "Scanning, communication and decision-making. The part of the game that separates good from selected.",
      image: "/images/skill-gamesense.webp",
    },
  ],
};

// DEMO — invented club names. Only use a real crest with written permission.
export const partners = {
  eyebrow: "Trusted By",
  title: "Clubs & Schools We Work With",
  items: [
    { name: "Cwmbrook RFC", kind: "Club" },
    { name: "St Ellis College", kind: "School" },
    { name: "Vale Valleys RFC", kind: "Club" },
    { name: "Penhadley Academy", kind: "School" },
    { name: "Riverside Youth RFC", kind: "Club" },
    { name: "Ogmore Comprehensive", kind: "School" },
  ],
};

// DEMO — invented dates and venues. Empty this array and the section shows a
// tidy "no dates announced yet" message instead.
export const camps = {
  eyebrow: "Camps & Blocks",
  title: "Upcoming Dates",
  blurb:
    "Holiday camps and multi-week coaching blocks across South Wales. Places are limited and usually go via DM first.",
  cta: { label: "Enquire About a Place", href: "#contact" },
  background: "/images/rugby-camp-bg.webp",
  photo: "/images/rugby-camp.webp",
  items: [
    {
      name: "Easter Skills Camp",
      date: "7 Apr",
      time: "10:00 – 14:00",
      venue: "Cwmbrook RFC, Caerphilly",
      ageGroup: "U12 – U16",
      spaces: "6 left",
    },
    {
      name: "Back-Row Masterclass",
      date: "21 Apr",
      time: "18:00 – 20:00",
      venue: "Vale Valleys RFC, Bridgend",
      ageGroup: "U16 – Senior",
      spaces: "4 left",
    },
    {
      name: "Summer Block (6 weeks)",
      date: "3 Jun",
      time: "Tue & Thu, 18:30",
      venue: "Riverside 3G, Newport",
      ageGroup: "U14 – U18",
      spaces: "Waitlist",
    },
  ],
};

// DEMO captions. Swap in real post thumbnails and point each href at the
// actual Instagram post.
export const feed = {
  eyebrow: "Latest",
  title: "Straight from the Feed",
  blurb: "Session clips, player progress and camp announcements.",
  cta: { label: "Follow @gainlinerugbycoaching", href: INSTAGRAM },
  posts: [
    {
      caption:
        "Clearout angles with the U16s. Low, square, and through the shoulder — not around it.",
      image: "/images/feed-1.webp",
      href: INSTAGRAM,
    },
    {
      caption:
        "Tee work in the wind at Cwmbrook. Same routine every time, whatever the weather is doing.",
      image: "/images/feed-2.webp",
      href: INSTAGRAM,
    },
    {
      caption:
        "Full squad block done. Line speed looked a different animal by the end of the six weeks.",
      image: "/images/feed-3.webp",
      href: INSTAGRAM,
    },
  ],
};

export const bookCta = {
  eyebrow: "Get Started",
  title: "Ready to Train? Let's Find Your Gainline.",
  blurb:
    "Tell us your position, your age group and what you want to improve. We'll come back with a plan and available dates.",
  primaryCta: { label: "Message on Instagram", href: INSTAGRAM },
  secondaryCta: { label: "Send an Enquiry", href: "#contact" },
  background: "/images/rugby-cta-bg.webp",
};

export const contact = {
  eyebrow: "Contact",
  title: "Book a Session",
  blurb:
    "Fastest reply is always a DM. Prefer email? Use the form and we'll get back to you.",
  details: [
    { label: "@gainlinerugbycoaching", href: INSTAGRAM, icon: "instagram" }, // REAL
    { label: "hello@gainlinerugby.co.uk", href: "mailto:hello@gainlinerugby.co.uk", icon: "mail" }, // DEMO
    { label: "07700 900123", href: "tel:+447700900123", icon: "phone" }, // DEMO (Ofcom fiction range)
    { label: "South Wales — we travel to you", href: null, icon: "pin" }, // REAL
  ],
  hours: [
    { day: "Mon – Fri", time: "16:00 – 21:00" }, // DEMO
    { day: "Saturday", time: "09:00 – 16:00" }, // DEMO
    { day: "Sunday", time: "By arrangement" }, // DEMO
  ],
};

export const footer = {
  links: [
    { label: "Session Types", href: "#sessions" },
    { label: "Who We Coach", href: "#who" },
    { label: "What You'll Work On", href: "#skills" },
    { label: "How It Works", href: "#process" },
    { label: "Camps & Blocks", href: "#camps" },
    { label: "FAQs", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  copyright: `© ${new Date().getFullYear()} GainLine Rugby. All rights reserved.`,
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms", href: "#" },
  ],
};
