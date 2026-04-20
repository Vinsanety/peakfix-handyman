import type { Metadata } from "next";
import { SectionWrapper } from "@/components/layout/section-wrapper";

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
      <ul className="mt-8 grid gap-3 text-sm font-medium text-charcoal sm:grid-cols-2">
        <li className="rounded-lg border border-slate/15 bg-white px-4 py-3">Locally owned</li>
        <li className="rounded-lg border border-slate/15 bg-white px-4 py-3">Licensed & insured</li>
        <li className="rounded-lg border border-slate/15 bg-white px-4 py-3">Consistent crew</li>
        <li className="rounded-lg border border-slate/15 bg-white px-4 py-3">Clear communication</li>
      </ul>
    </SectionWrapper>
  );
}
