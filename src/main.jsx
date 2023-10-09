import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainLayout from "./layout/MainLayout";
import { lazy } from "react";
import AuthProvider from "./components/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./components/PrivateRoute";

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
        element: (
          <PrivateRoute>
            <Details />
          </PrivateRoute>
        ),
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
        element: (
          <PrivateRoute>
            <Activity />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-profile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/contact-us",
        element: (
          <PrivateRoute>
            <ContanctUs />
          </PrivateRoute>
        ),
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
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable={false}
      pauseOnHover
      theme="light"
    />
  </React.StrictMode>
);
