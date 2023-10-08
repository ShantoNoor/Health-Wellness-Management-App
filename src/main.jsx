import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainLayout from "./layout/MainLayout";
import { lazy } from "react";

const SignIn = lazy(() => import("./pages/SignIn"));
const SignUp = lazy(() => import("./pages/SignUp"));
const ContanctUs = lazy(() => import("./pages/ContanctUs"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const MyProfile = lazy(() => import("./pages/MyProfile"));
const SignOut = lazy(() => import("./pages/SignOut"));
const Activity = lazy(() => import("./pages/Activity"));
const Home = lazy(() => import("./pages/Home"));
const Details = lazy(() => import("./pages/Details"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/details/:id",
        element: <Details />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-out",
        element: <SignOut />,
      },
      {
        path: "/my-activity",
        element: <Activity />,
      },
      {
        path: "/my-profile",
        element: <MyProfile />,
      },
      {
        path: "/contact-us",
        element: <ContanctUs />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
