import { Link, useRouterState } from "@tanstack/react-router";
import { useAppContext, useScrollPosition } from "@/hooks";
import { useCallback, useEffect, useMemo } from "react";

function MenuIcon({ color = "#FFFFFF" }: { color?: string }) {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="menu-01">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
        style={{
          "--stroke-0": color,
        }}
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
    <div className="flex-1 text-center">
      <Link
        to="/"
        className="content-stretch flex items-center justify-center relative shrink-0 cursor-pointer"
        data-name="Logo"
      >
        <p
          className="font-gt-super-ds leading-[normal] not-italic relative shrink-0 
      text-[26px] text-nowrap  tracking-[5.2px] uppercase"
        >
          Re:Initiative
        </p>
      </Link>
    </div>
  );
}

const Header = () => {
  const routerState = useRouterState();
  const scrollPosition = useScrollPosition();
  const { navbarState, setDrawerState, setNavbarState, toggleSchedule } =
    useAppContext();
  const currentPath = routerState.location.pathname;

  // 1. STABLE FUNCTIONS: No dependencies on drawerState
  const openDrawer = useCallback(() => {
    setDrawerState((prev) => (prev === "collapsed" ? "expanded" : prev));
  }, [setDrawerState]);

  // 2. ROUTE CHANGE EFFECT: Only triggers on path change
  useEffect(() => {
    setDrawerState("collapsed");
  }, [currentPath, setDrawerState]);

  // 3. SCROLL LOGIC: Simplified
  useEffect(() => {
    const isPastThreshold = scrollPosition > 100;
    const nextState = isPastThreshold ? "default" : "transparent";

    if (navbarState !== nextState) {
      setNavbarState(nextState);
    }
  }, [scrollPosition, navbarState, setNavbarState]);

  // 4. VISUAL LOGIC: Syncing transparency with path
  const isHeaderTransparent = useMemo(() => {
    const transparentPaths = ["/", "/home", "/work/"];
    console.log(currentPath);
    return (
      transparentPaths.includes(currentPath) && navbarState === "transparent"
    );
  }, [currentPath, navbarState]);

  const iconColor = useMemo(
    () => (isHeaderTransparent ? "#FFFFFF" : "#000000"),
    [isHeaderTransparent]
  );

  const headerClasses = useMemo(() => {
    const base =
      "sticky flex flex-col items-center z-40 justify-center top-0 w-full transition-colors duration-300";
    const theme = isHeaderTransparent
      ? "bg-transparent text-white"
      : "bg-white text-black shadow-sm";
    return `${base} ${theme}`;
  }, [isHeaderTransparent]);

  return (
    <header className={headerClasses}>
      <div className="relative md:max-w-[1440px] w-full  px-[20px] md:px-[64px] py-[30px]">
        <div className="flex flex-row items-center md:justify-between w-full">
          <div
            className="flex gap-[24px] items-center cursor-pointer"
            onClick={openDrawer}
          >
            <MenuIcon color={iconColor} />
            <p className="font-eb-garamond text-[14px] tracking-[3.36px] hidden md:inline-block">
              MENU
            </p>
          </div>

          <Logo />

          <div
            className="justify-end cursor-pointer hidden md:flex"
            onClick={toggleSchedule}
          >
            <p className="font-eb-garamond text-[14px] tracking-[3.36px]">
              ENQUIRE
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
