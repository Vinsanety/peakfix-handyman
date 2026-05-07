import type { Metadata } from "next";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { GalleryGrid } from "@/components/gallery-grid";
import { galleryItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Recent repair, improvement, and maintenance project examples from PeakFix.",
  openGraph: {
    title: "PeakFix Project Gallery",
    description: "Browse recent residential and small office handyman projects."
  }
};

export default function GalleryPage() {
  return (
    <>
      <SectionWrapper className="border-b border-coal/15 bg-paper/45">
        <div className="feature-frame bg-ivory p-8 sm:p-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-rust">Our Work</p>
          <h1 className="mt-3 font-(--font-display) text-5xl uppercase leading-none text-coal sm:text-6xl">
            Recent Projects
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-concrete">
            A sample of recent repairs, upgrades, and maintenance projects completed for local clients.
          </p>
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <div className="mt-2">
          <GalleryGrid items={galleryItems} />
        </div>
      </SectionWrapper>
    </>
  );
}
