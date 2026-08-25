import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/data/site";
import { properties } from "@/data/properties";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const title = "My Dream Vacation Rentals | Florida & Ontario Waterfront Homes";
const description =
  "Short term rental vacation homes in Florida and Ontario, Canada — hand-picked waterfront properties booked direct, with no platform fees.";
const shareImage = properties[0].heroImage;

export const metadata: Metadata = {
  metadataBase: new URL(`https://${siteConfig.domain}`),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "/",
    siteName: siteConfig.name,
    type: "website",
    images: [{ url: shareImage, width: 1280, height: 853, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [shareImage],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${fraunces.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
