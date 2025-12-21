import svgPaths from "../../../assets/svg/svg-jkx9cin3no";
import {
  imgCompany1,
  imgCompany2,
  imgCompany3,
  imgCompany4,
  imgCompany5,
  imgCompany7,
  imgCompany8,
  imgCompany9,
} from "../../../assets/images";

function Menu() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="menu-01">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="menu-01">
          <path
            d="M4 5H20"
            id="Vector"
            stroke="var(--stroke-0, #2D3648)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M4 12H20"
            id="Vector_2"
            stroke="var(--stroke-0, #2D3648)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M4 19H20"
            id="Vector_3"
            stroke="var(--stroke-0, #2D3648)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="basis-0 content-stretch flex gap-[24px] grow items-center min-h-px min-w-px relative shrink-0">
      <Menu />
      <p className="font-['EB_Garamond:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2d3648] text-[14px] text-nowrap tracking-[3.36px]">
        MENU
      </p>
    </div>
  );
}

function Logo() {
  return (
    <div
      className="content-stretch flex items-center justify-center relative shrink-0"
      data-name="Logo"
    >
      <p className="font-['GT_Super_Ds_Trial:Rg',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#2d3648] text-[26px] text-nowrap tracking-[5.2px] uppercase">
        Re:Initiative
      </p>
    </div>
  );
}

function Button() {
  return (
    <div
      className="basis-0 content-stretch flex grow items-center justify-end min-h-px min-w-px relative shrink-0"
      data-name="Button"
    >
      <p className="font-['EB_Garamond:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2d3648] text-[14px] text-center text-nowrap tracking-[3.36px]">
        ENQUIRE
      </p>
    </div>
  );
}

function Padding() {
  return (
    <div className="relative shrink-0 w-full" data-name="Padding">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[64px] py-[30px] relative w-full">
          <Frame2 />
          <Logo />
          <Button />
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <div
      className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[1440px]"
      data-name="Navbar"
    >
      <Padding />
    </div>
  );
}

function Heading() {
  return (
    <div
      className="content-stretch flex flex-col items-center relative shrink-0 w-[620px]"
      data-name="Heading"
    >
      <p className="font-['GT_Super_Ds_Trial:Rg',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#2d3648] text-[22px] text-center tracking-[-0.44px] w-[444px]">
        <span>{`We saw a pattern: brilliant brands failing not from `}</span>
        <span className="font-['GT_Super_Ds_Trial:Rg_It',sans-serif]">
          lack of vision
        </span>
        <span>{`, but from `}</span>
        <span className="font-['GT_Super_Ds_Trial:Rg_It',sans-serif]">
          scattered strategy.
        </span>
      </p>
    </div>
  );
}

function Image10() {
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
      className="basis-0 bg-[#a0abc0] grow min-h-px min-w-px overflow-clip relative shrink-0 w-full"
      data-name="Image"
    >
      <Image10 />
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[32px] grow h-full items-start min-h-px min-w-px relative shrink-0">
      <Image />
    </div>
  );
}

function Row() {
  return (
    <div
      className="content-stretch flex h-[708px] items-start relative shrink-0 w-full"
      data-name="Row"
    >
      <Frame />
    </div>
  );
}

function Container() {
  return (
    <div
      className="content-stretch flex flex-col gap-[72px] items-center relative shrink-0 w-full"
      data-name="Container"
    >
      <Heading />
      <Row />
    </div>
  );
}

function AboutUs() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="About Us">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-center pb-[30px] pt-[90px] px-[180px] relative w-full">
          <Container />
          <p className="font-['EB_Garamond:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#53627e] text-[16px] text-center w-[534px]">
            Great products with unclear messaging. Strong missions hidden by
            weak design. Founders fixing symptoms, not systems.
            <span className="font-['EB_Garamond:Medium_Italic',sans-serif] font-medium italic">{` We built the solution.`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
      data-name="Content"
    >
      <p className="font-['Avenir_LT_Pro:55_Roman',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#53627e] text-[12px] tracking-[2.4px] uppercase w-full">
        our Philosophy
      </p>
      <div className="font-['EB_Garamond:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2d3648] text-[16px] w-full">
        <p className="mb-0">{`Transformation isn't a service. It's a system.`}</p>
        <p className="mb-0">
          Strategy shapes design. Design amplifies story. Story drives growth.
          Growth needs structure.
        </p>
        <p className="mb-0">&nbsp;</p>
        <p className="font-['EB_Garamond:Medium_Italic',sans-serif] font-medium italic">
          Everything connected. Everything working together.
        </p>
      </div>
    </div>
  );
}

