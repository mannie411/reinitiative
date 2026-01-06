import { Fragment } from "react/jsx-runtime";
import { createFileRoute } from "@tanstack/react-router";

import { ProcessHero, ProcessSection } from "@/components/pages/process";
import { useDocumentTitle } from "@/hooks";
import { CompanyLogos, Testimonials } from "@/components/shared/blocks";

export const Route = createFileRoute("/our-services")({
  component: RouteComponent,
});

function RouteComponent() {
  useDocumentTitle("Our Process | RE:Initiative");
  return (
    <Fragment>
      <ProcessHero />
      <ProcessSection />
      <CompanyLogos />
      <Testimonials />
    </Fragment>
  );
}
