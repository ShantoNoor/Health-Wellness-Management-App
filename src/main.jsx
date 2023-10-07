import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainLayout from "./layout/MainLayout";
import { lazy } from "react";
const Home = lazy(() => import("./pages/Home"));
const Details = lazy(() => import("./pages/Details"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/sign-up",
        element: <Home></Home>,
      },
      {
        path: "/sign-in",
        element: <Home></Home>,
      },
      {
        path: "/sign-out",
        element: <Home></Home>,
      },
      {
        path: "/my-activity",
        element: <Home></Home>,
      },
      {
        path: "/my-profile",
        element: <Home></Home>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
