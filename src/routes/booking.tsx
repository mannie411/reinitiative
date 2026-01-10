import { Fragment } from "react";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { motion } from "motion/react";
import { SchedulingFlow } from "@/components/scheduling";
import { useDocumentTitle } from "@/hooks";

export const Route = createFileRoute("/booking")({
  component: RouteComponent,
});

function RouteComponent() {
  useDocumentTitle("Booking | RE:Initiative");
  const router = useRouter();

  return (
    <Fragment>
      <section className="relative content-stretch  flex items-center  justify-center h-screen">
        <div className="container py-[40px] md:py-[80px]">
          <motion.div layout className="max-w-[1080px] mx-auto">
            <SchedulingFlow onClose={() => router.history.back()} />
          </motion.div>
        </div>
      </section>
    </Fragment>
  );
}
