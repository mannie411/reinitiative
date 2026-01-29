import { Link, useLocation } from "@tanstack/react-router";
import { useDefaultLayoutContext, useScrollPosition } from "@/hooks";
import { useCallback, useEffect, useMemo } from "react";

import { cn, isInViewport } from "@/lib";
import { Menu } from "../blocks";

const transparentPaths = ["/", "/home", "/works/"];

function Logo() {
  return (
    <div className="flex-1 flex justify-center text-center">
      <div className="max-w-[min-content]">
        <Link
          to="/"
          className="content-stretch flex items-center justify-center relative  cursor-pointer"
          data-name="Logo"
        >
          <p
            className={cn(`font-gt-super-ds leading-[normal] not-italic relative  
      text-[18px] md:text-[22px]   tracking-[5.2px] uppercase text-[var(--text-color)]`)}
          >
            Re:Initiative
          </p>
        </Link>
      </div>
    </div>
  );
}

const Header = () => {
  const router = useLocation();
  const scrollPosition = useScrollPosition();
  const { navbarState, setDrawerState, setNavbarState } =
    useDefaultLayoutContext();
  const currentPath = router.pathname;
  const currentPathParams = router.search.header ?? "default";

  const openDrawer = useCallback(() => {
    setDrawerState((prev) => (prev === "collapsed" ? "expanded" : prev));
  }, [setDrawerState]);

  useEffect(() => {
    setDrawerState("collapsed");
  }, [currentPath, setDrawerState]);

  useEffect(() => {
    const isPastThreshold = scrollPosition > 100;
    const nextState = isPastThreshold ? "default" : "transparent";

    if (navbarState !== nextState) {
      setNavbarState(nextState);
    }
  }, [scrollPosition, navbarState, setNavbarState]);

  const isHero = useMemo<boolean>(() => {
    const isPastThreshold = scrollPosition > 100;

    const header = document.getElementById("header");
    // Get all sections with the specific class
    const transparentSections = document.querySelectorAll(".hero");
    let isOverTransparentSection = false;

    // Check if the user is currently within sections
    transparentSections.forEach((section) => {
      if (isInViewport(section)) {
        isOverTransparentSection = true;
      }
    });

    const isHeader = header ? true : false;

    return isHeader && isOverTransparentSection && isPastThreshold;
  }, [scrollPosition]);

  const isHeaderTransparent = useMemo<boolean>(() => {
    // 1. Check for exact match on root "/" to avoid everything matching
    if (currentPath === "/") {
      return navbarState === "transparent";
    }

    // 2. Check if the current path starts with any of the subpaths
    const isMatchingPath = transparentPaths
      .filter((path) => path !== "/") // Exclude root from the "startsWith" check
      .some(
        (path) =>
          currentPath.startsWith(path) && currentPathParams === "transparent",
      );

    return isMatchingPath && navbarState === "transparent";
  }, [currentPath, navbarState, currentPathParams]);

  const color = useMemo(
    () => (isHeaderTransparent || isHero ? "#FFFFFF" : "#506081"),
    [isHeaderTransparent, isHero],
  );

  const headerClasses = useMemo(() => {
    const isPastThreshold = scrollPosition > 100;

    const base =
      "sticky flex flex-col items-center z-40 justify-center top-0 w-full transition-all duration-300";
    const theme =
      isHeaderTransparent && !isHero
        ? "bg-transparent"
        : isHero
          ? "bg-transparent backdrop-blur-lg"
          : "bg-(--background) ";

    const shadow = isPastThreshold ? "shadow-sm" : "";

    return `${base} ${theme} ${shadow}`;
  }, [scrollPosition, isHeaderTransparent, isHero]);

  return (
    <header
      id="header"
      className={headerClasses}
      style={{
        "--text-color": color,
        height: "80px",
      }}
    >
      <div className="px-[2rem] md:px-[4rem]  w-full">
        <div
          className={cn(
            "flex flex-row items-center md:justify-between w-full",
            `!text-(--text-color)`,
          )}
        >
          <div
            className="flex gap-[24px] items-center cursor-pointer"
            onClick={openDrawer}
          >
            <div className="relative  h-[20px] w-[28px]" data-name="menu-01">
              <Menu color={color} />
            </div>
            <p
              className={cn(
                "font-eb-garamond text-[12px] tracking-[2.86px] hidden",
                `!text-(--text-color)`,
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
                `!text-(--text-color)`,
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
