import { Fragment } from "react";
import { createFileRoute } from "@tanstack/react-router";

import {
  AboutBookCall,
  AboutHero,
  PhilosophyApproach,
  VideoSection,
  WhoWeServe,
} from "@/components/pages/about";

import { useDocumentTitle } from "@/hooks";
import { CompanyLogos, Testimonials } from "@/components/shared/blocks";

export const Route = createFileRoute("/about-us")({
  component: AboutPage,
});

export function AboutPage() {
  useDocumentTitle("About | Re:Initiative");

  return (
    <Fragment>
      <AboutHero />
      <PhilosophyApproach />
      <VideoSection />
      <WhoWeServe />
      <AboutBookCall />
      <CompanyLogos />
      <Testimonials />
    </Fragment>
  );
}
