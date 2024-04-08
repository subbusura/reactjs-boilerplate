import PrivateLayout from "@/components/layouts/PrivateLayout";
import RouterErrorBoundary from "@/components/layouts/common/RouterErrorBoundary";
import React from "react";
import { RouteObject, createBrowserRouter } from "react-router-dom";
import HomePage from "./home/HomePage";
import PageNotFoundPage from "./PageNotFoundPage";
import FullViewLayout from "@/components/layouts/FullViewLayout";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import TeamPage from "./team/TeamPage";
const mainRouters: RouteObject[] = [
  {
    errorElement: <RouterErrorBoundary />,
    path: "/",
    element: <PrivateLayout />,
    children: [
      {
        index: true,
        element: (
          <React.Suspense>
            <HomePage />
          </React.Suspense>
        ),
      },
    ],
  },
  {
    errorElement: <RouterErrorBoundary />,
    path: "/login",
    element: <FullViewLayout />,
    children: [
      {
        index: true,
        element: (
          <React.Suspense>
            <LoginPage />
          </React.Suspense>
        ),
      },
    ],
  },
  {
    errorElement: <RouterErrorBoundary />,
    path: "/register",
    element: <FullViewLayout />,
    children: [
      {
        index: true,
        element: (
          <React.Suspense>
            <RegisterPage />
          </React.Suspense>
        ),
      },
    ],
  },
  {
    errorElement: <RouterErrorBoundary />,
    path: "/team",
    element: <PrivateLayout />,
    children: [
      {
        index: true,
        element: (
          <React.Suspense>
            <TeamPage />
          </React.Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFoundPage />,
  },
];

const routers = createBrowserRouter(mainRouters);
export default routers;
