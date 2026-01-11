import { Fragment } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { BlogList } from "@/components/pages/blog";
import { useDocumentTitle } from "@/hooks";
import {
  CompanyLogos,
  HeroBanner,
  Testimonials,
} from "@/components/shared/blocks";

export const Route = createFileRoute("/blog/")({
  component: BlogPage,
});

export function BlogPage() {
  useDocumentTitle("Blogs | Re:Initiative");

  return (
    <Fragment>
      <HeroBanner>
        <h3 className="text-[18px] md:text-[22px] leading-[25px] font-normal text-center w-full max-w-[500px]">
          <span>Thoughts on brand building, strategy, design, </span>
          <br />
          <span>and the systems that</span>
          <span className="not-italic"> connect</span>
          <span> them.</span>
        </h3>
      </HeroBanner>
      <BlogList />
      <CompanyLogos />
      <Testimonials />
    </Fragment>
  );
}
