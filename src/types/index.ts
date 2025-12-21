export type GenericObject = { [key: string]: unknown };

export type DrawerState = "expanded" | "collapsed";
export type NavbarState = "default" | "transparent";

export interface AppContextProps {
  drawerState: DrawerState;
  navbarState: NavbarState;
  setDrawerState: (open: DrawerState) => void;
  setNavbarState: (open: NavbarState) => void;
  toggleSchedule: () => void;
}

export interface Testimonial {
  content: string;
  name: string;
  position: string;
}
