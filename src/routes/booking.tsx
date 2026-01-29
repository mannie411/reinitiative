import { Fragment } from "react";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Calendly, SchedulingFlow } from "@/components/shared/scheduling";
import { useDocumentTitle } from "@/hooks";

export const Route = createFileRoute("/booking")({
  component: RouteComponent,
});

function RouteComponent() {
  useDocumentTitle("Booking | Re:Initiative");
  const router = useRouter();

  return (
    <Fragment>
      <section className=" relative flex flex-col gap-[64px] items-center  justify-center h-screen">
        <Calendly />
        <div className="container py-[40px] md:py-[80px] hidden">
          <p className="hidden">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
            nulla dicta, sunt nobis explicabo autem voluptates non eaque tempora
            ducimus impedit modi exercitationem ipsum perspiciatis blanditiis
            similique necessitatibus? Iste, voluptatibus.
          </p>
          <motion.div layout className="max-w-[1080px] mx-auto hidden">
            <SchedulingFlow onClose={() => router.history.back()} />
          </motion.div>
        </div>
      </section>
    </Fragment>
  );
}
