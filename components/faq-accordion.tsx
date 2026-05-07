"use client";

import { useState } from "react";

import { buttonFocusClasses } from "./ui/button";

export function FAQAccordion({ items }: { items: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-5 sm:space-y-6">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        const questionId = `faq-question-${idx}`;
        const answerId = `faq-answer-${idx}`;
        return (
          <article key={item.question} className="feature-frame overflow-hidden bg-ivory">
            <button
              id={questionId}
              className={`flex w-full items-center justify-between border border-transparent px-6 py-4 text-left text-coal transition-[color,background-color,border-color] duration-180 ease-out hover:border-coal/25 hover:bg-paper/55 sm:px-7 sm:py-5 ${buttonFocusClasses}`}
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              aria-expanded={isOpen}
              aria-controls={answerId}
            >
              <span className="pr-6 text-sm font-semibold uppercase tracking-[0.14em] text-coal sm:pr-8">{item.question}</span>
              <span className="text-lg font-light text-rust">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && (
              <p
                id={answerId}
                role="region"
                aria-labelledby={questionId}
                className="px-6 pb-7 pt-2 text-sm leading-7 text-concrete sm:px-7 sm:pb-8 sm:pt-2.5"
              >
                {item.answer}
              </p>
            )}
          </article>
        );
      })}
    </div>
  );
}
