import { VideoPlaceholder } from "@/components/shared/blocks/Icons";

function Film() {
  return (
    <div
      className="absolute left-1/2 size-[80px] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%]"
      data-name="film"
    >
      <VideoPlaceholder />
    </div>
  );
}

export function VideoSection() {
  return (
    <section className="relative bg-[#2d3648] my-[40px]  md:my-[80px]">
      <div
        className="content-stretch flex flex-col items-center relative shrink-0 w-full"
        data-name="Container"
      >
        <div
          className="content-stretch flex h-[353px] items-start relative shrink-0 w-full"
          data-name="Row"
        >
          <div
            className="basis-0 content-stretch flex flex-col gap-[32px] 
          grow h-full items-start relative shrink-0"
          >
            <div
              className="basis-0  grow min-h-px min-w-px overflow-clip relative shrink-0 w-full"
              data-name="Image"
            >
              <Film />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
