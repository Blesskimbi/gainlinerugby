import { skills } from "../data/site";
import { Container, Reveal, Section, SectionHeading } from "./ui";

/** "What You'll Work On" — the six coaching focus areas. */
export default function SkillsGrid() {
  return (
    <Section id="skills" className="bg-white">
      <Container>
        <SectionHeading
          eyebrow={skills.eyebrow}
          title={skills.title}
          className="mb-14"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 110}>
              <SkillCard {...item} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function SkillCard({ title, body, image }) {
  return (
    <article className="group relative flex min-h-[23rem] flex-col justify-end overflow-hidden corner-kick lift">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-linear-to-b from-transparent from-30% to-black"
        aria-hidden
      />

      <div className="relative p-6 sm:p-7">
        <h3 className="mb-2 font-display text-lg font-bold text-white">
          {title}
        </h3>
        {/* Body stays tucked away until hover, as in the original design */}
        <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 group-hover:grid-rows-[1fr] group-hover:opacity-100">
          <div className="overflow-hidden">
            <p className="text-sm leading-relaxed text-white/80">{body}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
