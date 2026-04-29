import type { Metadata } from "next";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { ButtonLink } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about PeakFix, a Boulder handyman team focused on reliable service, communication, and craftsmanship.",
  openGraph: {
    title: "About PeakFix Handyman Services",
    description: "A small Boulder team with high standards and clear communication."
  }
};

export default function AboutPage() {
  return (
    <SectionWrapper>
      <h1 className="text-4xl font-bold text-charcoal">A small team with high standards</h1>
      <p className="mt-5 max-w-3xl leading-7 text-slate">
        PeakFix started with a simple idea: Boulder homeowners deserve a handyman service that's reliable,
        communicative, and skilled. No vague arrival windows, no disappearing contractors - just honest work
        done right. We're a small team that takes pride in craftsmanship, clear communication, and treating
        every home like our own.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-slate/15 bg-white p-5">
          <h2 className="text-lg font-semibold text-charcoal">How we work</h2>
          <p className="mt-2 text-sm leading-6 text-slate">
            We keep projects simple: clear scope, clear pricing, and updates you can count on. You get a
            dependable crew, tidy work areas, and follow-through from the first call to the final walkthrough.
          </p>
        </div>
        <div className="rounded-xl border border-slate/15 bg-white p-5">
          <h2 className="text-lg font-semibold text-charcoal">Who we help</h2>
          <p className="mt-2 text-sm leading-6 text-slate">
            We serve homeowners, landlords, and small businesses that need skilled repairs, maintenance, and
            small upgrades completed without the usual contractor runaround.
          </p>
        </div>
      </div>

      <h2 className="mt-10 text-2xl font-semibold text-charcoal">Why Boulder clients choose PeakFix</h2>
      <ul className="mt-4 grid gap-3 text-sm font-medium text-charcoal sm:grid-cols-2">
        <li className="rounded-lg border border-slate/15 bg-white px-4 py-3">Locally owned</li>
        <li className="rounded-lg border border-slate/15 bg-white px-4 py-3">Licensed & insured</li>
        <li className="rounded-lg border border-slate/15 bg-white px-4 py-3">Consistent crew</li>
        <li className="rounded-lg border border-slate/15 bg-white px-4 py-3">Clear communication</li>
        <li className="rounded-lg border border-slate/15 bg-white px-4 py-3">Upfront pricing before work starts</li>
        <li className="rounded-lg border border-slate/15 bg-white px-4 py-3">Respect for your home and schedule</li>
      </ul>

      <div className="mt-10 rounded-2xl border border-brand/20 bg-brand-muted p-6">
        <h2 className="text-2xl font-semibold text-charcoal">Service area and response</h2>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate">
          We regularly work in Boulder, Louisville, and Lafayette. Need help nearby? Reach out and we will let
          you know quickly if your project is in range and when we can schedule your visit.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <ButtonLink href="/contact" className="px-5 py-2.5">
            Request a Quote
          </ButtonLink>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center justify-center rounded-md border border-slate/20 bg-white px-5 py-2.5 text-sm font-semibold text-charcoal transition hover:bg-slate/5"
          >
            {siteConfig.email}
          </a>
          <a
            href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
            className="inline-flex items-center justify-center rounded-md border border-slate/20 bg-white px-5 py-2.5 text-sm font-semibold text-charcoal transition hover:bg-slate/5"
          >
            {siteConfig.phone}
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
