import { PlaceholderImage } from "@/components/shared/blocks/Placeholder";

function Image() {
  return (
    <div
      className="bg-[#a0abc0] h-[500px] md:h-[708px] overflow-clip relative shrink-0 w-full"
      data-name="Image"
    >
      <PlaceholderImage />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 uppercase w-full">
      <p className="font-avenir-lt not-italic relative shrink-0 text-[#a0abc0] text-[10px] tracking-[4px] w-full text-center">
        CATEGORY
      </p>
      <p className=" font-medium relative shrink-0 text-[#2d3648] text-[24px] md:text-[32px] tracking-[6.4px] w-full text-center">
        name of article
      </p>
      <p className="font-avenir-lt not-italic relative shrink-0 text-[#a0abc0] text-[10px] tracking-[4px] w-full text-center">
        november 14, 2025
      </p>
    </div>
  );
}

function Content() {
  return (
    <div
      className="content-stretch flex flex-col gap-[32px] items-center leading-[normal] relative shrink-0 text-center w-full max-w-[750px]"
      data-name="Content"
    >
      <Frame5 />
      <p className=" font-normal relative shrink-0 text-[#53627e] text-[16px] w-full text-left md:text-justify">
        Lorem ipsum dolor sit amet consectetur. Condimentum massa enim imperdiet
        feugiat odio aliquam praesent mattis vitae. Lobortis pellentesque leo
        congue adipiscing eleifend magna diam. Quis eget mi amet parturient
        fermentum amet vulputate curabitur maecenas. Sed faucibus quis magna
        gravida ut donec. Neque integer at turpis metus tellus. Lacus suscipit
        ac tempus integer lacinia consequat. Et rhoncus tristique ipsum et
        bibendum diam nulla proin massa. Habitasse massa velit arcu vitae morbi
        egestas. Amet vel ante egestas vulputate pharetra lectus felis nisl.
      </p>
      <p className=" font-normal relative shrink-0 text-[#53627e] text-[16px] w-full text-left md:text-justify">
        Lorem ipsum dolor sit amet consectetur. Condimentum massa enim imperdiet
        feugiat odio aliquam praesent mattis vitae. Lobortis pellentesque leo
        congue adipiscing eleifend magna diam. Quis eget mi amet parturient
        fermentum amet vulputate curabitur maecenas. Sed faucibus quis magna
        gravida ut donec. Neque integer at turpis metus tellus. Lacus suscipit
        ac tempus integer lacinia consequat. Et rhoncus tristique ipsum et
        bibendum diam nulla proin massa. Habitasse massa velit arcu vitae morbi
        egestas. Amet vel ante egestas vulputate pharetra lectus felis nisl.
      </p>
      <p className=" font-normal relative shrink-0 text-[#53627e] text-[16px] w-full text-left md:text-justify">
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

export function ArticleContent() {
  return (
    <div
      className="content-stretch flex flex-col gap-[64px] items-center justify-center px-[20px] md:px-0 py-[60px] md:py-[90px] relative shrink-0 w-full max-w-[1080px] mx-auto"
      data-name="Section"
    >
      <Image />
      <Content />
    </div>
  );
}
