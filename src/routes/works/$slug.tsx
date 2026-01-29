import { Fragment, useMemo } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  CompanyLogos,
  HeroSection,
  Testimonials,
  Video,
  Image,
} from "@/components/shared/blocks";
import { getPost, useDocumentTitle, usePost, useRelatedPosts } from "@/hooks";
import { RelatedWorks } from "@/components/pages/works";
import { queryClient } from "@/lib";
import { Skeleton } from "@/components/ui";
import { BlockRenderer } from "@/components/wp-blocks";

export const Route = createFileRoute("/works/$slug")({
  loader: async ({ params }) => {
    const query = getPost("work", params.slug);

    await queryClient.ensureQueryData(query);

    return {
      postType: "work" as const,
      slug: params.slug,
    };
  },
  component: RouteComponent,
});

// function MainContent({ data }: { data: any }) {
//   return (
//     <Fragment>
//       <section className="relative w-full hidden" data-name="Work Section">
//         <div className="container py-[4opx] md:py-[80px]">
//           <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
//             <div className="content-stretch flex flex-col gap-[72px] items-center  relative w-full">
//               <DescriptionSection />
//               <ImageFullWidth />
//               <ImageFullWidth />
//               <QuoteSection />
//               <ImageFullWidth />
//               <WorkWithUsCTA />
//             </div>
//           </div>
//         </div>
//       </section>
//     </Fragment>
//   );
// }

export function RouteComponent() {
  useDocumentTitle("Work | Re:Initiative");

  const { postType, slug } = Route.useLoaderData();

  const { data, isLoading } = usePost({
    postType,
    slug,
  });

  const { heroFormat, heroType, heroSrc } = useMemo(() => {
    const heroType = data?.heroFields?.hero?.at(0);
    const heroFormat = data?.heroFields?.heroFormat?.at(0);
    const isImage = heroType === "full_image" || heroType === "default_image";
    const isVideo = heroType === "default_image" || heroType === "full_video";
    const isFull = heroType === "full_image" || heroType === "full_video";
    let heroSrc: string | null | undefined;
    if (isImage) {
      switch (heroFormat) {
        case "image_upload":
          heroSrc = data?.heroFields?.imageUrl;
          break;
        case "image_url":
          heroSrc = data?.heroFields?.imageUpload?.node.sourceUrl;
          break;
        case "image_embed":
          heroSrc = data?.heroFields?.imageEmbed;
          break;
      }
    }

    if (isVideo) {
      switch (heroFormat) {
        case "video_upload":
          heroSrc = data?.heroFields?.videoEmbed;
          break;
        case "video_url":
          heroSrc = data?.heroFields?.videoUrl;
          break;
        case "video_embed":
          heroSrc = data?.heroFields?.videoUpload?.node.sourceUrl;
          break;
      }
    }

    return {
      heroSrc,
      heroType: isFull ? "full" : "default",
      heroFormat: isVideo ? "video" : "image",
    };
  }, [data]);

  const { data: works, isLoading: isLoadingWorks } = useRelatedPosts({
    first: 3,
    categoryIds: [],
    excludeId: data?.categories?.nodes?.at(0)?.databaseId ?? 1,
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
          {heroType === "full" ? (
            <Fragment>
              {heroFormat === "video" && <HeroSection videoSrc={heroSrc} />}
              {heroFormat === "image" && <HeroSection imgSrc={heroSrc} />}
            </Fragment>
          ) : (
            <section className="relative w-full">
              <div
                className="container h-[500px] md:h-[708px] overflow-clip relative"
                data-name="Image"
              >
                {heroFormat === "video" && (
                  <Video videoSrc={heroSrc} className="size-full" />
                )}
                {heroFormat === "image" && (
                  <Image imgSrc={heroSrc} className="size-full" />
                )}
              </div>
            </section>
          )}

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

      <RelatedWorks data={works ?? []} isLoading={isLoadingWorks} />

      <CompanyLogos />
      <Testimonials />
    </Fragment>
  );
}
