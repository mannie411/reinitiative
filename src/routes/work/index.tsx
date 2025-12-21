import { createFileRoute } from "@tanstack/react-router";
import { BookCall, WorksGrid, WorksHero } from "@/components/pages/works";
import { CompanyLogos, Testimonials } from "@/components/pages/home";
import { useDocumentTitle } from "@/hooks";

export const Route = createFileRoute("/work/")({
  component: SelectedWorksPage,
});

export function SelectedWorksPage() {
  useDocumentTitle("Works | RE:Initiative");

  return (
    <div className="bg-white min-h-screen flex flex-col font-sans w-full">
      <WorksHero />

      {/* This section corresponds to 'About Us' in DesktopWorks.tsx which wraps the grid and the button */}
      <div className="bg-white relative shrink-0 w-full">
        <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[64px] items-center pb-[90px] pt-[60px] md:pt-[120px] relative w-full">
            {/* The grid component has its own internal width constraints but we need to ensure layout matches */}
            <WorksGrid />
            <BookCall />
          </div>
        </div>
      </div>

      <CompanyLogos />
      <Testimonials />
    </div>
  );
}
