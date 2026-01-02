import { ImagePlaceholder } from "@/components/shared/layout/Icons";

function Heading() {
  return (
    <div
      className="content-stretch flex flex-col items-center relative shrink-0 w-full max-w-[620px] px-4"
      data-name="Heading"
    >
      <p
        className="font-gt-super-ds leading-[normal] not-italic 
      relative shrink-0 text-[#2d3648] text-[22px] text-center tracking-[-0.44px] w-full max-w-[362px]"
      >
        <span>{`If you're ready to create and collaborate, we'd love`}</span>
        <span className="italic">{` to hear from you`}</span>
      </p>
    </div>
  );
}

function Button() {
  return (
    <div
      className="content-stretch flex items-center 
      justify-center pb-[12px] pt-0 px-0 relative shrink-0 cursor-pointer group"
      data-name="Button"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_1px] border-[rgba(160,171,192,0.8)] border-solid inset-0 
        pointer-events-none group-hover:border-[#2d3648] transition-colors"
      />
      <p
        className="font-eb-garamond font-semibold leading-[normal] relative shrink-0
       text-[#53627e] text-[16px] text-center text-nowrap tracking-[6.4px] group-hover:text-[#2d3648] transition-colors"
      >
        JOIN US
      </p>
    </div>
  );
}

function Image() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-[300px] md:h-[478px] items-start justify-self-stretch relative shrink-0 w-full">
      <div
        className="basis-0 bg-[#a0abc0] grow min-h-px min-w-px overflow-clip relative shrink-0 w-full"
        data-name="Image"
      >
        <div
          className="absolute left-1/2 size-[80px] top-1/2 translate-x-[-50%] translate-y-[-50%]"
          data-name="image-01"
        >
          <ImagePlaceholder />
        </div>
      </div>
    </div>
  );
}

export function CareersJoin() {
  return (
    <div
      className="content-stretch flex flex-col gap-[64px] items-center 
      px-[20px] md:px-[180px] py-[90px] relative shrink-0 w-full "
      data-name="Container"
    >
      <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full">
        <Heading />
        <Button />
      </div>

      <div
        className="gap-[32px] grid grid-cols-1 md:grid-cols-2 relative shrink-0 w-full"
        data-name="Row"
      >
        {[...Array(4)].map((i) => (
          <Image key={`item-${i}`} />
        ))}{" "}
      </div>
    </div>
  );
}
