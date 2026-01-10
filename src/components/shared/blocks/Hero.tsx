import type { HeroProp } from "@/types";
import { Image } from "../blocks";
import { ImagePlaceholder } from "./Icons";
import { cn } from "@/components/ui/utils";

export function HeroSection({
  imgSrc,
  videoSrc,
}: {
  imgSrc?: string;
  videoSrc?: string;
}) {
  return (
    <section className="relative -mt-[80px] hero">
      <div
        className="bg-[#2d3648] min-h-screen  w-full overflow-hidden"
        data-name="Hero"
      >
        {videoSrc && (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="max-w-full h-screen object-cover size-full"
          >
            <source src={videoSrc} type="video/webm" />
            <source src={videoSrc} type="video/mp4 " />
            Your browser does not support the video tag.
          </video>
        )}

        {!videoSrc && <Image imgSrc={imgSrc} className="size-full" />}
      </div>
    </section>
  );
}

export function HeroBanner({ children, bgImage }: HeroProp) {
  return (
    <div
      className="content-stretch flex flex-col h-[min-content]
      items-center overflow-clip relative  w-full py-[32px] md:py-[64px]"
      data-name="Hero"
    >
      <div
        className={cn(
          "basis-0 bg-[#53627e] grow min-h-px min-w-px overflow-clip relative  w-full",
          bgImage ? "block" : "hidden"
        )}
        data-name="Image"
      >
        <div
          className="absolute left-1/2 size-[80px] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] z-0"
          data-name="image-01"
        >
          <ImagePlaceholder />
        </div>
      </div>
      {/* <div
        className="absolute content-stretch flex flex-col items-center left-[calc(50%+2px)] 
      top-[calc(50%-11.5px)] translate-x-[-50%] translate-y-[-50%] w-full px-4 z-10"
        data-name="Heading"
      >
        {children}
      </div> */}

      {children}
    </div>
  );
}
