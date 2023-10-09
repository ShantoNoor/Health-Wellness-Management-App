import { FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
const SignInWithOthers = () => {
  const { googlePopUp, githubPopUp } = useAuth();
  const { state } = useLocation();
  const navigate = useNavigate();
  return (
    <ul className="menu rounded-box bg-white">
      <li className="bg-transparent">
        <button
          onClick={() => {
            googlePopUp();
            if (state?.pathname)
              navigate(state.pathname, {
                state: { title: state.title },
              });
          }}
        >
          <FaGoogle />
          Sign In With Google
        </button>
      </li>
      <hr />
      <li className="bg-transparent">
        <button
          onClick={() => {
            githubPopUp();
            if (state?.pathname)
              navigate(state.pathname, {
                state: { title: state.title },
              });
          }}
        >
          <FaGithub />
          Sign In With Github
        </button>
      </li>
    </ul>
  );
};

export default SignInWithOthers;
