import { credentials } from "../data/site";
import { CRED_ICONS } from "./Icons";
import { Container } from "./ui";

/**
 * Trust strip directly under the hero. For anyone coaching minors these are
 * the first things a parent looks for, so they sit above every sales message.
 */
export default function Credentials() {
  if (credentials.items.length === 0) return null;

  return (
    <section
      aria-label="Credentials"
      className="relative border-y border-white/10 bg-ink hatch"
    >
      <Container className="grid gap-px sm:grid-cols-2 lg:grid-cols-4">
        {credentials.items.map((item) => {
          const Icon = CRED_ICONS[item.icon];
          return (
            <div
              key={item.label}
              className="flex items-center gap-4 py-6 lg:justify-center"
            >
              <Icon className="size-7 shrink-0 text-accent" />
              <div className="min-w-0">
                <p className="font-display text-sm font-bold tracking-wide text-white uppercase">
                  {item.label}
                </p>
                <p className="text-xs text-white/50">{item.detail}</p>
              </div>
            </div>
          );
        })}
      </Container>
    </section>
  );
}
