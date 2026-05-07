import type { Metadata } from "next";
import { FAQAccordion } from "@/components/faq-accordion";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about pricing, service area, and insurance.",
  openGraph: {
    title: "PeakFix FAQ",
    description: "Common questions about how PeakFix works."
  }
};

export default function FAQPage() {
  return (
    <>
      <SectionWrapper className="border-b border-coal/15 bg-paper/45">
        <div className="feature-frame bg-ivory p-8 sm:p-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-rust">FAQ</p>
          <h1 className="mt-3 font-(--font-display) text-5xl uppercase leading-none text-coal sm:text-6xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-concrete">
            Answers about pricing, scheduling, service areas, and what to expect when you work with us.
          </p>
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <div className="mx-auto max-w-4xl">
          <FAQAccordion items={faqs} />
        </div>
      </SectionWrapper>
    </>
  );
}
