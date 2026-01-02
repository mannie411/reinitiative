import { Fragment } from "react";
import { createRootRoute, HeadContent, Outlet } from "@tanstack/react-router";
import { Layout } from "@/components/shared";
import { NotFoundError } from "@/components/shared/blocks";

export const Route = createRootRoute({
  component: () => (
    <Fragment>
      <HeadContent />
      <Layout>
        <Outlet />
      </Layout>
    </Fragment>
  ),
  notFoundComponent: NotFoundError,
});
