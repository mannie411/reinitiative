import { Fragment } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  CareersHero,
  CareersValues,
  CareersJoin,
} from "@/components/pages/careers";
import { CompanyLogos, Testimonials } from "@/components/pages/home";
import { useDocumentTitle } from "@/hooks";

export const Route = createFileRoute("/careers")({
  component: CareersPage,
});

export function CareersPage() {
  useDocumentTitle("Careers | RE:Initiative");

  return (
    <Fragment>
      <CareersHero />
      <CareersValues />
      <CareersJoin />
      <CompanyLogos />
      <Testimonials />
    </Fragment>
  );
}
