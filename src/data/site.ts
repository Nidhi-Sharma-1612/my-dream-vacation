import { FAQItem } from "@/types";
import {
  Waves,
  Sun,
  PawPrint,
  Snowflake,
  ChefHat,
  Wifi,
  Anchor,
  BadgePercent,
} from "lucide-react";
import { properties } from "@/data/properties";

export const siteConfig = {
  name: "My Dream Vacation Rentals",
  domain: "mydreamvacation.holidayfuture.com",
  tagline: "Short term rental vacation homes in Florida and Ontario, Canada.",
  description:
    "A small, hand-picked collection of waterfront homes across Florida and Ontario, Canada — booked directly, with no platform fees.",
  email: "natasha.skapura@gmail.com",
};

export const avgRating = (
  properties.reduce((sum, p) => sum + p.rating, 0) / properties.length
).toFixed(1);

const regionCount = new Set(properties.map((p) => p.region)).size;

export const stats = [
  { label: "Hand-picked homes", value: String(properties.length) },
  { label: "Destinations", value: String(regionCount) },
  { label: "Average guest rating", value: avgRating },
  { label: "Platform fees", value: "0%" },
];

export const amenityHighlights = [
  {
    icon: Waves,
    title: "Waterfront & beach access",
    description:
      "Every home in the collection sits directly on the water, with private beach or canal-front access.",
  },
  {
    icon: Anchor,
    title: "Boat & Gulf access",
    description:
      "Canal and lakefront homes with nearby boat rental, made for a boating-focused getaway.",
  },
  {
    icon: Sun,
    title: "Private pools & hot tubs",
    description:
      "Take your pick of a canal-front pool in Florida or a brand-new hot tub on Round Lake.",
  },
  {
    icon: Snowflake,
    title: "Air conditioning",
    description: "Every home is fully air-conditioned for warm-weather stays.",
  },
  {
    icon: ChefHat,
    title: "Full kitchens",
    description:
      "Cook for the group with a complete kitchen in every home, including some with a second kitchen.",
  },
  {
    icon: Wifi,
    title: "Internet included",
    description: "Stay connected with WiFi included at every property.",
  },
  {
    icon: PawPrint,
    title: "Pet-friendly",
    description:
      "All three homes welcome well-behaved pets — no extra platform fees to bring them along.",
  },
  {
    icon: BadgePercent,
    title: "Booked direct",
    description:
      "Reserve straight through this site by email — no third-party booking commission added to your rate.",
  },
];

export const faqs: FAQItem[] = [
  {
    question: "Why book direct instead of through a booking site?",
    answer:
      "Booking direct with My Dream Vacation Rentals means no third-party service fees added to your rate, and a real person to email with questions before, during and after your stay.",
  },
  {
    question: "What is the cancellation policy?",
    answer:
      "All three homes share the same policy: full refund if you cancel at least 14 days before arrival, and a 50% refund if you cancel at least 7 days before arrival.",
  },
  {
    question: "What time is check-in and check-out?",
    answer:
      "Check-in is 3–4 PM and check-out is 10–11 AM depending on the property — exact times are listed on each property's page.",
  },
  {
    question: "Are pets allowed?",
    answer:
      "Yes — all three homes in the collection are pet-friendly. Smoking indoors is not permitted at any property.",
  },
  {
    question: "How do I ask a question or book a stay?",
    answer: `Email us directly at ${siteConfig.email} with your dates, group size and the property you're interested in, and we'll get back to you to confirm availability and pricing.`,
  },
  {
    question: "Where are your properties located?",
    answer:
      "We currently list homes in Southwest Florida, USA and on Round Lake, Ontario, Canada — see the Properties page for details on each.",
  },
];
