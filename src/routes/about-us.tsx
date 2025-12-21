import { createFileRoute } from "@tanstack/react-router";

import {
  AboutBookCall,
  AboutHero,
  PhilosophyApproach,
  VideoSection,
  WhoWeServe,
} from "@/components/pages/about";
import { CompanyLogos, Testimonials } from "@/components/pages/home";
import { useDocumentTitle } from "@/hooks";

export const Route = createFileRoute("/about-us")({
  component: AboutPage,
});

export function AboutPage() {
  useDocumentTitle("About | RE:Initiative");

  return (
    <div className="bg-white min-h-screen flex flex-col font-sans w-full">
      <AboutHero />
      <PhilosophyApproach />
      <VideoSection />
      <WhoWeServe />
      <AboutBookCall />
      <CompanyLogos />
      <Testimonials />
    </div>
  );
}
