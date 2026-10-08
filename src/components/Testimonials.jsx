import { useEffect, useState } from "react";
import { testimonials } from "../data/site";
import { ArrowRight, Quote, Star } from "./Icons";
import { Container, Reveal, SectionHeading } from "./ui";

const AUTOPLAY_MS = 7000;

export default function Testimonials() {
  const items = testimonials.items;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = (next) => setIndex((next + items.length) % items.length);

  useEffect(() => {
    if (paused || items.length < 2) return;
    const timer = setTimeout(() => go(index + 1), AUTOPLAY_MS);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, paused]);

  // Empty the `items` array in site.js and the section removes itself, which
  // is the right look until there are real reviews to show.
  if (items.length === 0) return null;

  return (
    <section id="testimonials" className="bg-paper py-20 lg:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
        {/* min-w-0: without it this grid track is sized by the combined
            min-content of all the slides and pushes the page sideways. */}
        <Reveal className="min-w-0">
          <SectionHeading
            eyebrow={testimonials.eyebrow}
            title={testimonials.title}
            align="left"
            className="mb-10"
          />

          <div
            className="relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {items.map((item, i) => (
                  <figure
                    key={i}
                    className="w-full shrink-0 bg-white p-7 corner-kick sm:p-9"
                  >
                    <Quote className="mb-4 size-8 text-accent-ink/25" />
                    <blockquote className="mb-6 text-base leading-relaxed text-muted">
                      {item.quote}
                    </blockquote>
                    <div className="mb-4 flex gap-1 text-gold">
                      {Array.from({ length: 5 }, (_, s) => (
                        <Star key={s} className="size-4" />
                      ))}
                    </div>
                    <figcaption className="border-t border-line pt-5">
                      <p className="font-display text-base font-bold text-ink">
                        {item.name}
                      </p>
                      <p className="text-sm text-accent-ink">{item.role}</p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>

            {items.length > 1 && (
              <div className="mt-7 flex items-center gap-5">
                <div className="flex gap-2.5">
                  <button
                    type="button"
                    onClick={() => go(index - 1)}
                    aria-label="Previous review"
                    className="flex size-11 items-center justify-center bg-ink text-white transition-colors corner-kick hover:bg-accent hover:text-ink"
                  >
                    <ArrowRight className="size-4 rotate-180" />
                  </button>
                  <button
                    type="button"
                    onClick={() => go(index + 1)}
                    aria-label="Next review"
                    className="flex size-11 items-center justify-center bg-ink text-white transition-colors corner-kick hover:bg-accent hover:text-ink"
                  >
                    <ArrowRight className="size-4" />
                  </button>
                </div>

                <div className="flex gap-2">
                  {items.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => go(i)}
                      aria-label={`Show review ${i + 1}`}
                      aria-current={i === index}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === index
                          ? "w-7 bg-accent-ink"
                          : "w-3 bg-ink/20 hover:bg-ink/40"
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </Reveal>

        <Reveal delay={150} className="hidden lg:block">
          <img
            src={testimonials.image}
            alt=""
            className="mx-auto w-full max-w-md object-contain"
            loading="lazy"
          />
        </Reveal>
      </Container>
    </section>
  );
}
