import { whoWeCoach } from "../data/site";
import { ArrowRight } from "./Icons";
import { Container, Reveal, Section, SectionHeading } from "./ui";

export default function WhoWeCoach() {
  return (
    <Section id="who" className="bg-white">
      <Container>
        <SectionHeading
          eyebrow={whoWeCoach.eyebrow}
          title={whoWeCoach.title}
          className="mb-14"
        />

        <div className="grid gap-7 lg:grid-cols-2">
          {whoWeCoach.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <GroupCard {...item} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function GroupCard({ title, age, body, image }) {
  return (
    <article className="group relative flex min-h-[26rem] items-end overflow-hidden corner-kick lift">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/10 to-transparent"
        aria-hidden
      />

      {/* White panel carrying the ball pattern, which drifts on hover */}
      <div
        className="relative m-5 w-full bg-white bg-[length:70%_auto] bg-[position:right_-20px_top_-10px] bg-no-repeat p-6 transition-[background-position] duration-500 corner-kick group-hover:bg-[position:right_-4px_top_-10px] sm:m-6 sm:w-[82%] sm:p-7 lg:w-[78%]"
        style={{ backgroundImage: "url(/images/pattern-ball.svg)" }}
      >
        <p className="mb-1.5 text-[0.65rem] font-bold tracking-widest text-accent-ink uppercase">
          {age}
        </p>
        <h3 className="mb-2.5 font-display text-xl font-bold text-ink sm:text-[1.35rem]">
          {title}
        </h3>
        <p className="mb-5 text-sm leading-relaxed text-muted">{body}</p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-accent-ink uppercase transition-colors hover:text-ink"
        >
          Enquire
          <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </article>
  );
}
