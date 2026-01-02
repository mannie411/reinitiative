import type { Dispatch, SetStateAction } from "react";

export type GenericObject = { [key: string]: unknown };

export type DrawerState = "expanded" | "collapsed";
export type NavbarState = "default" | "transparent";

export interface AppContextProps {
  drawerState: DrawerState;
  navbarState: NavbarState;
  setDrawerState: Dispatch<SetStateAction<DrawerState>>;
  setNavbarState: Dispatch<SetStateAction<NavbarState>>;
  toggleSchedule: () => void;
}

export interface Testimonial {
  content: string;
  name: string;
  position: string;
}
