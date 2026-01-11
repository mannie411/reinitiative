import { Fragment } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { ArticleContent, RelatedBlogs } from "@/components/pages/blog";
import { CompanyLogos, Testimonials } from "@/components/shared/blocks";
import { useDocumentTitle } from "@/hooks";

export const Route = createFileRoute("/blog/$articleId")({
  component: BlogArticlePage,
});

export function BlogArticlePage() {
  useDocumentTitle("Article | Re:Initiative");

  return (
    <Fragment>
      <ArticleContent />
      <RelatedBlogs />
      <CompanyLogos />
      <Testimonials />
    </Fragment>
  );
}
