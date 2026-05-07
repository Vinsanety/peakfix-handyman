"use client";

import { useState } from "react";

export function FAQAccordion({ items }: { items: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <article key={item.question} className="feature-frame bg-ivory">
            <button
              className="flex w-full items-center justify-between px-5 py-5 text-left"
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              aria-expanded={isOpen}
            >
              <span className="pr-5 text-sm font-semibold uppercase tracking-[0.1em] text-coal">{item.question}</span>
              <span className="text-lg font-light text-rust">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && <p className="px-5 pb-5 text-sm leading-7 text-concrete">{item.answer}</p>}
          </article>
        );
      })}
    </div>
  );
}
