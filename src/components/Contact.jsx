import { useState } from "react";
import { contact, INSTAGRAM } from "../data/site";
import { Clock, CONTACT_ICONS, Social } from "./Icons";
import { Button, Container, Reveal, Section, SectionHeading } from "./ui";

/**
 * Where the enquiry form posts. Null until a backend exists — see FILL-IN.md.
 * Any endpoint that accepts a POST of JSON works (Formspree, Basin, Netlify
 * Forms, your own handler). Set it and the form starts submitting for real.
 */
const FORM_ENDPOINT = null;

export default function Contact() {
  return (
    <Section id="contact" className="bg-paper">
      <Container>
        <SectionHeading
          eyebrow={contact.eyebrow}
          title={contact.title}
          className="mb-4"
        />
        <p className="mx-auto mb-14 max-w-2xl text-center text-base text-muted">
          {contact.blurb}
        </p>

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <Reveal>
            <div className="flex h-full flex-col bg-ink p-8 text-white corner-kick">
              <h3 className="mb-6 font-display text-xl font-bold">
                Get in touch
              </h3>

              <ul className="mb-7 space-y-4">
                {contact.details.map((item) => {
                  const Icon = CONTACT_ICONS[item.icon];
                  const external = item.href?.startsWith("http");
                  const body = (
                    <>
                      <Icon className="size-4 shrink-0 text-accent" />
                      {item.label}
                    </>
                  );
                  return (
                    <li key={item.label}>
                      {item.href ? (
                        <a
                          href={item.href}
                          {...(external
                            ? { target: "_blank", rel: "noreferrer noopener" }
                            : {})}
                          className="inline-flex items-center gap-3 text-sm text-white/80 transition-colors hover:text-accent"
                        >
                          {body}
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-3 text-sm text-white/80">
                          {body}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>

              <div className="mb-8 border-t border-white/10 pt-6">
                <p className="mb-3 flex items-center gap-2 text-xs font-bold tracking-widest text-white/50 uppercase">
                  <Clock className="size-4 text-accent" />
                  Session times
                </p>
                <ul className="space-y-1.5">
                  {contact.hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex justify-between gap-4 text-sm text-white/70"
                    >
                      <span>{h.day}</span>
                      <span className="text-white/90">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto border-t border-white/10 pt-7">
                <p className="mb-4 text-sm text-white/60">
                  Quickest way to reach us:
                </p>
                <Button
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noreferrer noopener"
                  variant="accent"
                  showArrow={false}
                  className="w-full justify-center"
                >
                  <Social name="instagram" className="size-4" />
                  Message on Instagram
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <EnquiryForm />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

function EnquiryForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));

    // Be honest rather than show a fake success message.
    if (!FORM_ENDPOINT) {
      setStatus("error");
      setError(
        "This form isn't connected to an inbox yet. Please send the same details as an Instagram DM and we'll reply there.",
      );
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      setStatus("sent");
      event.target.reset();
    } catch {
      setStatus("error");
      setError("Something went wrong sending that. Please try again, or DM us.");
    }
  };

  if (status === "sent") {
    return (
      <div className="flex h-full flex-col items-center justify-center bg-white p-10 text-center corner-kick">
        <h3 className="mb-2 font-display text-xl font-bold text-ink">
          Enquiry sent
        </h3>
        <p className="text-sm text-muted">
          Thanks — we&rsquo;ll come back to you with a plan and available dates.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="bg-white p-8 corner-kick">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field name="name" label="Your name" required />
        <Field name="email" label="Email" type="email" required />
        <Field name="phone" label="Phone (optional)" type="tel" />
        <Field name="ageGroup" label="Age group" placeholder="e.g. U16" />
        <Field
          name="position"
          label="Position"
          placeholder="e.g. Openside flanker"
          className="sm:col-span-2"
        />
        <Field
          name="message"
          label="What do you want to work on?"
          as="textarea"
          required
          className="sm:col-span-2"
        />
      </div>

      <Button
        as="button"
        type="submit"
        variant="accent"
        disabled={status === "sending"}
        className="mt-6 w-full justify-center disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send Enquiry"}
      </Button>

      {status === "error" && (
        <p
          role="alert"
          className="mt-4 border-l-4 border-accent-ink bg-accent-ink/5 p-4 text-sm leading-relaxed text-body"
        >
          {error}{" "}
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noreferrer noopener"
            className="font-semibold text-accent-ink underline"
          >
            Open Instagram
          </a>
        </p>
      )}
    </form>
  );
}

function Field({
  name,
  label,
  as = "input",
  type = "text",
  required = false,
  placeholder,
  className = "",
}) {
  const Tag = as;
  const id = `field-${name}`;
  const shared =
    "w-full border border-ink/15 bg-paper px-4 py-3 text-sm text-body transition-colors corner-kick placeholder:text-muted/50 focus:border-accent-ink focus:bg-white focus:outline-2 focus:outline-accent-ink/30";

  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="mb-1.5 block text-xs font-semibold tracking-wide text-ink uppercase"
      >
        {label}
        {required && <span className="ml-0.5 text-accent-ink">*</span>}
      </label>
      <Tag
        id={id}
        name={name}
        required={required}
        placeholder={placeholder}
        {...(as === "input" ? { type } : { rows: 4 })}
        className={shared}
      />
    </div>
  );
}
