import { type ReactNode } from "react";
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
