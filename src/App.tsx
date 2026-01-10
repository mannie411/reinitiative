import { useState } from "react";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { AppProvider } from "./context";
import type { LayoutType } from "./types";

// Create a new router instance
const router = createRouter({
  routeTree,
  scrollToTopSelectors: ["#scroll-to-top"],
  scrollRestoration: true,
});

export default function App() {
  const [layout, setLayout] = useState<LayoutType>("default");
  const value = {
    layout,
    setLayout,
  };
  return (
    <AppProvider value={value}>
      <RouterProvider router={router} />
    </AppProvider>
  );
}