function Image2() {
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

function Image1() {
  return (
    <div
      className="bg-[#a0abc0] h-[538px] overflow-clip relative shrink-0 w-full"
      data-name="Image"
    >
      <Image2 />
    </div>
  );
}

function Column() {
  return (
    <div
      className="basis-0 content-stretch flex flex-col gap-[36px] grow items-start min-h-px min-w-px relative shrink-0"
      data-name="Column"
    >
      <Content />
      <Image1 />
    </div>
  );
}

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

function Image4() {
  return (
    <div
      className="bg-[#a0abc0] h-[538px] overflow-clip relative shrink-0 w-full"
      data-name="Image"
    >
      <Image3 />
    </div>
  );
}

function Content1() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 text-center w-full"
      data-name="Content"
    >
      <p className="font-['Avenir_LT_Pro:55_Roman',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#53627e] text-[12px] tracking-[2.4px] uppercase w-full">
        our approach
      </p>
      <div className="font-['EB_Garamond:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2d3648] text-[16px] w-full">
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

function Column1() {
  return (
    <div
      className="basis-0 content-stretch flex flex-col gap-[36px] grow items-start min-h-px min-w-px relative shrink-0"
      data-name="Column"
    >
      <Image4 />
      <Content1 />
    </div>
  );
}

function Section() {
  return (
    <div
      className="content-stretch flex gap-[80px] items-center justify-center px-[40px] py-0 relative shrink-0 w-[1080px]"
      data-name="Section"
    >
      <Column />
      <Column1 />
    </div>
  );
}

function Container1() {
  return (
    <div
      className="content-stretch flex flex-col items-start pb-[120px] pt-[90px] px-0 relative shrink-0"
      data-name="Container"
    >
      <Section />
    </div>
  );
}

function Film() {
  return (
    <div
      className="absolute left-1/2 size-[80px] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%]"
      data-name="film"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 80 80"
      >
        <g id="film">
          <path
            d={svgPaths.p171d8280}
            id="Vector"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="6.66667"
          />
          <path
            d="M23.3333 6.66667V73.3333"
            id="Vector_2"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="6.66667"
          />
          <path
            d="M56.6667 6.66667V73.3333"
            id="Vector_3"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="6.66667"
          />
          <path
            d="M6.66667 40H73.3333"
            id="Vector_4"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="6.66667"
          />
          <path
            d="M6.66667 23.3333H23.3333"
            id="Vector_5"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="6.66667"
          />
          <path
            d="M6.66667 56.6667H23.3333"
            id="Vector_6"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="6.66667"
          />
          <path
            d="M56.6667 56.6667H73.3333"
            id="Vector_7"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="6.66667"
          />
          <path
            d="M56.6667 23.3333H73.3333"
            id="Vector_8"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="6.66667"
          />
        </g>
      </svg>
    </div>
  );
}

function Image5() {
  return (
    <div
      className="basis-0 bg-[#2d3648] grow min-h-px min-w-px overflow-clip relative shrink-0 w-full"
      data-name="Image"
    >
      <Film />
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[32px] grow h-full items-start min-h-px min-w-px relative shrink-0">
      <Image5 />
    </div>
  );
}

function Row1() {
  return (
    <div
      className="content-stretch flex h-[353px] items-start relative shrink-0 w-full"
      data-name="Row"
    >
      <Frame1 />
    </div>
  );
}

function Container2() {
  return (
    <div
      className="content-stretch flex flex-col items-center relative shrink-0 w-[1440px]"
      data-name="Container"
    >
      <Row1 />
    </div>
  );
}

function Content2() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
      data-name="Content"
    >
      <p className="font-['Avenir_LT_Pro:55_Roman',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#53627e] text-[12px] tracking-[2.4px] uppercase w-full">
        Who We Serve
      </p>
      <p className="font-['EB_Garamond:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2d3648] text-[16px] w-full">
        <span>{`We work with visionary founders who `}</span>
        <span className="font-['EB_Garamond:Italic',sans-serif] italic">
          refuse to settle
        </span>
        . Who see the gap between where they are and w
        <span className="font-['EB_Garamond:Italic',sans-serif] italic">{`here they're going.`}</span>
        <span>{` Who understand that real transformation requires more than`}</span>
        <span className="font-['EB_Garamond:Italic',sans-serif] italic">{` a new logo or marketing campaign.`}</span>
      </p>
    </div>
  );
}

