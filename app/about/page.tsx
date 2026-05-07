import type { Metadata } from "next";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { ButtonAnchor, ButtonLink } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about PeakFix Handyman Services, a local team focused on dependable service and quality work.",
  openGraph: {
    title: "Inside PeakFix",
    description: "Meet the PeakFix team and how we approach home repair projects."
  }
};

export default function AboutPage() {
  return (
    <>
      <SectionWrapper className="border-b border-coal/15 bg-paper/50">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="feature-frame bg-ivory p-8 sm:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-rust">About</p>
            <h1 className="mt-4 font-(--font-display) text-5xl uppercase leading-none text-coal sm:text-6xl">
              Local Handyman Help
              <br />
              You Can Rely On.
            </h1>
            <p className="mt-5 max-w-2xl leading-7 text-concrete">
              PeakFix was built to give Boulder homeowners a dependable option for repairs and small projects. We show up, communicate clearly, and take pride in doing solid work.
            </p>
          </div>
          <aside className="feature-frame bg-coal p-8 text-ivory">
            <p className="text-xs uppercase tracking-[0.16em] text-ivory/70">Operating Principles</p>
            <ul className="mt-4 space-y-2 text-sm text-ivory/90">
              <li>Transparent scope boundaries</li>
              <li>Documented progress touchpoints</li>
              <li>Respect for occupied spaces</li>
              <li>Durable and clean finish standards</li>
            </ul>
          </aside>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="feature-frame bg-ivory p-6">
            <h2 className="font-(--font-display) text-3xl uppercase text-coal">How We Work</h2>
            <p className="mt-3 text-sm leading-7 text-concrete">
              We keep things simple: clear scope, clear pricing, and updates from first contact through completion.
            </p>
          </div>
          <div className="feature-frame bg-paper/65 p-6">
            <h2 className="font-(--font-display) text-3xl uppercase text-coal">Who We Support</h2>
            <p className="mt-3 text-sm leading-7 text-concrete">
              Homeowners, landlords, and small businesses that need reliable help without contractor runaround.
            </p>
          </div>
        </div>

        <h2 className="mt-12 font-(--font-display) text-4xl uppercase text-coal">Why Clients Return</h2>
        <ul className="mt-5 grid gap-3 text-sm font-medium text-coal sm:grid-cols-2 lg:grid-cols-3">
          <li className="border border-coal/15 bg-ivory px-4 py-3">Locally rooted and licensed</li>
          <li className="border border-coal/15 bg-ivory px-4 py-3">Disciplined communication standards</li>
          <li className="border border-coal/15 bg-ivory px-4 py-3">Tidy and respectful work zones</li>
          <li className="border border-coal/15 bg-ivory px-4 py-3">Transparent labor assumptions</li>
          <li className="border border-coal/15 bg-ivory px-4 py-3">Reliable arrival windows</li>
          <li className="border border-coal/15 bg-ivory px-4 py-3">Finish quality that lasts</li>
        </ul>

        <div className="mt-10 feature-frame bg-rust px-6 py-12 text-center text-ivory sm:px-10">
          <h2 className="font-(--font-display) text-4xl uppercase sm:text-5xl">Service Area & Response</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-ivory/90">
            We regularly serve Boulder, Louisville, and Lafayette, and typically respond to new requests within one business day.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <ButtonLink
              href="/contact"
              variant="outline"
              className="border-white text-white !hover:border-white !hover:bg-white !hover:text-rustdark !focus-visible:border-white !focus-visible:bg-white !focus-visible:text-rustdark !active:border-white !active:bg-white !active:text-rustdark"
            >
              Request a Quote
            </ButtonLink>
            <ButtonAnchor
              href={`mailto:${siteConfig.email}`}
              variant="outline"
              className="break-all border-white text-white !hover:border-white !hover:bg-white !hover:text-rustdark !focus-visible:border-white !focus-visible:bg-white !focus-visible:text-rustdark !active:border-white !active:bg-white !active:text-rustdark"
            >
              {siteConfig.email}
            </ButtonAnchor>
            <ButtonAnchor
              href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
              variant="outline"
              className="border-white text-white !hover:border-white !hover:bg-white !hover:text-rustdark !focus-visible:border-white !focus-visible:bg-white !focus-visible:text-rustdark !active:border-white !active:bg-white !active:text-rustdark"
            >
              {siteConfig.phone}
            </ButtonAnchor>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
