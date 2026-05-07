import Image from "next/image";
import { ButtonLink } from "./ui/button";
import { siteConfig } from "@/lib/site";

const heroImage = {
  src: "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1200&q=80",
  alt: "Bright kitchen and home interior",
};

export function Hero() {
  return (
    <section className="relative border-b border-coal/20 bg-ivory pt-8">
      <div className="mx-auto grid max-w-7xl items-stretch gap-8 px-5 pb-12 sm:px-8 lg:grid-cols-[1.2fr_1fr] lg:px-10">
        <div className="feature-frame bg-paper/65 p-7 sm:p-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-rust">
            Boulder Handyman Services
          </p>
          <h1 className="mt-5 max-w-2xl font-(--font-display) text-5xl uppercase leading-[0.95] text-coal sm:text-6xl lg:text-7xl">
            Reliable Help
            <br />
            For Your Home.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-concrete sm:text-lg">
            Need repairs, maintenance, or small upgrades? PeakFix provides
            dependable handyman service with clear communication and quality
            work.
          </p>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-concrete">
            Serving {siteConfig.serviceArea}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact">Request a Quote</ButtonLink>
            <ButtonLink href="/gallery" variant="outline">
              View Our Work
            </ButtonLink>
          </div>
          <p className="mt-6 text-sm text-concrete">
            Direct line:
            <a
              href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
              className="font-medium text-rust underline-offset-2 hover:underline"
            >
              {siteConfig.phone}
            </a>
          </p>
        </div>
        <div className="feature-frame relative min-h-[420px] overflow-hidden">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-linear-to-t from-coal/55 via-coal/20 to-transparent" />
          <p className="absolute bottom-5 left-5 max-w-xs border-l-2 border-rust pl-4 text-xs font-medium uppercase tracking-[0.14em] text-ivory/90">
            On-time arrivals, clean job sites, and work done right.
          </p>
        </div>
      </div>
    </section>
  );
}
