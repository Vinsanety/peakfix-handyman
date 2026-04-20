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
    <SectionWrapper>
      <h1 className="text-4xl font-bold text-charcoal">Frequently Asked Questions</h1>
      <div className="mt-8 max-w-3xl">
        <FAQAccordion items={faqs} />
      </div>
    </SectionWrapper>
  );
}
