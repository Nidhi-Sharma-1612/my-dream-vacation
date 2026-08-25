import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | My Dream Vacation Rentals",
  description:
    "Have a question before you book? Reach My Dream Vacation Rentals directly by email.",
};

export default function ContactPage() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-page grid gap-14 lg:grid-cols-2">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-coral-600">
            Get in touch
          </span>
          <h1 className="font-display mt-3 text-3xl font-medium text-ink sm:text-4xl">
            We&apos;re here to help plan your stay.
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-soft">
            Whether you&apos;re comparing homes, need a custom quote for a
            group, or have a question about a specific property, email us
            directly and we&apos;ll get back to you personally.
          </p>

          <div className="mt-10 space-y-5">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ocean-50 text-ocean-600">
                <Mail size={18} />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">Email us</p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-ink-soft hover:text-ocean-600"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ocean-50 text-ocean-600">
                <MapPin size={18} />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">
                  Homes in Florida & Ontario, Canada
                </p>
                <p className="text-sm text-ink-soft">
                  Southwest Florida, USA · Round Lake, Ontario, Canada
                </p>
              </div>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
