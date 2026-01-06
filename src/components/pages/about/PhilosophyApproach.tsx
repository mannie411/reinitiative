import { ImagePlaceholder } from "@/components/shared/blocks/Icons";

function Philosophy() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-start relative  w-full"
      data-name="Content"
    >
      <p
        className="font-avenir-lt leading-[normal] not-italic relative  text-[#53627e] 
      text-[12px] tracking-[2.4px] uppercase w-full"
      >
        our Philosophy
      </p>
      <div
        className="font-eb-garamond font-normal leading-[normal] relative 
       text-[#2d3648] text-[16px] w-full"
      >
        <p className="mb-0">{`Transformation isn't a service. It's a system.`}</p>
        <p className="mb-0">
          Strategy shapes design. Design amplifies story. Story drives growth.
          Growth needs structure.
        </p>
        <p className="mb-0">&nbsp;</p>
        <p className="font-eb-garamond font-medium italic">
          Everything connected. Everything working together.
        </p>
      </div>
    </div>
  );
}

function PhilosophyColumn() {
  return (
    <div
      className="relative basis-0 content-stretch flex flex-col gap-[36px] grow 
      items-start w-full"
      data-name="Column"
    >
      <Philosophy />
      <div
        className="relative bg-[#a0abc0] h-[300px] md:h-[538px] overflow-clip   w-full"
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

function Approach() {
  return (
    <div
      className="relative content-stretch flex flex-col gap-[16px] items-center
        md:text-center text-left w-full"
      data-name="Content"
    >
      <p
        className="font-avenir-lt leading-[normal] not-italic relative 
       text-[#53627e] text-[12px] tracking-[2.4px] uppercase w-full"
      >
        our approach
      </p>
      <div
        className="font-eb-garamond font-normal leading-[normal] relative 
       text-[#2d3648] text-[16px] w-full"
      >
        <p className="mb-0">
          We work with brands at their turning point—between potential and
          performance.
        </p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">
          We rebuild five areas: strategy, identity, narrative, growth,
          operations.
        </p>
        <p>{`Brands that don't just look different. Brands that work differently.`}</p>
      </div>
    </div>
  );
}

function ApproachColumn() {
  return (
    <div
      className="relative basis-0 content-stretch flex flex-col gap-[36px] 
      grow items-start w-full"
      data-name="Column"
    >
      <div
        className="bg-[#a0abc0] h-[300px] md:h-[538px] overflow-clip relative  w-full"
        data-name="Image"
      >
        <div
          className="absolute left-1/2 size-[80px] top-1/2 translate-x-[-50%] translate-y-[-50%]"
          data-name="image-01"
        >
          <ImagePlaceholder />
        </div>
      </div>
      <Approach />
    </div>
  );
}

export function PhilosophyApproach() {
  return (
    <section className="relative">
      <div className="container">
        <div
          className="content-stretch flex flex-col md:flex-row gap-[60px] 
          md:gap-[80px] items-center justify-center py-[20px] md:py-[80px] "
          data-name="Section"
        >
          <PhilosophyColumn />
          <ApproachColumn />
        </div>
      </div>
    </section>
  );
}
