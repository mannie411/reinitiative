import { Fragment } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  SelectedWork,
  CompanyLogos,
  Testimonials,
  OurProcess,
} from "@/components/pages/home";
import { useDocumentTitle } from "@/hooks";
import { HeroSection } from "@/components/shared";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  useDocumentTitle("RE:Initivative");

  return (
    <Fragment>
      <HeroSection />
      <SelectedWork />
      <CompanyLogos />
      <OurProcess />
      <Testimonials />
    </Fragment>
  );
}
