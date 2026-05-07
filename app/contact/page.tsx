import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Request a quote from PeakFix Handyman Services in Boulder, CO.",
  openGraph: {
    title: "Contact PeakFix | Request a Quote",
    description: "Contact PeakFix for repairs, maintenance, and small renovation work."
  }
};

export default function ContactPage() {
  return (
    <>
      <SectionWrapper className="border-b border-coal/15 bg-paper/45">
        <div className="feature-frame bg-ivory p-8 sm:p-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-rust">Contact</p>
          <h1 className="mt-3 font-(--font-display) text-5xl uppercase leading-none text-coal sm:text-6xl">
            Request a Quote
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-concrete">
            Tell us about your project and we will follow up with pricing and scheduling options.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <ContactForm />
          </div>
          <aside className="feature-frame h-fit bg-coal p-7 text-ivory">
            <h2 className="font-(--font-display) text-3xl uppercase">Direct Contact</h2>
            <p className="mt-4 text-xs uppercase tracking-[0.16em] text-ivory/65">Email</p>
            <p className="mt-1 text-sm">{siteConfig.email}</p>
            <p className="mt-4 text-xs uppercase tracking-[0.16em] text-ivory/65">Phone</p>
            <p className="mt-1 text-sm">{siteConfig.phone}</p>
            <p className="mt-6 border-t border-ivory/20 pt-4 text-xs uppercase tracking-[0.16em] text-ivory/70">
              Service Area
            </p>
            <p className="mt-1 text-sm">{siteConfig.serviceArea}</p>
          </aside>
        </div>
      </SectionWrapper>
    </>
  );
}
