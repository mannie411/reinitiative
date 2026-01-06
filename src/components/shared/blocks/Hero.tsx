import type { PropsWithChildren } from "react";
import { PlaceholderVideo } from "../blocks/Placeholder";
import { ImagePlaceholder } from "./Icons";

export function HeroSection() {
  return (
    <section className="relative -mt-[80px]">
      <div
        className="bg-[#2d3648] min-h-screen shrink-0 w-full overflow-hidden"
        data-name="Hero"
      >
        <div
          className="absolute h-full  w-full overflow-clip top-[90px] left-1/2 -translate-x-1/2"
          data-name="Hero"
        >
          <PlaceholderVideo />
        </div>
      </div>
    </section>
  );
}

export function HeroBanner({ children }: PropsWithChildren) {
  return (
    <div
      className="bg-white content-stretch flex flex-col h-[373px] 
      items-center overflow-clip relative shrink-0 w-full"
      data-name="Hero"
    >
      <div
        className="basis-0 bg-[#53627e] grow min-h-px min-w-px overflow-clip relative shrink-0 w-full"
        data-name="Image"
      >
        <div
          className="absolute left-1/2 size-[80px] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] z-0"
          data-name="image-01"
        >
          <ImagePlaceholder />
        </div>
        <div
          className="absolute content-stretch flex flex-col items-center left-[calc(50%+2px)] 
      top-[calc(50%-11.5px)] translate-x-[-50%] translate-y-[-50%] w-full px-4 z-10"
          data-name="Heading"
        >
          {children}
        </div>
      </div>
    </div>
  );
}
