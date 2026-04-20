import type { Metadata } from "next";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { serviceSections } from "@/lib/data";
import { slugify } from "@/lib/slug";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Repairs, improvements, and maintenance for Boulder homeowners and small businesses.",
  openGraph: {
    title: "Handyman Services in Boulder",
    description:
      "General repairs, home improvements, maintenance, and small renovations from PeakFix."
  }
};

export default function ServicesPage() {
  return (
    <SectionWrapper>
      <h1 className="text-4xl font-bold text-charcoal">Services</h1>
      <p className="mt-4 max-w-3xl text-slate">
        We handle repairs, improvements, and maintenance for Boulder homeowners and small businesses.
      </p>

      <div className="mt-10 space-y-6">
        {serviceSections.map((section) => (
          <article
            key={section.title}
            id={slugify(section.title)}
            className="scroll-mt-28 rounded-xl border border-slate/15 bg-white p-6"
          >
            <h2 className="text-2xl font-semibold text-charcoal">{section.title}</h2>
            <p className="mt-2 text-sm text-slate">{section.description}</p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-charcoal">
              {section.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
