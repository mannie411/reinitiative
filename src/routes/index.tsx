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

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  useDocumentTitle("RE:Initivative");

  return (
    <Fragment>
      <HeroSection />
      <SelectedWork />
      {/* <OurProcess /> */}
      <CompanyLogos />
      <Testimonials />
    </Fragment>
  );
}
