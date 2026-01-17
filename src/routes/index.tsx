import { Fragment } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  SelectedWork,
  // OurProcess,
} from "@/components/pages/home";
import { useDocumentTitle } from "@/hooks";
import {
  CompanyLogos,
  HeroSection,
  Testimonials,
} from "@/components/shared/blocks";
import { videoHomeHero2 } from "@/assets";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  useDocumentTitle("Re:Initivative");

  return (
    <Fragment>
      <HeroSection videoSrc={videoHomeHero2} />
      <SelectedWork />
      {/* <OurProcess /> */}
      <CompanyLogos />
      <Testimonials />
    </Fragment>
  );
}
