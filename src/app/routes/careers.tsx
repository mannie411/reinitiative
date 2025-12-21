import { createFileRoute } from "@tanstack/react-router";
import {
  CareersHero,
  CareersValues,
  CareersJoin,
} from "@/app/components/pages/careers";
import { CompanyLogos, Testimonials } from "@/app/components/pages/home";
import { useDocumentTitle } from "../hooks";

export const Route = createFileRoute("/careers")({
  component: CareersPage,
});

export function CareersPage() {
  useDocumentTitle("Careers | RE:Initiative");

  return (
    <div className="bg-white min-h-screen flex flex-col font-sans w-full">
      <CareersHero />
      <CareersValues />
      <CareersJoin />
      <CompanyLogos />
      <Testimonials />
    </div>
  );
}
