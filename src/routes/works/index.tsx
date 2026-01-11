import { Fragment } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { WorkList } from "@/components/pages/works";
import {
  CompanyLogos,
  HeroBanner,
  Testimonials,
} from "@/components/shared/blocks";
import { useDocumentTitle } from "@/hooks";

export const Route = createFileRoute("/works/")({
  component: SelectedWorksPage,
});

export function SelectedWorksPage() {
  useDocumentTitle("Works | Re:Initiative");

  return (
    <Fragment>
      <HeroBanner>
        <h3 className="text-[18px] md:text-[22px] leading-[25px] font-normal text-center w-full max-w-[500px]">
          <span className="not-italic">Re:Initiative</span> is a strategic
          consultancy,
          <span className="not-italic"> specializing</span>
          <span> in brand transformation </span>
          <span className="not-italic">through</span>
          <span> integrated strategy, design, and growth architecture.</span>
        </h3>
      </HeroBanner>
      <WorkList />
      <CompanyLogos />
      <Testimonials />
    </Fragment>
  );
}
