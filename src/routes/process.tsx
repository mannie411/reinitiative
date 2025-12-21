import { createFileRoute } from "@tanstack/react-router";

import { ProcessPage } from "@/components/pages/process";
import { useDocumentTitle } from "@/hooks";

export const Route = createFileRoute("/process")({
  component: RouteComponent,
});

function RouteComponent() {
  useDocumentTitle("Our Process | RE:Initiative");
  return (
    <>
      <ProcessPage />
    </>
  );
}
