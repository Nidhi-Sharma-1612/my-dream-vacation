import { Property } from "@/types";

// Sourced from mydreamvacation.holidayfuture.com (Hostaway booking engine).
// pricePerNight is a placeholder until live rates are wired up via the
// Hostaway API — real pricing is date-dependent and not shown on the
// source site. hostawayId maps each entry to its Hostaway listing ID
// for that future integration. coordinates are city-level approximations
// (the source site doesn't expose an exact address pre-booking), used to
// render a general-area map rather than a precise pin.

const CANCELLATION_POLICY =
  "Full refund up to 14 days before arrival, 50% refund up to 7 days before arrival.";

export const properties: Property[] = [
  {
    hostawayId: 384967,
    slug: "nautical-breeze-boaters-paradise",
    name: "Nautical Breeze Boaters Paradise",
    tagline: "Canal-front pool home with Gulf access",
    location: "Cape Coral, Florida",
    region: "Florida",
    coordinates: { lat: 26.5629, lng: -81.9495 },
    pricePerNight: 350,
    rating: 4.45,
    guests: 8,
    bedrooms: 4,
    bathrooms: 3,
    heroImage:
      "https://bookingenginecdn.hostaway.com/listing/93243-384967-SwabiCh1yoSRlpms3Wx6EPNwDazCliAXpMI5BhBRCxM-680ba6d258507?width=1280&quality=70&format=webp&v=2",
    gallery: [
      "https://bookingenginecdn.hostaway.com/listing/93243-384967-SwabiCh1yoSRlpms3Wx6EPNwDazCliAXpMI5BhBRCxM-680ba6d258507?width=1280&quality=70&format=webp&v=2",
      "https://bookingenginecdn.hostaway.com/listing/93243-384967-5U8riFwU2My4H3q-8MmZMLD6he1sp--M--clZXWOhwyTE-680ba6d1399ab?width=1280&quality=70&format=webp&v=2",
      "https://bookingenginecdn.hostaway.com/listing/93243-384967-QYZw7IG5DCQ--p7aRaKrDy9xdFi9gsZimyAPXhnvbEdc-680ba6d012daf?width=1280&quality=70&format=webp&v=2",
      "https://bookingenginecdn.hostaway.com/listing/93243-384967-a1sr6jaAYekWSsvSU9xjOFI8q6yO7-Qp2YbArYJj4rs-680ba6cee3dba?width=1280&quality=70&format=webp&v=2",
      "https://bookingenginecdn.hostaway.com/listing/93243-384967-yDWtFrxTt4oh39YGvS1Yth4eW20ioofnh-qXFs6--KOA-680ba6cd9f6c7?width=1280&quality=70&format=webp&v=2",
    ],
    description: [
      "A south-facing home with a large pool set directly on a canal with water access. The property sits about five minutes from the Caloosahatchee River, giving guests sailboat and Gulf access right from the dock.",
      "Boat rental is available through a local partner, making this a natural base for a boating-focused Florida getaway.",
    ],
    highlights: [
      "Canal-front with direct water access",
      "~5 minutes to the Caloosahatchee River & Gulf",
      "Private pool",
      "Boat rental available through a local partner",
    ],
    amenities: [
      "Swimming pool",
      "Full kitchen",
      "Air conditioning",
      "Washing machine",
      "Pets allowed",
      "Internet",
    ],
    vibe: "Boater's paradise",
    houseRules: {
      checkIn: "3:00 PM",
      checkOut: "11:00 AM",
      pets: "Allowed",
      smoking: "Not permitted indoors",
    },
    cancellationPolicy: CANCELLATION_POLICY,
    featured: true,
  },
  {
    hostawayId: 384968,
    slug: "gorgeous-round-lake-4-season-waterfront-lake-house",
    name: "Gorgeous Round Lake 4 Season Waterfront Lake House",
    tagline: "A four-season waterfront escape with a new hot tub",
    location: "Round Lake, Ontario, Canada",
    region: "Ontario, Canada",
    coordinates: { lat: 45.5905, lng: -77.5333 },
    pricePerNight: 450,
    rating: 4.7,
    guests: 14,
    bedrooms: 5,
    bathrooms: 3,
    heroImage:
      "https://bookingenginecdn.hostaway.com/listing/93243-384968---1x8vIqYclaVvd1cI5JPgrKha0yaR3QKbxViXp3OUXw-680bb968477e1?width=1280&quality=70&format=webp&v=2",
    gallery: [
      "https://bookingenginecdn.hostaway.com/listing/93243-384968---1x8vIqYclaVvd1cI5JPgrKha0yaR3QKbxViXp3OUXw-680bb968477e1?width=1280&quality=70&format=webp&v=2",
      "https://bookingenginecdn.hostaway.com/listing/93243-384968-3feMqgrBUXmvHux2M0cHLoAcLdB--TntB4cZ5AO2fAfo-680ba6b399e88?width=1280&quality=70&format=webp&v=2",
      "https://bookingenginecdn.hostaway.com/listing/93243-384968-DOIoJDK9POpRuL9g6M2--r55kXaHaTcnMij3wLpvqMmc-680bcd1a747dd?width=1280&quality=70&format=webp&v=2",
      "https://bookingenginecdn.hostaway.com/listing/93243-384968-MNa4yn7RKcJo53sFiE1RFXLvaNXtGr-SIg85HkrjXYo-680ba6ae430ba?width=1280&quality=70&format=webp&v=2",
      "https://bookingenginecdn.hostaway.com/listing/93243-384968-wy1OVP--QECG77jyTJaLyrDkHyOct8RYhXpQBZ35XnjY-680bcd1939788?width=1280&quality=70&format=webp&v=2",
    ],
    description: [
      "Beautiful waterfront four-season beach house with all the luxuries of home, plus a new hot tub. Plenty of space for family and friends to spread out.",
      "Includes a bachelor apartment above the boathouse with its own full kitchen and 3-piece bathroom — ideal for extended family or a second group.",
    ],
    highlights: [
      "Sleeps up to 14 guests across the main house and boathouse apartment",
      "New hot tub",
      "Bachelor apartment above the boathouse with private kitchen & bath",
      "Usable year-round, four-season waterfront property",
    ],
    amenities: [
      "Full kitchen",
      "Air conditioning",
      "Washing machine",
      "Pets allowed",
      "Suitable for children",
      "Internet",
    ],
    vibe: "Family lake retreat",
    houseRules: {
      checkIn: "4:00 PM",
      checkOut: "10:00 AM",
      pets: "Allowed",
      smoking: "Not permitted indoors",
    },
    cancellationPolicy: CANCELLATION_POLICY,
    featured: true,
  },
  {
    hostawayId: 387238,
    slug: "sunset-bay-cottage",
    name: "Sunset Bay Cottage",
    tagline: "200 feet of private sandy waterfront",
    location: "Round Lake, Ontario, Canada",
    region: "Ontario, Canada",
    coordinates: { lat: 45.5905, lng: -77.5333 },
    pricePerNight: 320,
    rating: 4.15,
    guests: 9,
    bedrooms: 3,
    bathrooms: 2,
    heroImage:
      "https://bookingenginecdn.hostaway.com/listing/93243-387238-ZZtC2wD7tFXNmcaPBr3VS6y5KWQUwFQy1Gpbd6GnxlE-6814df7d2ee27?width=1280&quality=70&format=webp&v=2",
    gallery: [
      "https://bookingenginecdn.hostaway.com/listing/93243-387238-ZZtC2wD7tFXNmcaPBr3VS6y5KWQUwFQy1Gpbd6GnxlE-6814df7d2ee27?width=1280&quality=70&format=webp&v=2",
      "https://bookingenginecdn.hostaway.com/listing/93243-387238-qxw70N8-XmAp7tAIm5wZCbKyxajzOUBSG02RFKLdlVk-6814df7be368e?width=1280&quality=70&format=webp&v=2",
      "https://bookingenginecdn.hostaway.com/listing/93243-387238-IM2fewTt8kgx1WcGJR0iUEtj9KL-28MNFACj11kyDEs-6814df7a50f26?width=1280&quality=70&format=webp&v=2",
      "https://bookingenginecdn.hostaway.com/listing/93243-387238-Xmx6do1flvg8dVvrUj-5PIgGhG--xksOwGCcZG-XcymU-6814df78c3b39?width=1280&quality=70&format=webp&v=2",
      "https://bookingenginecdn.hostaway.com/listing/93243-387238-JwOAyv--d1VVjPJMMnHafI2fy6LZvtSIXuaIVsT4xfp8-6814df7729e50?width=1280&quality=70&format=webp&v=2",
    ],
    description: [
      "A one-of-a-kind layout with stylish design and breathtaking views from the private master suite, which features a king bed, sitting area and ensuite bathroom.",
      "Enjoy 200 feet of stunning private waterfront with a sandy beach and firepit — right outside your door.",
    ],
    highlights: [
      "200' of private sandy waterfront",
      "Private master suite with king bed & ensuite",
      "Firepit on the beach",
      "One-of-a-kind stylish layout",
    ],
    amenities: [
      "Full kitchen",
      "Pets allowed",
      "Internet / Wireless",
      "Smoke detector",
      "Carbon monoxide detector",
    ],
    vibe: "Waterfront hideaway",
    houseRules: {
      checkIn: "4:00 PM",
      checkOut: "10:00 AM",
      pets: "Allowed",
      smoking: "Not permitted indoors",
    },
    cancellationPolicy: CANCELLATION_POLICY,
    featured: true,
  },
];

export const getFeaturedProperties = () =>
  properties.filter((p) => p.featured);

export const getPropertyBySlug = (slug: string) =>
  properties.find((p) => p.slug === slug);

export const getSimilarProperties = (slug: string, count = 3) =>
  properties.filter((p) => p.slug !== slug).slice(0, count);
