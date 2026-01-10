import { Fragment } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { WorksGrid } from "@/components/pages/works";
import {
  ButtonUnderline,
  CompanyLogos,
  HeroBanner,
  Testimonials,
} from "@/components/shared/blocks";
import { useDocumentTitle } from "@/hooks";

export const Route = createFileRoute("/works/")({
  component: SelectedWorksPage,
});

export function SelectedWorksPage() {
  useDocumentTitle("Works | RE:Initiative");
  const navigate = useNavigate();

  return (
    <Fragment>
      <HeroBanner>
        <p
          className="font-gt-super-ds leading-[normal] not-italic relative 
       text-[18px] md:text-[22px] text-center tracking-[-0.44px] w-full max-w-[600px]"
        >
          <span>RE:Initiative is a strategic consultancy, </span>
          <span className="not-italic">specializing</span>
          <span>{` in brand transformation `}</span>
          <span className="not-italic">through</span>
          <span> integrated strategy, design, and growth architecture.</span>
        </p>
      </HeroBanner>

      {/* This section corresponds to 'About Us' in DesktopWorks.tsx which wraps the grid and the button */}
      <section className="relative w-full">
        <div className="container ">
          <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col items-center  relative w-full">
              {/* The grid component has its own internal width constraints but we need to ensure layout matches */}
              <WorksGrid />
              <ButtonUnderline
                text="Book a Call"
                onClick={() => {
                  navigate({ to: "/booking" });
                  console.log("Book a call");
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <CompanyLogos />
      <Testimonials />
    </Fragment>
  );
}
