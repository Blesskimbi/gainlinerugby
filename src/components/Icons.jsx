// Inline SVG stand-ins for the icon fonts the original template loaded.
// currentColor everywhere so they inherit from whatever sits around them.

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

/** Rugby ball — the section marker used above every heading. */
export function Ball({ className = "size-5" }) {
  return (
    <svg {...base} className={className}>
      <g transform="rotate(-45 12 12)">
        <ellipse cx="12" cy="12" rx="10" ry="6" />
        <path d="M6.5 12h11" />
        <path d="M9 10.3v3.4M11 10.3v3.4M13 10.3v3.4M15 10.3v3.4" />
      </g>
    </svg>
  );
}

export function ChevronDown({ className = "size-4" }) {
  return (
    <svg {...base} className={className}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function ArrowRight({ className = "size-4" }) {
  return (
    <svg {...base} className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function Menu({ className = "size-6" }) {
  return (
    <svg {...base} className={className}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function Close({ className = "size-6" }) {
  return (
    <svg {...base} className={className}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function Play({ className = "size-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M8 5.5v13a1 1 0 0 0 1.5.87l11-6.5a1 1 0 0 0 0-1.74l-11-6.5A1 1 0 0 0 8 5.5Z" />
    </svg>
  );
}

export function Pin({ className = "size-4" }) {
  return (
    <svg {...base} className={className}>
      <path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function Mail({ className = "size-4" }) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </svg>
  );
}

export function Phone({ className = "size-4" }) {
  return (
    <svg {...base} className={className}>
      <path d="M5 3h3l2 5-2.5 1.5a12 12 0 0 0 6 6L15 13l5 2v3a2 2 0 0 1-2.2 2A16 16 0 0 1 3 5.2 2 2 0 0 1 5 3Z" />
    </svg>
  );
}

export function Star({ className = "size-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9L12 2.5Z" />
    </svg>
  );
}

export function Quote({ className = "size-8" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M9.5 5.5c-3 1.4-4.7 3.9-4.7 7.2V18a.8.8 0 0 0 .8.8h4.1a.8.8 0 0 0 .8-.8v-4.2a.8.8 0 0 0-.8-.8H7.4c.2-1.9 1.2-3.2 3-4l-.9-3.5ZM19.6 5.5c-3 1.4-4.7 3.9-4.7 7.2V18a.8.8 0 0 0 .8.8h4.1a.8.8 0 0 0 .8-.8v-4.2a.8.8 0 0 0-.8-.8H17.5c.2-1.9 1.2-3.2 3-4l-.9-3.5Z" />
    </svg>
  );
}

const SOCIAL_PATHS = {
  facebook:
    "M13.5 21v-7.3h2.5l.4-2.9h-2.9V8.9c0-.8.2-1.4 1.4-1.4h1.6V4.9c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.1H8v2.9h2.4V21h3.1Z",
  twitter:
    "M18.9 3h-2.6l-3.4 4-2.7-4H4.5l5.4 7.7L4.7 21h2.6l3.7-4.4 3 4.4h5.6l-5.7-8.2L18.9 3Zm-1.4 16.3h-1.4L7.2 4.6h1.5l8.8 14.7Z",
  instagram:
    "M12 7.4a4.6 4.6 0 1 0 0 9.2 4.6 4.6 0 0 0 0-9.2Zm0 7.6a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm5.9-7.8a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0ZM12 3.6c2.3 0 2.6 0 3.5.1 1 0 1.6.2 2.2.4a3.7 3.7 0 0 1 1.3.9c.4.4.7.8.9 1.3.2.6.4 1.2.4 2.2 0 1 .1 1.2.1 3.5s0 2.6-.1 3.5c0 1-.2 1.6-.4 2.2a3.7 3.7 0 0 1-.9 1.3 3.7 3.7 0 0 1-1.3.9c-.6.2-1.2.4-2.2.4-1 0-1.2.1-3.5.1s-2.6 0-3.5-.1c-1 0-1.6-.2-2.2-.4a3.7 3.7 0 0 1-1.3-.9 3.7 3.7 0 0 1-.9-1.3c-.2-.6-.4-1.2-.4-2.2 0-1-.1-1.2-.1-3.5s0-2.6.1-3.5c0-1 .2-1.6.4-2.2a3.7 3.7 0 0 1 .9-1.3 3.7 3.7 0 0 1 1.3-.9c.6-.2 1.2-.4 2.2-.4 1 0 1.2-.1 3.5-.1Zm0 1.6c-2.2 0-2.5 0-3.4.1-.8 0-1.2.2-1.5.3-.4.1-.6.3-.9.6-.3.3-.5.5-.6.9-.1.3-.3.7-.3 1.5 0 .9-.1 1.2-.1 3.4s0 2.5.1 3.4c0 .8.2 1.2.3 1.5.1.4.3.6.6.9.3.3.5.5.9.6.3.1.7.3 1.5.3.9 0 1.2.1 3.4.1s2.5 0 3.4-.1c.8 0 1.2-.2 1.5-.3.4-.1.6-.3.9-.6.3-.3.5-.5.6-.9.1-.3.3-.7.3-1.5 0-.9.1-1.2.1-3.4s0-2.5-.1-3.4c0-.8-.2-1.2-.3-1.5a2.3 2.3 0 0 0-.6-.9 2.3 2.3 0 0 0-.9-.6c-.3-.1-.7-.3-1.5-.3-.9 0-1.2-.1-3.4-.1Z",
  youtube:
    "M21.1 8.2a2.4 2.4 0 0 0-1.7-1.7C17.9 6.1 12 6.1 12 6.1s-5.9 0-7.4.4A2.4 2.4 0 0 0 2.9 8.2C2.5 9.7 2.5 12 2.5 12s0 2.3.4 3.8a2.4 2.4 0 0 0 1.7 1.7c1.5.4 7.4.4 7.4.4s5.9 0 7.4-.4a2.4 2.4 0 0 0 1.7-1.7c.4-1.5.4-3.8.4-3.8s0-2.3-.4-3.8ZM10.1 14.9V9.1l5 2.9-5 2.9Z",
  tiktok:
    "M17.5 2.5h-3.2v13.1a2.7 2.7 0 1 1-2.7-2.7c.3 0 .5 0 .8.1v-3.2a6 6 0 0 0-.8-.1 5.9 5.9 0 1 0 5.9 5.9V9.1a7 7 0 0 0 4.1 1.3V7.2a3.9 3.9 0 0 1-4.1-3.9v-.8Z",
  snapchat:
    "M12 2.6c2.6 0 4.4 1.9 4.5 4.5 0 .6 0 1.2-.1 1.8.3.1.6.1.9 0 .4-.1.8.1.9.4.1.4-.1.8-.5.9-.1 0-.3.1-.5.2-.5.2-1 .4-.9.9.1.4 1.3 2.5 3.2 2.8.3.1.5.3.5.6 0 .1 0 .2-.1.3-.3.7-1.6 1.1-2.6 1.3-.2 0-.2.1-.3.4l-.1.5c-.1.2-.2.4-.5.4h-.2c-.2 0-.5-.1-.9-.1-.3 0-.5 0-.8.1-.6.1-1.1.4-1.7.9-.6.5-1.3.8-2.1.8h-.3c-.8 0-1.5-.3-2.1-.8-.6-.5-1.1-.8-1.7-.9-.3-.1-.5-.1-.8-.1-.4 0-.7.1-.9.1h-.2c-.3 0-.4-.2-.5-.4l-.1-.5c-.1-.3-.1-.4-.3-.4-1-.2-2.3-.6-2.6-1.3 0-.1-.1-.2-.1-.3 0-.3.2-.5.5-.6 1.9-.3 3.1-2.4 3.2-2.8.1-.5-.4-.7-.9-.9-.2-.1-.4-.2-.5-.2-.4-.1-.6-.5-.5-.9.1-.3.5-.5.9-.4.3.1.6.1.9 0-.1-.6-.1-1.2-.1-1.8.1-2.6 1.9-4.5 4.5-4.5Z",
  whatsapp:
    "M12 2.8a9.1 9.1 0 0 0-7.8 13.8l-1.2 4.4 4.5-1.2A9.1 9.1 0 1 0 12 2.8Zm0 1.7a7.4 7.4 0 1 1-3.8 13.8l-.3-.2-2.7.7.7-2.6-.2-.3A7.4 7.4 0 0 1 12 4.5Zm-3.4 3.6c-.2 0-.4.1-.6.3-.2.2-.8.7-.8 1.8s.8 2.1.9 2.2c.1.1 1.5 2.4 3.8 3.3 1.9.7 2.3.6 2.7.6.4 0 1.3-.5 1.5-1.1.2-.5.2-1 .1-1.1-.1-.1-.2-.1-.4-.2l-1.4-.7c-.2-.1-.4-.1-.5.1l-.6.8c-.1.2-.3.2-.5.1-.2-.1-.9-.4-1.8-1.2-.7-.6-1.1-1.3-1.2-1.5-.1-.2 0-.3.1-.4l.4-.5c.1-.2.2-.3.2-.5 0-.1 0-.3-.1-.4l-.6-1.4c-.1-.4-.3-.3-.5-.3h-.4Z",
};

export function Social({ name, className = "size-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d={SOCIAL_PATHS[name] ?? SOCIAL_PATHS.facebook} />
    </svg>
  );
}

function Instagram({ className = "size-4" }) {
  return <Social name="instagram" className={className} />;
}

export function Check({ className = "size-4" }) {
  return (
    <svg {...base} className={className}>
      <path d="m4.5 12.5 5 5 10-11" />
    </svg>
  );
}

export function Clock({ className = "size-4" }) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.2l3.2 2" />
    </svg>
  );
}

export const CONTACT_ICONS = {
  mail: Mail,
  phone: Phone,
  pin: Pin,
  instagram: Instagram,
};

/* ── Pillar icons (replace the template's PNG icon files) ────────────────── */

function Whistle({ className = "size-12" }) {
  return (
    <svg {...base} strokeWidth="1.4" className={className}>
      <path d="M13.5 9H20a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1h-6.5" />
      <circle cx="8" cy="13" r="5" />
      <circle cx="8" cy="13" r="1.6" />
      <path d="M11 8.2 12.4 5M14 9.2 16.6 7" />
    </svg>
  );
}

function PlayerRun({ className = "size-12" }) {
  return (
    <svg {...base} strokeWidth="1.4" className={className}>
      <circle cx="15" cy="4.6" r="2.1" />
      <path d="M16.2 9.1 12 11l-2 4 2.8 2 .7 4.4" />
      <path d="m12 15-3.4 1.4L6 21" />
      <path d="M16.2 9.1 19 13" />
      <ellipse cx="8.6" cy="11.4" rx="2.4" ry="1.6" transform="rotate(-25 8.6 11.4)" />
    </svg>
  );
}

function Chart({ className = "size-12" }) {
  return (
    <svg {...base} strokeWidth="1.4" className={className}>
      <path d="M4 20V4M4 20h16" />
      <path d="M7.5 20v-4.5M12 20V11M16.5 20V7" />
      <path d="m6 11 4-3.5 3.5 2L19 4" />
    </svg>
  );
}

export const PILLAR_ICONS = {
  whistle: Whistle,
  player: PlayerRun,
  chart: Chart,
};

/* ── Credential icons ─────────────────────────────────────────────────────── */

function Badge({ className = "size-6" }) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="9" r="5.2" />
      <path d="m9 13.6-1.4 7L12 18.4l4.4 2.2-1.4-7" />
      <path d="m10.4 9 1.1 1.2 2.2-2.4" />
    </svg>
  );
}

function Shield({ className = "size-6" }) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3 4.8 5.8v5.4c0 4.2 3 7.8 7.2 9.1 4.2-1.3 7.2-4.9 7.2-9.1V5.8L12 3Z" />
      <path d="m9.2 11.8 2 2.1 3.6-4" />
    </svg>
  );
}

function Heart({ className = "size-6" }) {
  return (
    <svg {...base} className={className}>
      <path d="M12 20s-7.2-4.5-7.2-9.4A3.9 3.9 0 0 1 12 8.2a3.9 3.9 0 0 1 7.2 2.4C19.2 15.5 12 20 12 20Z" />
    </svg>
  );
}

export const CRED_ICONS = {
  badge: Badge,
  shield: Shield,
  heart: Heart,
  check: Check,
};
