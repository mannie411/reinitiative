import { ImagePlaceholder, LinkUnderline } from "@/components/shared/blocks";

export function BrandDescription() {
  return (
    <div
      className="content-stretch flex flex-col gap-[64px] items-start relative  w-full md:w-[607px]"
      data-name="Content"
    >
      <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative ">
        <p className=" font-medium leading-[normal] relative  text-[#2d3648] text-[16px]  tracking-[6.4px] uppercase">
          name of brand
        </p>
        <div className="content-stretch flex items-center relative ">
          <p className="font-avenir-lt leading-[normal] not-italic relative  text-[#53627e] text-[12px]  tracking-[4.8px] uppercase">
            CATEGORY
          </p>
        </div>
      </div>
      <p className=" font-normal leading-[normal] relative  text-[#53627e] text-[16px] w-full">
        Lorem ipsum dolor sit amet consectetur. Condimentum massa enim imperdiet
        feugiat odio aliquam praesent mattis vitae. Lobortis pellentesque leo
        congue adipiscing eleifend magna diam. Quis eget mi amet parturient
        fermentum amet vulputate curabitur maecenas. Sed faucibus quis magna
        gravida ut donec. Neque integer at turpis metus tellus. Lacus suscipit
        ac tempus integer lacinia consequat. Et rhoncus tristique ipsum et
        bibendum diam nulla proin massa. Habitasse massa velit arcu vitae morbi
        egestas. Amet vel ante egestas vulputate pharetra lectus felis nisl.
      </p>
    </div>
  );
}

export function Services() {
  return (
    <div
      className="content-stretch flex flex-col gap-[32px] items-start relative  text-[16px] w-full md:w-[219px]"
      data-name="Content"
    >
      <p className=" font-medium leading-[normal] relative  text-[#2d3648]  tracking-[6.4px] uppercase">
        services
      </p>
      <div className=" font-normal leading-[normal] min-w-full relative  text-[#53627e] w-[min-content]">
        <p className="mb-0">Brand Strategy Development</p>
        <p className="mb-0">{`Market Research & Analysis`}</p>
        <p className="mb-0">Competitive Intelligence</p>
        <p className="mb-0">Brand Positioning</p>
        <p className="mb-0">Audience Segmentation</p>
        <p>Brand Architecture</p>
      </div>
    </div>
  );
}

export function DescriptionSection() {
  return (
    <div
      className="content-stretch flex flex-col md:flex-row items-start 
    justify-between relative  w-full max-w-[1080px] gap-8"
    >
      <BrandDescription />
      <Services />
    </div>
  );
}

export function ImageFullWidth() {
  return (
    <div
      className="bg-[#a0abc0] h-[500px] md:h-[708px] overflow-clip relative  w-full"
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

export function QuoteSection() {
  return (
    <div className="content-stretch flex items-start justify-between relative  w-full max-w-[1080px] mt-8 mb-8">
      <div
        className="content-stretch flex flex-col items-start relative  w-full max-w-[504px]"
        data-name="Content"
      >
        <p
          className=" font-normal leading-[normal] relative  text-[#53627e] text-[16px] 
        text-center md:text-left w-full"
        >
          Lorem ipsum dolor sit amet consectetur. In massa ornare proin facilisi
          diam in fermentum. Molestie pharetra lectus feugiat tempus amet.
          Adipiscing duis interdum viverra aenean euismod commodo pellentesque
          dictumst. Quis vitae auctor nunc iaculis sapien nec morbi vitae.
        </p>
      </div>
    </div>
  );
}

export function WorkWithUsCTA() {
  return (
    <div
      className="content-stretch flex flex-col items-center relative  w-full mt-16"
      data-name="Container"
    >
      <div className="content-stretch flex flex-col gap-[48px] items-center relative  w-full max-w-[660px]">
        <div className="content-stretch flex flex-col gap-[16px] items-center relative  w-full">
          <p
            className="hidden font-medium leading-[normal] relative  text-[#2d3648] text-[20px] 
          text-center  tracking-[8px] uppercase w-full"
          >
            Explore what we do
          </p>
          <p
            className="font-gt-super-ds leading-[normal] not-italic relative  text-[#2d3648] 
          text-[22px] text-center tracking-[-0.72px] w-full"
          >
            Great brands aren't born.
            <br />
            They're <span className="italic">built.</span>
          </p>
        </div>

        <LinkUnderline
          href="/booking"
          text={"WORK WITH US"}
          variant={"router"}
        />
      </div>
    </div>
  );
}