function Image6() {
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

function Image7() {
  return (
    <div
      className="bg-[#a0abc0] h-[538px] overflow-clip relative shrink-0 w-full"
      data-name="Image"
    >
      <Image6 />
    </div>
  );
}

function Column2() {
  return (
    <div
      className="basis-0 content-stretch flex flex-col gap-[36px] grow items-start min-h-px min-w-px relative shrink-0"
      data-name="Column"
    >
      <Content2 />
      <Image7 />
    </div>
  );
}

function Image8() {
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

function Image9() {
  return (
    <div
      className="bg-[#a0abc0] h-[538px] overflow-clip relative shrink-0 w-full"
      data-name="Image"
    >
      <Image8 />
    </div>
  );
}

function Content3() {
  return (
    <div
      className="content-stretch flex flex-col items-center relative shrink-0 w-full"
      data-name="Content"
    >
      <div className="font-['EB_Garamond:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2d3648] text-[16px] text-center w-full">
        <p className="mb-0">{`You have traction but your brand doesn't match your ambition. You're solving real problems but struggling to communicate your value. You're ready to invest in transformation, not just tactics.`}</p>
        <p className="mb-0">&nbsp;</p>
        <p className="font-['EB_Garamond:Medium_Italic',sans-serif] font-medium italic">
          We meet you at that moment.
        </p>
      </div>
    </div>
  );
}

function Column3() {
  return (
    <div
      className="basis-0 content-stretch flex flex-col gap-[36px] grow items-start min-h-px min-w-px relative shrink-0"
      data-name="Column"
    >
      <Image9 />
      <Content3 />
    </div>
  );
}

function Section1() {
  return (
    <div
      className="content-stretch flex gap-[80px] items-center justify-center px-[40px] py-0 relative shrink-0 w-[1080px]"
      data-name="Section"
    >
      <Column2 />
      <Column3 />
    </div>
  );
}

function Container3() {
  return (
    <div
      className="content-stretch flex flex-col items-start pb-[120px] pt-[90px] px-0 relative shrink-0"
      data-name="Container"
    >
      <Section1 />
    </div>
  );
}

function Button1() {
  return (
    <div
      className="content-stretch flex items-center justify-center pb-[12px] pt-0 px-0 relative shrink-0"
      data-name="Button"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_1px] border-[rgba(160,171,192,0.8)] border-solid inset-0 pointer-events-none"
      />
      <p className="font-['EB_Garamond:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#53627e] text-[16px] text-center text-nowrap tracking-[6.4px]">
        BOOK A CALL
      </p>
    </div>
  );
}

function Container4() {
  return (
    <div
      className="content-stretch flex flex-col gap-[32px] items-center px-0 py-[90px] relative shrink-0 w-[1440px]"
      data-name="Container"
    >
      <div className="font-['EB_Garamond:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#2d3648] text-[16px] text-center w-[524px]">
        <p className="leading-[normal] mb-0">{`We're architects, not decorators. Strategists, not theorists. Partners, not vendors.`}</p>
        <p className="leading-[normal]">
          <span>{`We measure success not in deliverables, but in the distance between where you started and where you arrive. `}</span>
          <span className="font-['EB_Garamond:Italic',sans-serif] font-normal italic">
            We prioritize strategy first. Always.
          </span>
        </p>
      </div>
      <Button1 />
    </div>
  );
}

function Logos() {
  return (
    <div
      className="content-stretch flex items-center justify-between relative shrink-0 w-[964.286px]"
      data-name="Logos"
    >
      <div
        className="h-[37.604px] relative shrink-0 w-[96.429px]"
        data-name="company-8"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgCompany8}
        />
      </div>
      <div
        className="h-[28.565px] relative shrink-0 w-[95.536px]"
        data-name="company-4"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgCompany4}
        />
      </div>
      <div
        className="h-[46.706px] relative shrink-0 w-[66.071px]"
        data-name="company-2"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgCompany2}
        />
      </div>
      <div
        className="h-[35.714px] relative shrink-0 w-[101.786px]"
        data-name="company-7"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgCompany7}
        />
      </div>
      <div
        className="h-[50.295px] relative shrink-0 w-[76.786px]"
        data-name="company-5"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgCompany5}
        />
      </div>
      <div
        className="h-[28.735px] relative shrink-0 w-[95.536px]"
        data-name="company-3"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgCompany3}
        />
      </div>
      <div
        className="h-[48.898px] relative shrink-0 w-[53.571px]"
        data-name="company-9"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgCompany9}
        />
      </div>
      <div
        className="h-[28.638px] relative shrink-0 w-[106.25px]"
        data-name="company-1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgCompany1}
        />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div
      className="content-stretch flex flex-col gap-[36px] items-center relative shrink-0 w-full"
      data-name="Container"
    >
      <p className="font-['EB_Garamond:Italic',sans-serif] font-normal italic leading-[normal] min-w-full relative shrink-0 text-[#53627e] text-[18px] text-center w-[min-content]">
        The company we keep.
      </p>
      <Logos />
    </div>
  );
}

