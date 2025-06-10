import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./routeTree";
import SignUpLoginPage from "../pages/SignUpLoginPage";

export const authRoute = createRoute({
    getParentRoute : ()=>rootRoute,
    path:'/auth',
    component:SignUpLoginPage
})