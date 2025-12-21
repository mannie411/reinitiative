import svgPaths from "../../../../assets/svg/svg-52b3uls4d7";

function Image3() {
  return (
    <div
      className="absolute left-1/2 size-[80px] top-1/2 translate-x-[-50%] translate-y-[-50%]"
      data-name="image-01"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 80 80"
      >
        <g id="image-01">
          <path
            d={svgPaths.p1eb7e900}
            id="Vector"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="5"
          />
          <path
            d={svgPaths.p2c4b0480}
            id="Vector_2"
            stroke="var(--stroke-0, white)"
            strokeWidth="5"
          />
          <path
            d={svgPaths.p374a8480}
            id="Vector_3"
            stroke="var(--stroke-0, white)"
            strokeWidth="5"
          />
        </g>
      </svg>
    </div>
  );
}

function Image() {
  return (
    <div
      className="bg-[#a0abc0] h-[500px] md:h-[708px] overflow-clip relative shrink-0 w-full"
      data-name="Image"
    >
      <Image3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 uppercase w-full">
      <p className="font-['Avenir_LT_Pro:55_Roman',sans-serif] not-italic relative shrink-0 text-[#a0abc0] text-[10px] tracking-[4px] w-full text-center">
        CATEGORY
      </p>
      <p className="font-['EB_Garamond:Medium',sans-serif] font-medium relative shrink-0 text-[#2d3648] text-[24px] md:text-[32px] tracking-[6.4px] w-full text-center">
        name of article
      </p>
      <p className="font-['Avenir_LT_Pro:55_Roman',sans-serif] not-italic relative shrink-0 text-[#a0abc0] text-[10px] tracking-[4px] w-full text-center">
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
      <p className="font-['EB_Garamond:Regular',sans-serif] font-normal relative shrink-0 text-[#53627e] text-[16px] w-full text-left md:text-justify">
        Lorem ipsum dolor sit amet consectetur. Condimentum massa enim imperdiet
        feugiat odio aliquam praesent mattis vitae. Lobortis pellentesque leo
        congue adipiscing eleifend magna diam. Quis eget mi amet parturient
        fermentum amet vulputate curabitur maecenas. Sed faucibus quis magna
        gravida ut donec. Neque integer at turpis metus tellus. Lacus suscipit
        ac tempus integer lacinia consequat. Et rhoncus tristique ipsum et
        bibendum diam nulla proin massa. Habitasse massa velit arcu vitae morbi
        egestas. Amet vel ante egestas vulputate pharetra lectus felis nisl.
      </p>
      <p className="font-['EB_Garamond:Regular',sans-serif] font-normal relative shrink-0 text-[#53627e] text-[16px] w-full text-left md:text-justify">
        Lorem ipsum dolor sit amet consectetur. Condimentum massa enim imperdiet
        feugiat odio aliquam praesent mattis vitae. Lobortis pellentesque leo
        congue adipiscing eleifend magna diam. Quis eget mi amet parturient
        fermentum amet vulputate curabitur maecenas. Sed faucibus quis magna
        gravida ut donec. Neque integer at turpis metus tellus. Lacus suscipit
        ac tempus integer lacinia consequat. Et rhoncus tristique ipsum et
        bibendum diam nulla proin massa. Habitasse massa velit arcu vitae morbi
        egestas. Amet vel ante egestas vulputate pharetra lectus felis nisl.
      </p>
      <p className="font-['EB_Garamond:Regular',sans-serif] font-normal relative shrink-0 text-[#53627e] text-[16px] w-full text-left md:text-justify">
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
