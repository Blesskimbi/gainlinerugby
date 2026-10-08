import { brand, footer } from "../data/site";
import Logo from "./Logo";
import ImageCredits from "./ImageCredits";
import SocialLinks from "./SocialLinks";
import { Container } from "./ui";

export default function Footer() {
  return (
    <footer className="bg-ink pt-16 pb-8 text-white/70">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo variant="full" className="mb-5 h-28" />
            <p className="max-w-sm text-sm leading-relaxed">{brand.blurb}</p>
          </div>

          <div>
            <h2 className="mb-5 font-display text-base font-bold tracking-wide text-white uppercase">
              Explore
            </h2>
            <ul>
              {footer.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="block py-1.5 text-sm transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-5 font-display text-base font-bold tracking-wide text-white uppercase">
              Follow
            </h2>
            <p className="mb-4 text-sm leading-relaxed">
              Session clips and camp dates go up on Instagram first.
            </p>
            <SocialLinks size="lg" variant="tile" />
          </div>
        </div>

        <ImageCredits />

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-center sm:flex-row sm:text-left">
          <p className="text-xs">{footer.copyright}</p>
          <ul className="flex gap-6">
            {footer.legal.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-xs transition-colors hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
