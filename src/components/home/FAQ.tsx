"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Minus, Mail, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { faqs, siteConfig } from "@/data/site";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 sm:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.3fr]">
        <Reveal>
          <SectionHeading
            eyebrow="Questions, answered"
            title="Everything you need to know before you book."
            description="Can't find what you're looking for? Reach out to our concierge team and we'll get back to you within the hour."
          />

          <div className="mt-8 hidden rounded-2xl bg-ocean-50 p-6 sm:block">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ocean-500 text-cream">
              <Mail size={18} />
            </span>
            <p className="font-display mt-4 text-lg font-medium text-ink">
              Still have a question?
            </p>
            <p className="mt-1 text-sm text-ink-soft">{siteConfig.email}</p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ocean-600 transition-colors hover:text-ocean-500"
            >
              Get in touch <ArrowRight size={14} />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={120} className="space-y-3">
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl transition-colors ${
                  open
                    ? "bg-ocean-50 ring-1 ring-ocean-100"
                    : "bg-white ring-1 ring-black/5 hover:ring-black/10"
                }`}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpenIndex(open ? null : index)}
                  aria-expanded={open}
                >
                  <span
                    className={`font-medium transition-colors ${
                      open ? "text-ocean-600" : "text-ink"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                      open ? "bg-ocean-500 text-cream" : "bg-sand text-ink-soft"
                    }`}
                  >
                    {open ? <Minus size={15} /> : <Plus size={15} />}
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-ink-soft">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
