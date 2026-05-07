"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";

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
            className="group feature-frame overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-coal focus-visible:ring-offset-4 focus-visible:ring-offset-ivory"
            onClick={() => setActiveIndex(idx)}
            aria-label={`Open image: ${item.alt}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={800}
              height={500}
              className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </button>
        ))}
      </div>

      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-coal/92 px-4"
          role="dialog"
          aria-modal="true"
        >
          <Button
            type="button"
            variant="tertiary"
            className="absolute right-5 top-5 border-white text-white hover:bg-white hover:text-coal"
            onClick={() => setActiveIndex(null)}
          >
            Close
          </Button>
          <Image
            src={activeItem.src}
            alt={activeItem.alt}
            width={1300}
            height={800}
            className="max-h-[85vh] w-auto border border-ivory/20 object-contain"
          />
        </div>
      )}
    </>
  );
}
