import { Fragment } from "react";
import { createRootRoute, HeadContent, Outlet } from "@tanstack/react-router";
import { Layout } from "@/app/components/shared";
import "@/assets/styles/fonts.css";

export const Route = createRootRoute({
  component: () => (
    <Fragment>
      <HeadContent />
      <Layout>
        <Outlet />
      </Layout>
    </Fragment>
  ),
});
