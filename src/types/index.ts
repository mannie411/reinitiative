import type { Dispatch, PropsWithChildren, SetStateAction } from "react";
import type { LinkProps } from "@tanstack/react-router";

export type GenericObject = { [key: string]: unknown };

export type DrawerState = "expanded" | "collapsed";
export type NavbarState = "default" | "transparent";
export type LayoutType = "default" | "hero";
export type PageType = "default" | "blank";

export type RootProp = PropsWithChildren & { value: AppProp };
export type AppProp = PropsWithChildren & {
  layout: LayoutType;

  setLayout: Dispatch<SetStateAction<LayoutType>>;
};

export interface DefaultLayoutProp {
  drawerState: DrawerState;
  navbarState: NavbarState;
  setDrawerState: Dispatch<SetStateAction<DrawerState>>;
  setNavbarState: Dispatch<SetStateAction<NavbarState>>;
  toggleSchedule: () => void;
}

export type ImageProp = {
  className?: string;
  imgSrc?: string;
  href?: string;
};

export interface Testimonial {
  content: string;
  name: string;
  position: string;
}

export type LinkProp = LinkProps & {
  text: string;
};

export type ButtonProp = {
  text: string;
  onClick: () => void;
};

export type HeroProp = PropsWithChildren & {
  bgImage?: string;
};

export interface ProcessCardProp {
  id: string;
  title: string;
  services: string[];
  description: string[];
  descriptionItalic: string;
  isFirst?: boolean;
  img?: string;
}

export interface Team {
  name: string;
  role: string;
  image: string;
}
