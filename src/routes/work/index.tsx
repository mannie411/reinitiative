import { Fragment } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { WorksGrid } from "@/components/pages/works";
import {
  ButtonUnderline,
  CompanyLogos,
  HeroBanner,
  Testimonials,
} from "@/components/shared/blocks";
import { useDocumentTitle } from "@/hooks";

export const Route = createFileRoute("/work/")({
  component: SelectedWorksPage,
});

export function SelectedWorksPage() {
  useDocumentTitle("Works | RE:Initiative");

  return (
    <Fragment>
      <HeroBanner>
        <p
          className="leading-[normal] not-italic relative shrink-0
       text-[18px] md:text-[22px] text-center text-white tracking-[-0.44px] w-full max-w-[740px]"
        >
          <span>Re:Initiative is a strategic consultancy, </span>
          <span className="not-italic">specializing</span>
          <span>{` in brand transformation `}</span>
          <span className="not-italic">through</span>
          <span> integrated strategy, design, and growth architecture.</span>
        </p>
      </HeroBanner>

      {/* This section corresponds to 'About Us' in DesktopWorks.tsx which wraps the grid and the button */}
      <div className="bg-white relative shrink-0 w-full">
        <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[64px] items-center pb-[90px] pt-[60px] md:pt-[120px] relative w-full">
            {/* The grid component has its own internal width constraints but we need to ensure layout matches */}
            <WorksGrid />
            <ButtonUnderline
              text="Book a Call"
              onClick={() => {
                console.log("Book a call");
              }}
            />
          </div>
        </div>
      </div>
      <CompanyLogos />
      <Testimonials />
    </Fragment>
  );
}
