export interface Property {
  hostawayId: number;
  slug: string;
  name: string;
  tagline: string;
  location: string;
  region: string;
  coordinates: { lat: number; lng: number };
  pricePerNight: number;
  rating: number;
  reviewCount?: number;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  heroImage: string;
  gallery: string[];
  description: string[];
  highlights: string[];
  amenities: string[];
  vibe: string;
  houseRules: {
    checkIn: string;
    checkOut: string;
    pets: string;
    smoking: string;
  };
  cancellationPolicy: string;
  featured?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}
