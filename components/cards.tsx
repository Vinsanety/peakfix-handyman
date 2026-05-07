import Link from "next/link";

export function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <article className="feature-frame bg-paper/55 p-6">
      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-rust">Approach</p>
      <h3 className="mt-2 font-(--font-display) text-2xl uppercase leading-tight text-coal">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-concrete">{description}</p>
    </article>
  );
}

export function ServiceCard({ title, href = "/services" }: { title: string; href?: string }) {
  return (
    <Link
      href={href}
      className="group feature-frame block bg-ivory p-5 transition hover:-translate-y-0.5"
    >
      <h3 className="font-(--font-display) text-xl uppercase leading-tight text-coal group-hover:text-rustdark">
        {title}
      </h3>
      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-concrete">Review service</p>
    </Link>
  );
}
