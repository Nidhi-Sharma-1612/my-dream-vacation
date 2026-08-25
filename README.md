# My Dream Vacation Rentals

A direct-booking marketing site for **My Dream Vacation Rentals** — a small collection of short-term rental homes in Florida and Ontario, Canada. Built with Next.js (App Router), TypeScript, Tailwind CSS v4, and lucide-react.

Live reference: [mydreamvacation.holidayfuture.com](https://mydreamvacation.holidayfuture.com)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## What's here

- **Home** (`/`) — hero with a destination/date/guest search bar, about section, the property collection, amenities, FAQ, and a closing CTA.
- **All listings** (`/properties`) — every property, filterable by region and minimum guest count via query params (`?region=Florida&guests=4`).
- **Property detail** (`/properties/[slug]`) — photo gallery with a full-screen lightbox, description, highlights, amenities, house rules & cancellation policy, an embedded map, and a booking widget (with a sticky mobile bar on small screens).
- **Contact** (`/contact`) — a direct-email contact form.
- **Privacy Policy** / **Terms and Conditions** — static legal pages.
- `sitemap.xml` / `robots.txt` — generated from the same property data.

## Project structure

```
src/
  app/                    routes (App Router)
  components/
    home/                 homepage sections (Hero, About, Amenities, FAQ, CTA, …)
    property/             property detail page pieces (gallery, lightbox, map, booking widget)
    layout/               Navbar, Footer
    shared/                PropertyCard, SectionHeading
    ui/                    generic Dropdown and DatePicker used across search/booking forms
    contact/               ContactForm
  data/
    properties.ts          property listings (see "Content & data" below)
    site.ts                 site-wide copy: stats, amenities, FAQ, contact info
    availability.ts         placeholder blocked-date ranges per listing
  lib/
    date.ts                 timezone-safe date helpers (YYYY-MM-DD strings)
    popoverCoordination.ts  keeps only one Dropdown/DatePicker open at a time
  types/                    shared TypeScript types
```

## Content & data

Property content in `src/data/properties.ts` is sourced from the real Hostaway booking engine listings at mydreamvacation.holidayfuture.com (names, descriptions, photos, guest/bed/bath counts, ratings, house rules, cancellation policy). A few fields are explicit placeholders until a live integration is wired up:

- **`pricePerNight`** — Hostaway pricing is date-dependent and isn't exposed on the source site; the booking widget labels totals as "estimated" until real rates are available.
- **`coordinates`** — city-level approximations (the source site doesn't expose an exact address pre-booking); the property map shows a general-area pin with a note that the exact location is shared after booking.
- **`src/data/availability.ts`** — mock blocked-date ranges per listing, just to exercise the calendar's available/unavailable states.

Each property carries a `hostawayId` (its real Hostaway listing ID) specifically so these placeholders can be swapped for live Hostaway API data later without changing the data shape consumers rely on.

## Notable implementation details

- **Dates are plain `YYYY-MM-DD` strings**, parsed/formatted via `src/lib/date.ts` rather than `Date#toISOString()` — the latter reads in UTC while calendar day math happens in local time, which silently shifts dates by one day in negative-UTC timezones.
- **Dropdown/DatePicker popovers coordinate via `src/lib/popoverCoordination.ts`** (a tiny window-event pub/sub) so opening one closes any other open popover in the same form.
- The booking widget's "Book Now" button is intentionally a no-op for now (`onSubmit` just calls `preventDefault`) — there's no backend to submit to until Hostaway is integrated.
- The property map uses an OpenStreetMap iframe embed (no API key required).

## Tech stack

- [Next.js](https://nextjs.org) (App Router, TypeScript)
- [Tailwind CSS v4](https://tailwindcss.com)
- [lucide-react](https://lucide.dev) for icons
- Fonts: Fraunces (display) and Plus Jakarta Sans (body), via `next/font/google`
