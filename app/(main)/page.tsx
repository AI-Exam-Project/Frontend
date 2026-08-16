// app/(main)/page.tsx
import Hero from "@/components/Hero/Hero";
import Features from "@/components/Features";
import ContactSection from "@/components/Contact/ContactSection";
import SuccessStories from "@/components/SuccessStories/SuccessStories";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <ContactSection />
      <SuccessStories />
      
    </main>
  );
}