import { faq, INSTAGRAM } from "../data/site";
import { ChevronDown, Social } from "./Icons";
import { Button, Container, Reveal, Section, SectionHeading } from "./ui";

/**
 * Built on native <details>/<summary>: keyboard and screen-reader support
 * come for free, it works without JavaScript, and the browser's find-in-page
 * can open a closed answer.
 */
export default function FAQ() {
  if (faq.items.length === 0) return null;

  return (
    <Section id="faq" className="bg-white">
      <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal>
          <SectionHeading
            eyebrow={faq.eyebrow}
            title={faq.title}
            align="left"
            className="mb-6"
          />
          <p className="mb-7 text-base leading-relaxed text-muted">
            Still not sure? Send a message and we&rsquo;ll answer straight —
            including if we think we&rsquo;re not the right fit.
          </p>
          <Button
            href={INSTAGRAM}
            target="_blank"
            rel="noreferrer noopener"
            variant="accent"
            showArrow={false}
          >
            <Social name="instagram" className="size-4" />
            Ask a Question
          </Button>
        </Reveal>

        <Reveal delay={120} className="min-w-0">
          <div className="divide-y divide-ink/10 border-y border-ink/10">
            {faq.items.map((item) => (
              <details key={item.q} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left">
                  <h3 className="font-display text-base font-bold text-ink transition-colors group-hover:text-accent-ink sm:text-lg">
                    {item.q}
                  </h3>
                  <span className="flex size-8 shrink-0 items-center justify-center border border-ink/15 text-ink transition-all duration-300 corner-kick group-hover:border-accent-ink group-open:rotate-180 group-open:border-transparent group-open:bg-accent group-open:text-ink">
                    <ChevronDown className="size-4" />
                  </span>
                </summary>
                <p className="pr-14 pb-5 text-sm leading-relaxed text-muted">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
