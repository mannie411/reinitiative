import { Fragment, type PropsWithChildren, type ReactNode } from "react";
import { ReactLenis } from "lenis/react";
import type { DefaultLayoutProp, RootProp } from "@/types";
import { AppContext, DefaultLayoutContext } from ".";

export function AppProvider({ children, value }: RootProp) {
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function DefaultLayoutProvider({
  children,
  value,
}: {
  children: ReactNode;
  value: DefaultLayoutProp;
}) {
  return (
    <DefaultLayoutContext.Provider value={value}>
      {children}
    </DefaultLayoutContext.Provider>
  );
}

export function LenisProvider({ children }: PropsWithChildren) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      }}
    >
      <Fragment>{children}</Fragment>
    </ReactLenis>
  );
}
