import { createFileRoute } from "@tanstack/react-router";
import {
  Hero,
  SelectedWork,
  CompanyLogos,
  Testimonials,
  OurProcess,
} from "@/app/components/pages/home";
import { useDocumentTitle } from "../hooks";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  useDocumentTitle("RE:Initivative");

  return (
    <>
      <Hero />
      <SelectedWork />
      <CompanyLogos />
      <OurProcess />
      <Testimonials />
    </>
  );
}
