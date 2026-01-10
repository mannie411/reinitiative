import { Fragment, useMemo } from "react";
import {
  createRootRoute,
  HeadContent,
  Outlet,
  useRouterState,
} from "@tanstack/react-router";
import { DefaultLayout } from "@/components/shared/layout";
import { NotFoundError } from "@/components/shared/blocks";

import type { PageType } from "@/types";

const blankPaths = ["/booking"];

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundError,
});

function RootComponent() {
  const routerState = useRouterState();

  const currentPath = routerState.location.pathname;

  const page = useMemo<PageType>(() => {
    const isBlank = blankPaths
      .filter((path) => path !== "/")
      .some((path) => currentPath.startsWith(path));
    return isBlank ? "blank" : "default";
  }, [currentPath]);

  return (
    <Fragment>
      <HeadContent />
      {page === "default" && (
        <DefaultLayout>
          <Outlet />
        </DefaultLayout>
      )}

      {page === "blank" && <Outlet />}
    </Fragment>
  );
}
