import { createContext } from "react";
import type { SidebarContextProps } from "@/app/components/ui/sidebar";
import type { AppContextProps } from "@/types";

export * from "./Contexts";

export const AppContext = createContext<AppContextProps | undefined>(undefined);
export const SidebarContext = createContext<SidebarContextProps | null>(null);
