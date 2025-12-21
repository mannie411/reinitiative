export type GenericObject = { [key: string]: unknown };

export interface AppContextProps {
  state: "expanded" | "collapsed";
  open: boolean;
  setOpen: (open: boolean) => void;
}

export interface Testimonial {
  content: string;
  name: string;
  position: string;
}
