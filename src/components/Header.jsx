import { useEffect, useState } from "react";
import { nav } from "../data/site";
import { Close, Menu } from "./Icons";
import Logo from "./Logo";
import ScrollProgress from "./ScrollProgress";
import SocialLinks from "./SocialLinks";
import { Button, Container } from "./ui";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight whichever section is currently under the header.
  useEffect(() => {
    const sections = nav
      .map((i) => document.getElementById(i.href.replace("#", "")))
      .filter(Boolean);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          )[0];
        if (visible) setActive(visible.target.id);
      },
      // A band just below the header — whatever crosses it is "current".
      // rootMargin only accepts px or %, never rem.
      { rootMargin: "-96px 0px -70% 0px", threshold: 0 },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Lock the page behind the mobile drawer.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* The background is deliberately NOT transitioned. Animating it leaves
          the bar mid-interpolation — effectively transparent — which hides the
          white nav and burger against light sections. It snaps instead. */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[padding,box-shadow] duration-300 ${
          scrolled
            ? "bg-ink py-3 shadow-2xl ring-1 ring-white/10"
            : "bg-linear-to-b from-ink/80 to-transparent py-5"
        }`}
      >
      <Container className="flex items-center justify-between gap-6">
        <a href="#home" className="shrink-0">
          <Logo />
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {nav.map((item) => {
              const isActive = active === item.href.replace("#", "");
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative py-2 text-sm font-semibold tracking-wide uppercase transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:text-accent ${
                      isActive
                        ? "text-accent after:w-full"
                        : "text-white after:w-0 hover:after:w-full"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <SocialLinks className="gap-1" />
          <Button
            href="#contact"
            variant="accent"
            className="px-5 py-2.5 text-xs"
          >
            Book a Session
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          className="text-white transition-colors hover:text-accent lg:hidden"
        >
          <Menu />
        </button>
      </Container>

        <ScrollProgress />
      </header>

      {/* Two deliberate choices here:
          1. Sibling of <header>, not a child — a filtered or transformed
             ancestor becomes the containing block for fixed positioning, which
             would clip this to the header's height.
          2. Mounted only while open, with no fade. Visibility must never
             depend on a transition finishing; a stalled one hides the whole
             mobile menu. */}
      {open && (
        <div className="fixed inset-0 z-60 bg-ink lg:hidden">
          <div className="flex items-center justify-between px-5 py-5">
            <Logo />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="text-white transition-colors hover:text-accent"
            >
              <Close />
            </button>
          </div>

          <nav
            aria-label="Mobile"
            className="h-[calc(100vh-5.5rem)] overflow-y-auto px-5 pb-10"
          >
            <ul className="divide-y divide-white/10">
              {nav.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-4 text-base font-semibold tracking-wide text-white uppercase transition-colors hover:text-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <SocialLinks size="lg" variant="tile" className="mt-8" />

            <Button
              href="#contact"
              variant="accent"
              className="mt-6 w-full justify-center"
              onClick={() => setOpen(false)}
            >
              Book a Session
            </Button>
          </nav>
        </div>
      )}

    </>
  );
}