function CompanyWeKeep() {
  return (
    <div
      className="bg-[#f5f6f8] relative shrink-0 w-full"
      data-name="Company we keep"
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[180px] py-[86px] relative w-full">
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function KeyboardArrowUp() {
  return (
    <div className="relative size-[24px]" data-name="keyboard_arrow_up">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="keyboard_arrow_up">
          <path
            d={svgPaths.p3c144b80}
            fill="var(--fill-0, #2D3648)"
            id="icon"
          />
        </g>
      </svg>
    </div>
  );
}

function ContentArrow() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content+arrow">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[10px] relative w-full">
          <div
            className="flex items-center justify-center relative shrink-0 size-[24px]"
            style={
              {
                "--transform-inner-width": "0",
                "--transform-inner-height": "0",
              } as React.CSSProperties
            }
          >
            <div className="flex-none rotate-[270deg]">
              <KeyboardArrowUp />
            </div>
          </div>
          <p className="font-['EB_Garamond:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#53627e] text-[16px] text-center w-[394px]">
            They took the time to understand my objective and made thoughtful,
            strategic suggestions that elevated the final output.
          </p>
          <div
            className="flex items-center justify-center relative shrink-0 size-[24px]"
            style={
              {
                "--transform-inner-width": "0",
                "--transform-inner-height": "0",
              } as React.CSSProperties
            }
          >
            <div className="flex-none rotate-[270deg] scale-y-[-100%]">
              <KeyboardArrowUp />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NameCompany() {
  return (
    <div
      className="content-stretch flex flex-col font-['EB_Garamond:Regular',sans-serif] font-normal gap-[30px] items-center leading-[normal] relative shrink-0 text-[#2d3648] text-[16px] text-center uppercase w-[245px]"
      data-name="Name+Company"
    >
      <p className="relative shrink-0 tracking-[9.6px] w-full">Assumpta Ozua</p>
      <p className="relative shrink-0 tracking-[6.4px] w-full">Ave Creations</p>
    </div>
  );
}

function Testimony() {
  return (
    <div
      className="content-stretch flex flex-col gap-[36px] items-center relative shrink-0 w-full"
      data-name="Testimony"
    >
      <ContentArrow />
      <NameCompany />
    </div>
  );
}

function Container6() {
  return (
    <div
      className="content-stretch flex flex-col gap-[26px] items-center relative shrink-0 w-full"
      data-name="Container"
    >
      <p className="font-['EB_Garamond:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2d3648] text-[20px] text-center tracking-[8px] uppercase w-full">
        <span className="tracking-[3.2px]">In</span>{" "}
        <span className="font-['EB_Garamond:Italic',sans-serif] italic tracking-[1.12px]">
          their
        </span>{" "}
        <span className="tracking-[3.2px]">words</span>
      </p>
      <Testimony />
    </div>
  );
}

function Testimonies() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Testimonies">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[180px] py-[64px] relative w-full">
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Links() {
  return (
    <div
      className="content-stretch flex items-center justify-between pb-[24px] pt-0 px-0 relative shrink-0 w-full"
      data-name="Links"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#53627e] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <p className="font-['EB_Garamond:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[5.6px] uppercase">
        instagram
      </p>
      <p className="font-['EB_Garamond:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[5.6px] uppercase">
        privacy policy
      </p>
      <p className="font-['EB_Garamond:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[5.6px] uppercase">
        pinterest
      </p>
    </div>
  );
}

function Copyright() {
  return (
    <div className="relative shrink-0 size-[8px]" data-name="copyright">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 8 8"
      >
        <g id="copyright">
          <path
            d={svgPaths.p2baff800}
            id="Vector"
            stroke="var(--stroke-0, #A0ABC0)"
            strokeWidth="0.5"
          />
          <path
            d={svgPaths.p379bb400}
            id="Vector_2"
            stroke="var(--stroke-0, #A0ABC0)"
            strokeLinecap="round"
            strokeWidth="0.5"
          />
        </g>
      </svg>
    </div>
  );
}

function Copyright1() {
  return (
    <div
      className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full"
      data-name="Copyright"
    >
      <p className="font-['EB_Garamond:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[11px] text-center text-nowrap text-white tracking-[6.6px] uppercase">
        created in house. all rights reserved
      </p>
      <Copyright />
    </div>
  );
}

function LinksCopyright() {
  return (
    <div
      className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-full"
      data-name="Links+copyright"
    >
      <Links />
      <Copyright1 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#394e79] relative shrink-0 w-full" data-name="Footer">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[56px] items-center px-[180px] py-[49px] relative w-full">
          <p className="font-['GT_Super_Ds_Trial:Rg',sans-serif] leading-[normal] not-italic relative shrink-0 text-[26px] text-center text-white tracking-[6px] uppercase w-full">
            Re:Initiative
          </p>
          <LinksCopyright />
        </div>
      </div>
    </div>
  );
}

export default function DesktopAboutUs() {
  return (
    <div
      className="bg-white content-stretch flex flex-col items-center relative size-full"
      data-name="Desktop/About Us"
    >
      <Navbar />
      <AboutUs />
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <CompanyWeKeep />
      <Testimonies />
      <Footer />
    </div>
  );
}
