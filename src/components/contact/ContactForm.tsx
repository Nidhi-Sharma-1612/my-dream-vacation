"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 rounded-3xl bg-sand p-8 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ocean-50 text-ocean-600">
          <CheckCircle2 size={24} />
        </span>
        <p className="font-display text-lg font-medium text-ink">
          Message sent!
        </p>
        <p className="text-sm text-ink-soft">
          Thanks for reaching out — we&apos;ll reply by email shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      className="space-y-4 rounded-3xl bg-sand p-8"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
            First name
          </span>
          <input
            type="text"
            required
            className="mt-1.5 w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm text-ink outline-none focus:border-ocean-500"
          />
        </label>
        <label className="block">
          <span className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
            Last name
          </span>
          <input
            type="text"
            required
            className="mt-1.5 w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm text-ink outline-none focus:border-ocean-500"
          />
        </label>
      </div>
      <label className="block">
        <span className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
          Email
        </span>
        <input
          type="email"
          required
          className="mt-1.5 w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm text-ink outline-none focus:border-ocean-500"
        />
      </label>
      <label className="block">
        <span className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
          Message
        </span>
        <textarea
          rows={5}
          required
          className="mt-1.5 w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm text-ink outline-none focus:border-ocean-500"
        />
      </label>
      <button
        type="submit"
        className="w-full rounded-full bg-ocean-500 px-6 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-ocean-600"
      >
        Send message
      </button>
    </form>
  );
}
