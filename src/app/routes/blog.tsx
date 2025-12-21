import { createFileRoute } from "@tanstack/react-router";
import { BlogHero, BlogList } from "../components/pages/blog";
import { CompanyLogos, Testimonials } from "../components/pages/home";
import { useDocumentTitle } from "../hooks";

export const Route = createFileRoute("/blog")({
  component: BlogPage,
});

export function BlogPage() {
  useDocumentTitle("Blogs | RE:Initiative");

  return (
    <div className="bg-white min-h-screen flex flex-col font-sans w-full">
      <BlogHero />
      <BlogList />
      <CompanyLogos />
      <Testimonials />
    </div>
  );
}
