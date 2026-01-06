import { Fragment } from "react";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { SchedulingFlow } from "@/components/shared/scheduling";
import { useDocumentTitle } from "@/hooks";
import { motion } from "motion/react";

export const Route = createFileRoute("/booking")({
  component: RouteComponent,
});

function RouteComponent() {
  useDocumentTitle("Booking | RE:Initiative");

  const router = useRouter();

  console.log(router);

  return (
    <Fragment>
      <section className="relative">
        <div className="container py-[40px] md:py-[80px] ">
          <motion.div layout className="max-w-[1080px] mx-auto">
            <SchedulingFlow
              onClose={function (): void {
                console.log("clicked...");
              }}
            />
          </motion.div>
        </div>
      </section>
    </Fragment>
  );
}
