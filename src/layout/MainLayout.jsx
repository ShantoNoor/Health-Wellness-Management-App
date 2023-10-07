import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { Suspense } from "react";
import Spinner from "../components/Spinner";

const MainLayout = () => {
  const { pathname, state } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      document.title = "Health & Wellness Management";
    } else {
      document.title =
        pathname.slice(1, -1).toUpperCase() + " | Health & Wellness Management";
    }

    if (state) document.title = state.title + " | Health & Wellness Management";
  }, [pathname, state]);

  return (
    <div>
      <div className="container py-12 px-6">
        <Navbar></Navbar>
        <Suspense fallback={<Spinner></Spinner>}>
          <Outlet></Outlet>
        </Suspense>
      </div>
    </div>
  );
};

export default MainLayout;
