import { Fragment, useState } from "react";
import type { PropsWithChildren } from "react";
import { AnimatePresence, motion } from "motion/react";
import Drawer from "./Drawer";
import Footer from "./Footer";
import Header from "./Header";
import { DefaultLayoutProvider } from "@/context";
import { SchedulingModal } from "../../scheduling";
import type { DrawerState, NavbarState } from "@/types";

export const DefaultLayout = ({ children }: PropsWithChildren) => {
  const [drawerState, setDrawerState] = useState<DrawerState>("collapsed");
  const [navbarState, setNavbarState] = useState<NavbarState>("default");
  const [scheduleState, setScheduleState] = useState<boolean>(false);

  const toggleSchedule = () => {
    if (!scheduleState) {
      setScheduleState(true);
    }
  };

  const contextValue = {
    drawerState,
    navbarState,
    setDrawerState,
    setNavbarState,
    toggleSchedule,
  };

  return (
    <DefaultLayoutProvider value={contextValue}>
      <Header />
      <main className="min-h-screen w-full overflow-clip">{children}</main>
      <Footer />

      <AnimatePresence>
        {drawerState === "expanded" && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setDrawerState("collapsed")}
            />
            <Drawer
              onClose={() => {
                setDrawerState("collapsed");
              }}
            />
          </>
        )}
      </AnimatePresence>

      <SchedulingModal open={scheduleState} onOpenChange={setScheduleState} />
    </DefaultLayoutProvider>
  );
};

export const BlankLayout = ({ children }: PropsWithChildren) => {
  return <Fragment>{children}</Fragment>;
};
