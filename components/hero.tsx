import Image from "next/image";
import { ButtonLink } from "./ui/button";
import { siteConfig } from "@/lib/site";

const heroImage = {
  src: "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1200&q=80",
  alt: "Bright kitchen and home interior"
};

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
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:gap-12 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-14 lg:py-24 lg:px-8">
        <div className="flex flex-col gap-6 sm:gap-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-dark">Boulder, CO</p>
          <h1 className="max-w-xl text-4xl font-bold tracking-tight text-charcoal sm:text-5xl lg:text-[2.75rem] lg:leading-tight">
            Reliable handyman services for Boulder homes and businesses
          </h1>
          <p className="max-w-xl text-lg text-slate">
            PeakFix delivers skilled repairs, clear communication, and honest pricing—done right the first time.
          </p>
          <p className="text-sm text-slate">
            Serving{" "}
            <span className="font-medium text-charcoal">Boulder, Louisville & Lafayette</span>
            <span className="mx-2 text-slate/50">·</span>
            <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="font-medium text-brand-dark underline-offset-2 hover:underline">
              {siteConfig.phone}
            </a>
          </p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/contact">Request a Quote</ButtonLink>
            <ButtonLink href="/services" variant="ghost">
              View Services
            </ButtonLink>
          </div>
        </div>
        <div className="relative mx-auto aspect-[4/3] w-full max-w-lg lg:mx-0 lg:max-w-none">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="rounded-2xl object-cover shadow-xl ring-1 ring-slate/10"
          />
        </div>
      </div>
    </section>
  );
}
