import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { Suspense } from "react";
import Spinner from "../components/Spinner";

const MainLayout = () => {
  const classes =
    "bg-bg1 h-[500px] md:h-[600px] bg-cover bg-no-repeat object-cover bg-center";
  const { pathname, state } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      document.title = "Donation Campaign";
    } else {
      document.title =
        pathname.slice(1, -1).toUpperCase() + " | Donation Campaign";
    }

    if (state) document.title = state.title + " | Donation Campaign";
  }, [pathname, state]);

  return (
    <div className={pathname === "/" ? classes : ""}>
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
