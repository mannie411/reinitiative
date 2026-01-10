import { Image } from "@/components/shared/blocks";
import { imgAboutBg2, imgAboutBg3 } from "@/assets";

function Column1() {
  return (
    <div
      className="basis-0 content-stretch flex flex-col gap-[36px] grow 
      items-start relative  w-full"
      data-name="Column"
    >
      <div
        className="content-stretch flex flex-col gap-[16px] items-start relative  w-full"
        data-name="Content"
      >
        <p
          className="font-avenir-lt leading-[normal] not-italic relative 
         text-[12px] tracking-[2.4px] uppercase w-full"
        >
          Who We Serve
        </p>
        <p className=" font-normal leading-[normal] relative  text-[16px] w-full">
          <span>{`We work with visionary founders who `}</span>
          <span className=" italic">refuse to settle</span>. Who see the gap
          between where they are and w
          <span className=" italic">{`here they're going.`}</span>
          <span>{` Who understand that real transformation requires more than`}</span>
          <span className=" italic">{` a new logo or marketing campaign.`}</span>
        </p>
      </div>
      <div
        className="bg-[#a0abc0] h-[300px] md:h-[538px] overflow-clip relative  w-full"
        data-name="Image"
      >
        <Image imgSrc={imgAboutBg2} className="size-full" />
      </div>
    </div>
  );
}

function Column2() {
  return (
    <div
      className="basis-0 content-stretch flex flex-col gap-[36px] grow 
      items-start  relative  w-full"
      data-name="Column"
    >
      <div
        className="bg-[#a0abc0] h-[300px] md:h-[538px] overflow-clip relative  w-full"
        data-name="Image"
      >
        <Image imgSrc={imgAboutBg3} className="size-full" />
      </div>
      <div
        className="content-stretch flex flex-col items-center relative  w-full"
        data-name="Content"
      >
        <div
          className=" font-normal leading-[normal] relative  
        t text-[16px] text-center w-full"
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
    <section className="relative">
      <div className="container">
        <div
          className="content-stretch flex flex-col md:flex-row gap-[60px] 
        md:gap-[80px] items-center justify-center py-[40px] md:py-[80px]"
          data-name="Section"
        >
          <Column1 />
          <Column2 />
        </div>
      </div>
    </section>
  );
}
