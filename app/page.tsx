import { ValuesSection } from "@/sections/purpose";
import { HeroSection } from "@/sections/hero";
import { PartenersSection } from "@/sections/partners";
import TestimonialSection from "@/sections/testimonials";

export default function Home() {
  return (
    <main className="h-full flex flex-col gap-12 justify-center py-5 items-center">
      <HeroSection />
      <PartenersSection />
      <ValuesSection />
      <TestimonialSection />
    </main>
  );
}
