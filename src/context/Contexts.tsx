import { type ReactNode } from "react";
import type { AppContextProps } from "@/types";
import { AppContext } from ".";

export function AppProvider({
  children,
  value,
}: {
  children: ReactNode;
  value: AppContextProps;
}) {
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
