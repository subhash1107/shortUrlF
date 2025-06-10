import { createRootRoute } from "@tanstack/react-router";
import App from "../App";
import { authRoute } from "./authRoute";
import { homePageRoute } from "./homePageRoute";
import { dashboardRoute } from "./dashboardRoute";


export const rootRoute = createRootRoute({
  component: App,
});

export const routeTree = rootRoute.addChildren([authRoute,homePageRoute,dashboardRoute]);
