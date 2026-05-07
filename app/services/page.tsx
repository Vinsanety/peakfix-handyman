import type { Metadata } from "next";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { serviceSections } from "@/lib/data";
import { slugify } from "@/lib/slug";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore PeakFix services for home repairs, maintenance, and small improvement projects.",
  openGraph: {
    title: "PeakFix Services Overview",
    description:
      "Handyman services for homeowners, landlords, and small businesses in the Boulder area."
  }
};

export default function ServicesPage() {
  return (
    <>
      <SectionWrapper className="border-b border-coal/15 bg-paper/45">
        <div className="grid gap-6 lg:grid-cols-[1.25fr_1fr]">
          <div className="feature-frame bg-ivory p-8 sm:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-rust">Our Services</p>
            <h1 className="mt-3 font-(--font-display) text-5xl uppercase leading-none text-coal sm:text-6xl">
              Handyman Services You Can Count On.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-concrete">
              From quick fixes to larger punch lists, we provide reliable help with straightforward pricing.
            </p>
          </div>
          <div className="feature-frame bg-coal p-8 text-ivory">
            <p className="text-xs uppercase tracking-[0.16em] text-ivory/70">How it works</p>
            <ol className="mt-5 space-y-3 text-sm leading-6 text-ivory/90">
              <li>1. Pick the service that matches your project.</li>
              <li>2. Review examples of the work we handle.</li>
              <li>3. Contact us for pricing and scheduling.</li>
            </ol>
            <ButtonLink href="/contact" className="mt-6 w-full justify-center">
              Request a Quote
            </ButtonLink>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="space-y-8">
          {serviceSections.map((section, index) => (
            <article
              key={section.title}
              id={slugify(section.title)}
              className="scroll-mt-28 grid gap-5 border border-coal/18 bg-ivory p-6 md:grid-cols-[220px_1fr] md:p-8"
            >
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-rust">Service {index + 1}</p>
                <h2 className="mt-3 font-(--font-display) text-3xl uppercase leading-tight text-coal">
                  {section.title}
                </h2>
              </div>
              <div>
                <p className="max-w-2xl text-sm leading-7 text-concrete">{section.description}</p>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="border border-coal/15 bg-paper/55 px-4 py-3 text-sm text-coal">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
