import { ButtonLink } from "./ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-muted via-white to-warm-muted">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-accent/20 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-dark">Boulder, CO</p>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-charcoal sm:text-5xl">
          Reliable handyman services for Boulder homes and businesses
        </h1>
        <p className="max-w-2xl text-lg text-slate">
          PeakFix delivers skilled repairs, clear communication, and honest pricing - done right the first time.
        </p>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/contact">Request a Quote</ButtonLink>
          <ButtonLink href="/services" variant="ghost">
            View Services
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
