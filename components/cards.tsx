import Link from "next/link";

export function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <article className="rounded-xl border border-slate/15 border-l-4 border-l-brand bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-charcoal">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate">{description}</p>
    </article>
  );
}

export function ServiceCard({ title, href = "/services" }: { title: string; href?: string }) {
  return (
    <Link
      href={href}
      className="group block rounded-xl border border-slate/15 border-t-4 border-t-accent bg-gradient-to-b from-warm-muted/40 to-white p-5 shadow-sm transition hover:border-brand/30 hover:shadow-md"
    >
      <h3 className="text-base font-semibold text-charcoal group-hover:text-brand-dark">{title}</h3>
      <p className="mt-2 text-xs font-medium text-brand-dark">Learn more →</p>
    </Link>
  );
}
