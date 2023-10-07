import { Link } from "react-router-dom";
import logo from "/logo.png";

const Logo = () => {
  return (
    <Link
      className="flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
      to="/"
    >
      <div className="flex gap-4 items-center">
        <img
          src={logo}
          style={{ height: "40px" }}
          alt="Health and Wellness Logo"
          loading="lazy"
        />
        <h1 className="font-bold lg:flex flex-col hidden">
          <span className="text-red-500">Health & Wellness</span>
          <span className="text-blue-500">Management App</span>
        </h1>
      </div>
    </Link>
  );
};

export default Logo;
