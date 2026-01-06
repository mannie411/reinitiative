import { motion } from "motion/react";
import { Link, linkOptions, useLocation } from "@tanstack/react-router";
import svgPaths from "@/assets/svg";
import { useAppContext } from "@/hooks";
import { cn } from "../../ui/utils";

const options = linkOptions([
  {
    to: "/",
    label: "Home",
    activeOptions: { exact: true },
  },
  {
    to: "/about-us",
    label: "About Us",
    activeOptions: { exact: true },
  },
  {
    to: "/our-services",
    label: "Our Services",
    activeOptions: { exact: true },
  },
  {
    to: "/work",
    label: "Selected Work",
    activeOptions: { exact: true },
  },
  {
    to: "/blog",
    label: "Blog",
    activeOptions: { exact: true },
  },
  {
    to: "/careers",
    label: "Careers",
    activeOptions: { exact: true },
  },

  // {
  //   to: undefined,
  //   label: "Sample Page",
  //   activeOptions: { exact: true },
  // },
]);

const Cancel = () => {
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
};

const CloseMenu = ({ onClose }: { onClose: () => void }) => {
  return (
    <div
      className="content-stretch flex gap-[10px] items-center relative shrink-0 
      w-full cursor-pointer hover:opacity-70 transition-opacity"
      data-name="Close Menu"
      onClick={onClose}
    >
      <Cancel />
      <p
        className="font-eb-garamond font-semibold leading-[normal] relative 
      shrink-0 text-[#53627e] text-[14px] text-nowrap tracking-[3.36px] uppercase"
      >
        close
      </p>
    </div>
  );
};

const NavLink = ({
  active,
  text,
  to,
  onClose,
}: {
  active: boolean;
  text: string;
  to?: string;
  onClose: () => void;
}) => {
  if (!to) {
    return (
      <div
        className="content-stretch flex items-center px-0 py-[12px] relative shrink-0 w-full opacity-50"
        data-name="Link"
      >
        <p
          className="font-eb-garamond font-normal leading-[normal] relative shrink-0 
        text-[#2d3648] text-[16px]  text-nowrap tracking-[0.96px] w-full text-left px-2"
        >
          {text}
        </p>
      </div>
    );
  }

  return (
    <Link
      to={to}
      className={cn(
        `content-stretch flex items-center px-0 py-[6px] relative shrink-0 w-full
        transition-colors rounded-md`,
        active ? `italic` : `hover:italic`
      )}
      data-name="Link"
      onClick={onClose}
      resetScroll={true}
    >
      <p
        className="font-eb-garamond font-normal leading-[normal] relative shrink-0 
      text-[#2d3648] text-[16px]  text-nowrap tracking-[0.96px] w-full text-left px-2"
      >
        {text}
      </p>
    </Link>
  );
};

const Menu = ({ onClose }: { onClose: () => void }) => {
  const location = useLocation();
  return (
    <div
      className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full"
      data-name="Menu"
    >
      <p
        className="hidden font-eb-garamond font-semibold leading-[normal] relative shrink-0 
      text-[#53627e] text-[12px] tracking-[2.88px] uppercase w-full"
      >
        menu
      </p>
      <div
        className="content-stretch flex flex-col items-start relative shrink-0 w-full"
        data-name="Menu Links"
      >
        {options.map(({ to, label }, idx) => (
          <NavLink
            key={`link-${idx + 1}`}
            text={label}
            to={to}
            onClose={onClose}
            active={location.pathname === to}
          />
        ))}
      </div>
    </div>
  );
};

const SocialLinks = ({ closeDrawer }: { closeDrawer: () => void }) => {
  return (
    <div
      className="content-stretch flex font-eb-garamond font-normal gap-[24px] italic 
      items-center leading-[normal] relative shrink-0 text-[16px] text-center text-nowrap"
      data-name="Social Links"
    >
      <Link
        to={"https://instagram.com/"}
        target={"_blank"}
        className="relative shrink-0 cursor-pointer hover:underline"
        onClick={closeDrawer}
      >
        Instagram
      </Link>
      <Link
        to={"https://linkedin.com/"}
        target={"_blank"}
        className="relative shrink-0 cursor-pointer hover:underline"
        onClick={closeDrawer}
      >
        LinkedIn
      </Link>
    </div>
  );
};

const DrawerFooter = () => {
  const { setDrawerState } = useAppContext();
  const closeDrawer = () => {
    setDrawerState("collapsed");
  };
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0">
      <Link
        to={"/booking"}
        onClick={closeDrawer}
        className="content-stretch flex items-center justify-center pb-[10px] pt-0 px-0 
      relative shrink-0 cursor-pointer"
      >
        <p
          className="font-eb-garamond font-normal leading-[normal] relative shrink-0 
        text-[#53627e] text-[14px] text-center text-nowrap tracking-[3.36px]"
        >
          ENQUIRE
        </p>
      </Link>
      <SocialLinks closeDrawer={closeDrawer} />
    </div>
  );
};

interface NavMenuProps {
  onClose: () => void;
}

const Drawer = ({ onClose }: NavMenuProps) => {
  const { setNavbarState } = useAppContext();

  const onNavigationPop = () => {
    setNavbarState("default");
    onClose();
  };

  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ type: "tween", duration: 0.5 }}
      className="fixed inset-y-0 left-0 w-full md:max-w-sm bg-[#f5f6f8] shadow-xl overflow-y-auto z-50"
      data-name="Nav Menu"
    >
      <div className="size-full min-h-screen">
        <div className="content-stretch flex items-start p-[32px] relative size-full">
          <div
            className="content-stretch flex flex-col gap-[56px] h-full items-start relative shrink-0"
            data-name="Container"
          >
            <CloseMenu onClose={onNavigationPop} />
            <Menu onClose={onNavigationPop} />
            <DrawerFooter />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Drawer;
