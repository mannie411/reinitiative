import svgPaths from "../../../assets/svg/svg-2yniqniud8";

function Cancel() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="cancel-01">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 26 26"
      >
        <g id="cancel-01">
          <path
            d={svgPaths.p1770df00}
            id="Vector"
            stroke="var(--stroke-0, #2D3648)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.625"
          />
        </g>
      </svg>
    </div>
  );
}

function CloseMenu() {
  return (
    <div
      className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full"
      data-name="Close Menu"
    >
      <Cancel />
      <p className="font-['EB_Garamond:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#53627e] text-[14px] text-nowrap tracking-[3.36px] uppercase">
        close
      </p>
    </div>
  );
}

function Link() {
  return (
    <div
      className="content-stretch flex items-center px-0 py-[12px] relative shrink-0 w-full"
      data-name="Link"
    >
      <p className="font-['EB_Garamond:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2d3648] text-[16px] text-center text-nowrap tracking-[0.96px]">
        About Us
      </p>
    </div>
  );
}

function Link1() {
  return (
    <div
      className="content-stretch flex items-center px-0 py-[12px] relative shrink-0 w-full"
      data-name="Link"
    >
      <p className="font-['EB_Garamond:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2d3648] text-[16px] text-center text-nowrap tracking-[0.96px]">
        Our Process
      </p>
    </div>
  );
}

function Link2() {
  return (
    <div
      className="content-stretch flex items-center px-0 py-[12px] relative shrink-0 w-full"
      data-name="Link"
    >
      <p className="font-['EB_Garamond:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2d3648] text-[16px] text-center text-nowrap tracking-[0.96px]">
        Selected Work
      </p>
    </div>
  );
}

function Link3() {
  return (
    <div
      className="content-stretch flex items-center px-0 py-[12px] relative shrink-0 w-full"
      data-name="Link"
    >
      <p className="font-['EB_Garamond:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2d3648] text-[16px] text-center text-nowrap tracking-[0.96px]">
        Blog Articles
      </p>
    </div>
  );
}

function Link4() {
  return (
    <div
      className="content-stretch flex items-center px-0 py-[12px] relative shrink-0 w-full"
      data-name="Link"
    >
      <p className="font-['EB_Garamond:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2d3648] text-[16px] text-center text-nowrap tracking-[0.96px]">
        Careers
      </p>
    </div>
  );
}

function MenuLinks() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Menu Links"
    >
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
      <Link4 />
    </div>
  );
}

function Menu() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
      data-name="Menu"
    >
      <p className="font-['EB_Garamond:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#53627e] text-[12px] tracking-[2.88px] uppercase w-full">
        menu
      </p>
      <MenuLinks />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[10px] pt-0 px-0 relative shrink-0">
      <p className="font-['EB_Garamond:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#53627e] text-[14px] text-center text-nowrap tracking-[3.36px]">
        ENQUIRE
      </p>
    </div>
  );
}

function SocialLinks() {
  return (
    <div
      className="content-stretch flex font-['EB_Garamond:Italic',sans-serif] font-normal gap-[24px] italic items-center leading-[normal] relative shrink-0 text-[#53627e] text-[16px] text-center text-nowrap"
      data-name="Social Links"
    >
      <p className="relative shrink-0">Instagram</p>
      <p className="relative shrink-0">Pinterest</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0">
      <Frame />
      <SocialLinks />
    </div>
  );
}

function Container() {
  return (
    <div
      className="content-stretch flex flex-col gap-[56px] h-[431px] items-start relative shrink-0"
      data-name="Container"
    >
      <CloseMenu />
      <Menu />
      <Frame1 />
    </div>
  );
}

export default function NavMenu() {
  return (
    <div className="bg-[#f5f6f8] relative size-full" data-name="Nav Menu">
      <div className="size-full">
        <div className="content-stretch flex items-start p-[32px] relative size-full">
          <Container />
        </div>
      </div>
    </div>
  );
}
