import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Avater from "./Avater";
import useAuth from "../hooks/useAuth";
import Logo from "./Logo";

const Navbar = () => {
  const links = [
    {
      text: "Home",
      to: "/",
    },
  ];

  const unProtectedLinks = [
    {
      text: "Sign In",
      to: "sign-in/",
    },
    {
      text: "Sign Up",
      to: "sign-up/",
    },
  ];

  const protectedLinks = [
    {
      text: "My Activity",
      to: "my-activity/",
    },
    {
      text: "My Profile",
      to: "my-profile/",
    },
  ];

  const { user } = useAuth();
  const [navlinks, setNavlinks] = useState([...links, ...unProtectedLinks]);

  useEffect(() => {
    if (user) {
      setNavlinks([...links, ...protectedLinks]);
    } else {
      setNavlinks([...links, ...unProtectedLinks]);
    }
  }, []);

  const Navlinks = () => {
    return navlinks.map((link, idx) => (
      <li key={idx}>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "active font-bold !text-white !bg-red-500"
              : ""
          }
          to={link.to}
        >
          {link.text}
        </NavLink>
      </li>
    ));
  };

  return (
    <div className="navbar bg-base-100 rounded-lg p-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <Navlinks />
          </ul>
        </div>
        <Logo />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <Navlinks />
        </ul>
      </div>
      <div className="navbar-end">
        <Avater protectedLinks={protectedLinks} />
      </div>
    </div>
  );
};

export default Navbar;
