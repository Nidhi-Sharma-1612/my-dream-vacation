"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { faqs } from "@/data/site";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 sm:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.3fr]">
        <SectionHeading
          eyebrow="Questions, answered"
          title="Everything you need to know before you book."
          description="Can't find what you're looking for? Reach out to our concierge team and we'll get back to you within the hour."
        />

        <div className="divide-y divide-black/10 rounded-3xl bg-white ring-1 ring-black/5">
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            return (
              <div key={faq.question} className="px-6">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  onClick={() => setOpenIndex(open ? null : index)}
                  aria-expanded={open}
                >
                  <span className="font-medium text-ink">{faq.question}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-ink-soft transition-transform ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {open && (
                  <p className="pb-5 text-sm leading-relaxed text-ink-soft">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
