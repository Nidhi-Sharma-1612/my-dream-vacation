import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms and Conditions | My Dream Vacation Rentals",
};

export default function TermsPage() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-page max-w-2xl">
        <h1 className="font-display text-3xl font-medium text-ink sm:text-4xl">
          Terms and Conditions
        </h1>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-ink-soft">
          <p>
            By booking a stay with {siteConfig.name}, you agree to the house
            rules and cancellation policy listed on each property&apos;s page.
            Cancellation terms may vary by property — please review them
            before confirming your reservation.
          </p>
          <p>
            Guests are responsible for leaving the property in the condition
            it was found, and for any damage caused during their stay. Pets
            are welcome at properties marked pet-friendly; smoking indoors is
            not permitted at any property in this collection.
          </p>
          <p>
            Rates and availability are confirmed directly by email at the
            time of booking and are subject to change until a reservation is
            confirmed.
          </p>
          <p>
            Questions about these terms can be sent to{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-semibold text-ocean-600"
            >
              {siteConfig.email}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
