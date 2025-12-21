import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Hero,
  SelectedWork,
  CompanyLogos,
  Testimonials,
  OurProcess,
} from "@/components/pages/home";
import { useAppContext, useDocumentTitle, useScrollPosition } from "@/hooks";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  useDocumentTitle("RE:Initivative");
  const scrollPosition = useScrollPosition();
  const { setNavbarState, navbarState } = useAppContext();

  useEffect(() => {
    const threshold = 100;

    if (scrollPosition > threshold) {
      // Only update if it's not already default
      if (navbarState !== "default") {
        setNavbarState("default");
      }
    } else {
      // Only update if it's not already transparent
      if (navbarState !== "transparent") {
        setNavbarState("transparent");
      }
    }
  }, [scrollPosition, navbarState, setNavbarState]);

  return (
    <>
      <Hero />
      <SelectedWork />
      <CompanyLogos />
      <OurProcess />
      <Testimonials />
    </>
  );
}
