import { Link } from "@tanstack/react-router";
import { useAppContext, useScrollPosition } from "@/app/hooks";

function MenuIcon() {
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
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M4 12H20"
            id="Vector_2"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M4 19H20"
            id="Vector_3"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <Link
      to="/"
      className="content-stretch flex items-center justify-center relative shrink-0 cursor-pointer"
      data-name="Logo"
    >
      <p className="font-gt-super-ds leading-[normal] not-italic relative shrink-0 text-[26px] text-nowrap  tracking-[5.2px] uppercase">
        Re:Initiative
      </p>
    </Link>
  );
}

const Header = () => {
  const { setOpen } = useAppContext();
  const scrollPosition = useScrollPosition();

  const toggleMenu = () => {
    setOpen(true);
  };

  return (
    <header
      data-name="Header"
      className={`sticky content-stretch flex flex-col items-center  z-40
        justify-center overflow-clip top-0  w-full 
        ${scrollPosition > 100 ? "bg-white text-black" : "bg-transparent text-white"}`}
    >
      <div
        className="relative shrink-0 max-w-[1440px] w-full"
        data-name="Padding"
      >
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[64px] py-[30px] relative w-full">
            <div
              className="basis-0 content-stretch flex gap-[24px] 
                grow items-center min-h-px min-w-px relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity"
              onClick={toggleMenu}
            >
              <MenuIcon />
              <p
                className="font-eb-garamond font-normal leading-[normal] relative 
                shrink-0 text-[14px] text-nowrap  tracking-[3.36px]"
              >
                MENU
              </p>
            </div>
            <Logo />
            <div
              className="basis-0 content-stretch flex grow items-center justify-end min-h-px min-w-px relative shrink-0"
              data-name="Button"
            >
              <p className="font-eb-garamond font-normal leading-[normal] relative shrink-0 text-[14px] text-center text-nowrap  tracking-[3.36px]">
                ENQUIRE
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
