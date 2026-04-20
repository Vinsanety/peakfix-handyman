import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Request a quote from PeakFix Handyman Services in Boulder, CO.",
  openGraph: {
    title: "Request a Quote | PeakFix",
    description: "Contact PeakFix for repairs, maintenance, and small renovation work."
  }
};

export default function ContactPage() {
  return (
    <SectionWrapper>
      <h1 className="text-4xl font-bold text-charcoal">Request a quote</h1>
      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ContactForm />
        </div>
        <aside className="rounded-xl border border-slate/15 bg-white p-6">
          <h2 className="text-xl font-semibold text-charcoal">Contact details</h2>
          <p className="mt-4 text-sm text-slate">Email</p>
          <p className="text-charcoal">{siteConfig.email}</p>
          <p className="mt-4 text-sm text-slate">Phone</p>
          <p className="text-charcoal">{siteConfig.phone}</p>
        </aside>
      </div>
    </SectionWrapper>
  );
}
