import { lazy } from "react";

const SingedUpUsers = lazy(() => import("./containers/SingedUpUsers/index"));
const Users = lazy(() => import("./containers/SingedUpUsers/Users"));

const routes = [
    {
        path: "/",
        component: SingedUpUsers,
    },
    {
        path: "/users",
        component: Users,
    },
];

export default routes;
