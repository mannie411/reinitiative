import { Fragment } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  CareersHero,
  CareersValues,
  CareersJoin,
} from "@/components/pages/careers";

import { useDocumentTitle } from "@/hooks";
import { CompanyLogos, Testimonials } from "@/components/shared/blocks";

export const Route = createFileRoute("/careers")({
  component: CareersPage,
});

export function CareersPage() {
  useDocumentTitle("Careers | Re:Initiative");

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
