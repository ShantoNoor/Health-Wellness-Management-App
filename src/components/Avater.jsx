import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Avater = ({ protectedLinks }) => {
  const { user } = useAuth();

  const links = [
    ...protectedLinks,
    {
      text: "Sign Out",
      to: "sign-out/",
    },
  ];
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} className="btn btn-ghost btn-circle avatar placeholder">
        {user.photoURL ? (
          <div className="w-10 rounded-full">
            <img loading={"lazy"} src={user.photoURL} />
          </div>
        ) : (
          <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
            <span className="text-xl">
              {user.displayName && user.displayName[0] || "#"}
            </span>
          </div>
        )}
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-lg w-52"
      >
        {links.map((link, idx) => (
          <li key={idx}>
            <Link to={link.to}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Avater;
