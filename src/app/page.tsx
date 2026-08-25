import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import Amenities from "@/components/home/Amenities";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedProperties />
      <Amenities />
      <FAQ />
      <CTA />
    </>
  );
}
