"use client";

import Image from "next/image";
import { useState } from "react";

type GalleryItem = { src: string; alt: string };

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeItem = activeIndex !== null ? items[activeIndex] : null;

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, idx) => (
          <button
            key={item.src}
            className="group overflow-hidden rounded-xl border border-slate/10"
            onClick={() => setActiveIndex(idx)}
            aria-label={`Open image: ${item.alt}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={800}
              height={500}
              className="h-56 w-full object-cover transition-transform group-hover:scale-[1.03]"
            />
          </button>
        ))}
      </div>

      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/90 px-4"
          role="dialog"
          aria-modal="true"
        >
          <button
            className="absolute right-5 top-5 rounded bg-white px-3 py-1 text-sm font-semibold text-charcoal"
            onClick={() => setActiveIndex(null)}
          >
            Close
          </button>
          <Image
            src={activeItem.src}
            alt={activeItem.alt}
            width={1300}
            height={800}
            className="max-h-[85vh] w-auto rounded-lg object-contain"
          />
        </div>
      )}
    </>
  );
}
