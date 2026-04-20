import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { trustItems, whyChooseUs, featuredServices } from "@/lib/data";
import { FeatureCard, ServiceCard } from "@/components/cards";
import { ButtonLink } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

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
      addressRegion: "CO"
    }
  };

  return (
    <>
      <Hero />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <SectionWrapper className="bg-gradient-to-r from-brand-muted/90 via-offwhite to-warm-muted/80">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
            <p
              key={item}
              className="rounded-lg border border-brand/20 bg-white/90 px-4 py-3 text-sm font-medium text-charcoal shadow-sm"
            >
              {item}
            </p>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <h2 className="border-l-4 border-accent pl-4 text-3xl font-bold text-charcoal">Why Choose Us</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {whyChooseUs.map((item) => (
            <FeatureCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-white">
        <h2 className="border-l-4 border-brand pl-4 text-3xl font-bold text-charcoal">Featured Services</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service) => (
            <ServiceCard key={service} title={service} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="rounded-2xl bg-gradient-to-br from-charcoal via-slate to-brand-dark px-6 py-10 text-center text-offwhite shadow-lg sm:px-10">
          <h2 className="text-3xl font-bold">Ready to fix that to-do list?</h2>
          <div className="mt-5">
            <ButtonLink href="/contact">Get a Quote</ButtonLink>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
