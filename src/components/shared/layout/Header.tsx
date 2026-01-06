import { Link, useRouterState } from "@tanstack/react-router";
import { useAppContext, useScrollPosition } from "@/hooks";
import { useCallback, useEffect, useMemo } from "react";
import { cn } from "@/components/ui/utils";

function MenuIcon({ color = "#FFFFFF" }: { color?: string }) {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="menu-01">
      <svg
        className="inline-block size-full"
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
            className="hidden"
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
          className={cn(`font-gt-super-ds leading-[normal] not-italic relative shrink-0 
      text-[18px] md:text-[24px] text-nowrap  tracking-[5.2px] uppercase text-[var(--text-color)]`)}
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
  const { navbarState, setDrawerState, setNavbarState } = useAppContext();
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

  const color = useMemo(
    () => (isHeaderTransparent ? "#FFFFFF" : "#000000"),
    [isHeaderTransparent]
  );

  const headerClasses = useMemo(() => {
    const base =
      "sticky flex flex-col items-center z-40 justify-center top-0 w-full transition-colors duration-300";
    const theme = isHeaderTransparent
      ? "bg-transparent !text-white"
      : "bg-transparent backdrop-blur-xs backdrop-[var(--background)] text-black shadow-sm";
    return `${base} ${theme}`;
  }, [isHeaderTransparent]);

  return (
    <header
      className={headerClasses}
      style={{
        "--text-color": color,
        height: "80px",
      }}
    >
      <div className="relative w-full  px-[20px] md:px-[64px] py-[15px]">
        <div
          className={cn(
            "flex flex-row items-center md:justify-between w-full",
            `!text-(--text-color)`
          )}
        >
          <div
            className="flex gap-[24px] items-center cursor-pointer"
            onClick={openDrawer}
          >
            <MenuIcon color={color} />
            <p
              className={cn(
                "font-eb-garamond text-[12px] tracking-[2.86px] hidden md:inline-block",
                `!text-(--text-color)`
              )}
            >
              MENU
            </p>
          </div>

          <Logo />

          <Link
            to={"/booking"}
            className="justify-end cursor-pointer hidden md:flex"
            // onClick={toggleSchedule}
          >
            <p
              className={cn(
                "font-eb-garamond text-[12px] tracking-[2.86px]",
                `!text-(--text-color)`
              )}
            >
              ENQUIRE
            </p>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
