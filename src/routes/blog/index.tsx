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
  useDocumentTitle("Blogs | RE:Initiative");

  return (
    <Fragment>
      <HeroBanner>
        <p className="font-gt-super-ds leading-[normal] not-italic relative shrink-0 text-[18px] md:text-[22px] text-center text-white tracking-[-0.44px] w-full max-w-[420px]">
          <span>{`Thoughts on brand building, strategy, design, and the systems that `}</span>
          <span className="italic">connect</span>
          <span>{` them.`}</span>
        </p>
      </HeroBanner>
      <BlogList />
      <CompanyLogos />
      <Testimonials />
    </Fragment>
  );
}
