import { createFileRoute } from "@tanstack/react-router";

import { ArticleContent, RelatedArticles } from "@/components/pages/blog";
import { CompanyLogos, Testimonials } from "@/components/pages/home";

export const Route = createFileRoute("/blog/$articleId")({
  component: BlogArticlePage,
});

export function BlogArticlePage() {
  return (
    <div className="bg-white min-h-screen flex flex-col font-sans w-full">
      <ArticleContent />
      <RelatedArticles />
      <CompanyLogos />
      <Testimonials />
    </div>
  );
}
