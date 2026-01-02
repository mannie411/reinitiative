import { ImagePlaceholder } from "@/components/shared/layout/Icons";

function Image() {
  return (
    <div
      className="bg-[#a0abc0] h-[300px] md:h-[538px] overflow-clip relative shrink-0 w-full"
      data-name="Image"
    >
      <div
        className="absolute left-1/2 size-[80px] top-1/2 translate-x-[-50%] translate-y-[-50%]"
        data-name="image-01"
      >
        <ImagePlaceholder />
      </div>
    </div>
  );
}

function Column2() {
  return (
    <div
      className="basis-0 content-stretch flex flex-col gap-[36px] grow 
      items-start relative shrink-0 w-full"
      data-name="Column"
    >
      <div
        className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
        data-name="Content"
      >
        <p
          className="font-avenir-lt leading-[normal] not-italic relative shrink-0
         text-[#53627e] text-[12px] tracking-[2.4px] uppercase w-full"
        >
          Who We Serve
        </p>
        <p className=" font-normal leading-[normal] relative shrink-0 text-[#2d3648] text-[16px] w-full">
          <span>{`We work with visionary founders who `}</span>
          <span className=" italic">refuse to settle</span>. Who see the gap
          between where they are and w
          <span className=" italic">{`here they're going.`}</span>
          <span>{` Who understand that real transformation requires more than`}</span>
          <span className=" italic">{` a new logo or marketing campaign.`}</span>
        </p>
      </div>
      <Image />
    </div>
  );
}

function Column3() {
  return (
    <div
      className="basis-0 content-stretch flex flex-col gap-[36px] grow 
      items-start  relative shrink-0 w-full"
      data-name="Column"
    >
      <Image />
      <div
        className="content-stretch flex flex-col items-center relative shrink-0 w-full"
        data-name="Content"
      >
        <div
          className=" font-normal leading-[normal] relative shrink-0 
        text-[#2d3648] text-[16px] text-center w-full"
        >
          <p className="mb-0">{`You have traction but your brand doesn't match your ambition. 
          You're solving real problems but struggling to communicate your value.
          You're ready to invest in transformation, not just tactics.`}</p>
          <p className="mb-0">&nbsp;</p>
          <p className="font-medium italic">We meet you at that moment.</p>
        </div>
      </div>
    </div>
  );
}

export function WhoWeServe() {
  return (
    <div
      className="content-stretch flex flex-col items-start md:pb-[120px] 
      pt-[40px] md:pt-[90px] px-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="content-stretch flex flex-col md:flex-row gap-[60px] 
        md:gap-[80px] items-center justify-center px-[20px] md:px-[40px] py-0 
        relative shrink-0 w-full max-w-[1080px] mx-auto"
        data-name="Section"
      >
        <Column2 />
        <Column3 />
      </div>
    </div>
  );
}
