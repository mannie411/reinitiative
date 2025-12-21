import { useMemo, useState } from "react";
import type { PropsWithChildren } from "react";
import { AnimatePresence, motion } from "motion/react";
import Drawer from "./Drawer";
import Footer from "./Footer";
import Header from "./Header";
import { AppProvider } from "@/app/context";
import type { AppContextProps } from "@/types";

export const Layout = ({ children }: PropsWithChildren) => {
  const [open, setOpen] = useState<boolean>(false);

  const state = open ? "expanded" : "collapsed";

  const contextValue = useMemo<AppContextProps>(
    () => ({ state, open, setOpen }),
    [state, open, setOpen]
  );
  return (
    <AppProvider value={contextValue}>
      <Header />
      <main className="min-h-screen w-full">{children}</main>
      <Footer />

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setOpen(false)}
            />
            <Drawer onClose={() => setOpen(false)} />
          </>
        )}
      </AnimatePresence>
    </AppProvider>
  );
};
