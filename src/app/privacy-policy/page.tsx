import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy | My Dream Vacation Rentals",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-page max-w-2xl">
        <h1 className="font-display text-3xl font-medium text-ink sm:text-4xl">
          Privacy Policy
        </h1>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-ink-soft">
          <p>
            We collect the information you provide when you reach out to book
            a stay — such as your name, email address and travel dates — to
            respond to your request and manage your reservation. We do not
            sell your information to third parties.
          </p>
          <p>
            Booking and payment for confirmed reservations are handled
            directly between you and {siteConfig.name}. Any information you
            share is used solely to plan and confirm your stay.
          </p>
          <h2 id="cookies" className="font-display text-lg font-medium text-ink">
            Cookies
          </h2>
          <p>
            This site may use basic, functional cookies to remember your
            preferences while browsing. It does not use cookies for
            third-party advertising.
          </p>
          <p>
            Questions about this policy can be sent to{" "}
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
