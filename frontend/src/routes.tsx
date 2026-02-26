import { lazy } from "react";

const Login = lazy(() => import("./pages/auth/Login"));
const Signup = lazy(() => import("./pages/auth/Signup"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));

export const publicRoutes = [
    { path: "/login", component: <Login /> },
    { path: "/signup", component: <Signup /> },
];

export const protectedRoutes = [
    { path: "/", component: <Dashboard /> },
];
