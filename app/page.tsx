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
  serviceSections,
  proofStats,
  testimonials,
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
      addressRegion: "CO",
    },
  };

  const galleryPreview = galleryItems.slice(0, 3);

  return (
    <>
      <Hero />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      <SectionWrapper className="bg-paper/45">
        <div className="grid gap-6 lg:grid-cols-[1.35fr_1fr]">
          <div className="feature-frame bg-ivory p-7 sm:p-9">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-rust">
              Why PeakFix
            </p>
            <h2 className="mt-4 font-(--font-display) text-4xl uppercase leading-tight text-coal sm:text-5xl">
              Why homeowners choose PeakFix.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-concrete">
              We make home repairs simple: clear communication, reliable scheduling, and quality work you can trust.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {proofStats.map((item) => (
              <div
                key={item.label}
                className="feature-frame bg-coal p-6 text-ivory"
              >
                <p className="font-(--font-display) text-4xl uppercase">
                  {item.value}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.14em] text-ivory/70">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid gap-5 md:grid-cols-3">
          {whyChooseUs.map((item) => (
            <FeatureCard
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="border-y border-coal/15 bg-ivory">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-rust">
              Services
            </p>
            <h2 className="mt-3 font-(--font-display) text-4xl uppercase text-coal sm:text-5xl">
              Services for common home projects.
            </h2>
            <p className="mt-3 max-w-2xl text-concrete">
              Browse our services to see the types of jobs we handle every week.
            </p>
          </div>
          <ButtonLink href="/services" variant="outline">
            All Services
          </ButtonLink>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service) => (
            <ServiceCard
              key={service}
              title={service}
              href={serviceHref(service)}
            />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <div className="feature-frame bg-paper/60 p-7 sm:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-rust">
              Workflow
            </p>
            <h2 className="mt-3 font-(--font-display) text-4xl uppercase leading-tight text-coal sm:text-5xl">
              How It Works
            </h2>
            <ol className="mt-8 space-y-6">
              {howItWorks.map((step, index) => (
                <li key={step.title} className="border-l border-coal/20 pl-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-rust">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-1 text-xl font-semibold text-coal">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-concrete">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
          <div className="space-y-4">
            {trustItems.map((item) => (
              <div key={item} className="feature-frame bg-ivory px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-coal">
                  {item}
                </p>
              </div>
            ))}
            {testimonials.map((testimonial) => (
              <blockquote
                key={testimonial.author}
                className="feature-frame bg-coal px-5 py-6 text-ivory"
              >
                <p className="text-base leading-7">"{testimonial.quote}"</p>
                <footer className="mt-3 text-xs uppercase tracking-[0.14em] text-ivory/70">
                  {testimonial.author}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="border-y border-coal/15 bg-paper/40">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-rust">
              Our Work
            </p>
            <h2 className="mt-3 font-(--font-display) text-4xl uppercase text-coal sm:text-5xl">
              Recent Work
            </h2>
            <p className="mt-2 max-w-xl text-concrete">
              A quick look at repair, finish, and upgrade work completed in our
              service area.
            </p>
          </div>
          <Link
            href="/gallery"
            className="shrink-0 text-xs font-semibold uppercase tracking-[0.16em] text-coal underline-offset-2 hover:underline"
          >
            Open Full Gallery
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {galleryPreview.map((item) => (
            <Link
              key={item.src}
              href="/gallery"
              className="group feature-frame relative aspect-4/3 overflow-hidden"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-coal/40 via-transparent to-transparent" />
            </Link>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="feature-frame bg-coal px-6 py-10 text-ivory sm:px-10">
          <p className="text-center text-sm uppercase tracking-[0.16em] text-ivory/70">
            Need details before booking?
          </p>
          <p className="mt-3 text-center text-xl leading-8">
            Visit our{" "}
            <Link
              href="/faq"
              className="font-semibold text-rustlight underline-offset-2 hover:underline"
            >
              FAQ
            </Link>{" "}
            for answers about pricing, scheduling, and service areas.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="feature-frame bg-rust px-6 py-12 text-center text-ivory sm:px-10">
          <h2 className="font-(--font-display) text-4xl uppercase sm:text-5xl">
            Need handyman help?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-ivory/90">
            Tell us what you need help with and we will follow up with a clear quote and schedule.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <ButtonLink href="/contact" variant="secondary">
              Request a Quote
            </ButtonLink>
            <ButtonLink href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} variant="outlineOnBrand">
              Call {siteConfig.phone}
            </ButtonLink>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
