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

  const commonLinks = [
    {
      text: "About Us",
      to: "/about-us",
    },
    {
      text: "Contanct Us",
      to: "/contact-us",
    },
  ];

  const unProtectedLinks = [
    {
      text: "Sign In",
      to: "/sign-in",
    },
    {
      text: "Sign Up",
      to: "/sign-up",
    },
  ];

  const protectedLinks = [
    {
      text: "My Activity",
      to: "/my-activity",
    },
    {
      text: "My Profile",
      to: "/my-profile",
    },
    {
      text: "Sign Out",
      to: "/sign-out",
    },
  ];

  const { user } = useAuth();
  const [navlinks, setNavlinks] = useState([...links, ...unProtectedLinks]);

  useEffect(() => {
    if (user) {
      setNavlinks([...links, ...commonLinks, ...protectedLinks]);
    } else {
      setNavlinks([...links, ...commonLinks, ...unProtectedLinks]);
    }
  }, [user]);

  const [show, setShow] = useState(false);

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
    <>
      <div className="navbar bg-base-100 rounded-lg p-4">
        <div className="navbar-start">
          <div className="">
            <div className="flex items-center justify-center">
              <div tabIndex={0} className="btn btn-ghost lg:hidden">
                <label className="btn -ml-4 scale-[.85] btn-circle swap swap-rotate">
                  {/* this hidden checkbox controls the state */}
                  <input type="checkbox" />

                  {/* hamburger icon */}
                  <svg
                    className="swap-off fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 512 512"
                  >
                    <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                  </svg>

                  {/* close icon */}
                  <svg
                    className="swap-on fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 512 512"
                    onClick={() => setShow((p) => !p)}
                  >
                    <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                  </svg>
                </label>
              </div>
              <Logo />
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <Navlinks />
          </ul>
        </div>

        <div className="navbar-end">
          {user && <Avater protectedLinks={protectedLinks} />}
        </div>
      </div>
      <ul
        tabIndex={0}
        className={`${
          show
            ? "scale-100 transition z-10 opacity-100 duration-300"
            : "opacity-0 absolute scale-125 -z-20"
        } lg:hidden menu menu-md mt-3 p-2 bg-base-100 rounded-lg`}
      >
        <Navlinks />
      </ul>
    </>
  );
};

export default Navbar;
