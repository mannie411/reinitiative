import { Fragment } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { getPost, useDocumentTitle, usePost } from "@/hooks";
import { queryClient } from "@/lib";
import { RelatedBlogs } from "@/components/pages/blog";
import { CompanyLogos, Testimonials } from "@/components/shared/blocks";
import { Skeleton } from "@/components/ui";
import { BlockRenderer } from "@/components/wp-blocks";

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ params }) => {
    const query = getPost("work", params.slug);

    await queryClient.ensureQueryData(query);

    return {
      postType: "work" as const,
      slug: params.slug,
    };
  },
  component: BlogArticlePage,
});

export function BlogArticlePage() {
  useDocumentTitle("Article | Re:Initiative");

  const { postType, slug } = Route.useLoaderData();
  const { data, isLoading } = usePost({
    postType,
    slug,
  });

  return (
    <Fragment>
      {isLoading && (
        <Fragment>
          <div className="flex-1 space-y-4">
            <Skeleton className="w-full h-[360px] md:h-[400px]" />
            <Skeleton className="w-[70%] h-[20px]" />
            <Skeleton className="w-[45%] h-[20px]" />
          </div>
        </Fragment>
      )}
      {!isLoading && (
        <Fragment>
          <article className="relative ">
            <div className="container py-[60px] md:py-[90px] space-y-8">
              <div
                className="relative hidden"
                dangerouslySetInnerHTML={{
                  __html: data?.content ?? "<p>No Content</p>",
                }}
              />
              <BlockRenderer blocks={data?.editorBlocks ?? []} />
            </div>
          </article>
        </Fragment>
      )}
      <RelatedBlogs />
      <CompanyLogos />
      <Testimonials />
    </Fragment>
  );
}
