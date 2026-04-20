"use client";

import { useState } from "react";

export function FAQAccordion({ items }: { items: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <article key={item.question} className="rounded-lg border border-slate/15 bg-white">
            <button
              className="flex w-full items-center justify-between px-5 py-4 text-left"
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              aria-expanded={isOpen}
            >
              <span className="font-medium text-charcoal">{item.question}</span>
              <span className="text-slate">{isOpen ? "-" : "+"}</span>
            </button>
            {isOpen && <p className="px-5 pb-4 text-sm text-slate">{item.answer}</p>}
          </article>
        );
      })}
    </div>
  );
}
