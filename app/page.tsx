import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import {
  trustItems,
  whyChooseUs,
  featuredServices,
  howItWorks,
  galleryItems,
  serviceSections
} from "@/lib/data";
import { FeatureCard, ServiceCard } from "@/components/cards";
import { ButtonLink } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
import { slugify } from "@/lib/slug";

const serviceTitles = new Set(serviceSections.map((s) => s.title));

function serviceHref(title: string) {
  if (serviceTitles.has(title)) {
    return `/services#${slugify(title)}`;
  }
  return "/services";
}

export const metadata: Metadata = {
  title: "Reliable Handyman Services in Boulder",
  description:
    "PeakFix provides reliable handyman services in Boulder with skilled repairs, clear communication, and honest pricing.",
  openGraph: {
    title: "Reliable handyman services for Boulder homes and businesses",
    description: siteConfig.description
  }
};

function CheckIcon({ className = "h-5 w-5 shrink-0 text-emerald-600" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-7.5 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 6.948-9.726a.75.75 0 0 1 1.052-.143Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function HomePage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    image: `${siteConfig.url}/og-image.jpg`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    areaServed: ["Boulder", "Louisville", "Lafayette"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Boulder",
      addressRegion: "CO"
    }
  };

  const galleryPreview = galleryItems.slice(0, 3);

  return (
    <>
      <Hero />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <SectionWrapper className="bg-gradient-to-r from-brand-muted/90 via-offwhite to-warm-muted/80">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-charcoal sm:text-3xl">Why homeowners choose PeakFix</h2>
          <p className="mt-3 text-slate">
            Local, insured, and upfront—so you can book with confidence.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-lg border border-brand/20 bg-white/90 px-4 py-3 text-sm font-medium text-charcoal shadow-sm"
            >
              <CheckIcon />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:max-w-none lg:text-left">
          <h2 className="border-l-4 border-accent pl-4 text-3xl font-bold text-charcoal">Why Choose Us</h2>
          <p className="mt-4 text-lg text-slate">
            We treat your home or workplace like our own—clear updates, careful work, and no cutting corners.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {whyChooseUs.map((item) => (
            <FeatureCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-white">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="border-l-4 border-brand pl-4 text-3xl font-bold text-charcoal">Featured Services</h2>
            <p className="mt-4 max-w-2xl text-slate">
              From quick repairs to small improvements—tap a service to read more on our services page.
            </p>
          </div>
          <ButtonLink href="/services" variant="ghost" className="shrink-0 self-start sm:self-auto">
            View all services
          </ButtonLink>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service) => (
            <ServiceCard key={service} title={service} href={serviceHref(service)} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="border-y border-brand/10 bg-brand-muted/40">
        <h2 className="text-center text-2xl font-bold text-charcoal sm:text-3xl">How it works</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate">
          Three simple steps from first message to finished work.
        </p>
        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          {howItWorks.map((step, index) => (
            <li key={step.title} className="relative flex flex-col items-center text-center md:block md:text-left">
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand text-lg font-bold text-white md:mb-5">
                {index + 1}
              </span>
              <h3 className="text-lg font-semibold text-charcoal">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate">{step.description}</p>
            </li>
          ))}
        </ol>
      </SectionWrapper>

      <SectionWrapper>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-charcoal sm:text-3xl">Recent work</h2>
            <p className="mt-2 text-slate">A sample of projects we take on for Boulder-area homes and businesses.</p>
          </div>
          <Link
            href="/gallery"
            className="shrink-0 text-sm font-semibold text-brand-dark underline-offset-2 hover:underline"
          >
            View full gallery →
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {galleryPreview.map((item) => (
            <Link
              key={item.src}
              href="/gallery"
              className="group relative aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-slate/15"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover transition duration-300 group-hover:scale-105"
              />
            </Link>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="rounded-2xl border border-brand/20 bg-gradient-to-br from-brand-muted/50 to-white px-6 py-8 sm:px-10">
          <p className="text-center text-lg text-charcoal">
            Questions about pricing, scheduling, or service areas?{" "}
            <Link href="/faq" className="font-semibold text-brand-dark underline-offset-2 hover:underline">
              Read our FAQ
            </Link>
            {" —or reach out anytime."}
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="rounded-2xl bg-gradient-to-br from-charcoal via-slate to-brand-dark px-6 py-10 text-center text-offwhite shadow-lg sm:px-10">
          <h2 className="text-3xl font-bold">Ready to fix that to-do list?</h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-offwhite/90">
            Tell us what you need—we&apos;ll get back with timing and a straightforward quote.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <ButtonLink href="/contact">Get a Quote</ButtonLink>
            <ButtonLink href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} variant="secondary" className="border border-white/20 bg-white/10 text-offwhite hover:bg-white/20">
              Call {siteConfig.phone}
            </ButtonLink>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
