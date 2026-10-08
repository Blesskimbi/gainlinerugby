import { feed } from "../data/site";
import { Social } from "./Icons";
import { Button, Container, Reveal, Section, SectionHeading } from "./ui";

/** "Straight from the Feed" — hand-curated Instagram highlights. */
export default function Feed() {
  return (
    <Section id="feed" className="bg-white">
      <Container>
        <SectionHeading
          eyebrow={feed.eyebrow}
          title={feed.title}
          className="mb-4"
        />
        <p className="mx-auto mb-12 max-w-2xl text-center text-base text-muted">
          {feed.blurb}
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {feed.posts.map((post, i) => (
            <Reveal key={i} delay={i * 120}>
              <PostCard {...post} />
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            href={feed.cta.href}
            target="_blank"
            rel="noreferrer noopener"
            variant="dark"
            showArrow={false}
          >
            <Social name="instagram" className="size-4" />
            {feed.cta.label}
          </Button>
        </div>
      </Container>
    </Section>
  );
}

function PostCard({ caption, image, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="group block overflow-hidden corner-kick lift"
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt=""
          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors duration-300 group-hover:bg-ink/55">
          <Social
            name="instagram"
            className="size-9 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        </div>
      </div>
      <p className="bg-paper p-5 text-sm leading-relaxed text-muted">
        {caption}
      </p>
    </a>
  );
}
