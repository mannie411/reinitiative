import { Fragment } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { ArticleContent, RelatedArticles } from "@/components/pages/blog";

export const Route = createFileRoute("/blog/$articleId")({
  component: BlogArticlePage,
});

export function BlogArticlePage() {
  return (
    <Fragment>
      <ArticleContent />
      <RelatedArticles />
    </Fragment>
  );
}
