import { Image } from "@/components/shared/blocks";

// import { VideoPlaceholder } from "@/components/shared/blocks/Icons";

import { imgAboutBg1 } from "@/assets";

// function Film() {
//   return (
//     <div
//       className="absolute left-1/2 size-[80px] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%]"
//       data-name="film"
//     >
//       <VideoPlaceholder />
//     </div>
//   );
// }

export function VideoSection() {
  return (
    <section className="relative bg-[#2d3648] my-[40px]  md:my-[80px]">
      <div
        className="content-stretch flex flex-col items-center relative  w-full"
        data-name="Container"
      >
        <div
          className="content-stretch flex h-[353px] items-start relative  overflow-clip w-full"
          data-name="Row"
        >
          <Image imgSrc={imgAboutBg1} className="size-full" />
          {/* <div
            className="basis-0 content-stretch flex flex-col gap-[32px] 
          grow h-full items-start relative "
          >
            <div
              className="basis-0  grow min-h-px min-w-px overflow-clip relative  w-full"
              data-name="Image"
            >
              <Film />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
