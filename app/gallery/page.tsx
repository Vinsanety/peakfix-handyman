import type { Metadata } from "next";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { GalleryGrid } from "@/components/gallery-grid";
import { galleryItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Recent repair, improvement, and maintenance project examples from PeakFix.",
  openGraph: {
    title: "PeakFix Project Gallery",
    description: "Browse recent residential and small office handyman projects."
  }
};

export default function GalleryPage() {
  return (
    <SectionWrapper>
      <h1 className="text-4xl font-bold text-charcoal">Gallery</h1>
      <p className="mt-4 text-slate">A sample of recent work across homes, rentals, and small offices.</p>
      <div className="mt-8">
        <GalleryGrid items={galleryItems} />
      </div>
    </SectionWrapper>
  );
}
