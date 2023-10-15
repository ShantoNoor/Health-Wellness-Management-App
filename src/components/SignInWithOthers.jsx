import { FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
const SignInWithOthers = () => {
  const { googlePopUp, githubPopUp } = useAuth();
  const { state } = useLocation();
  const navigate = useNavigate();

  const redirectAfterLogin = () => {
    if (state?.pathname) {
      return navigate(state.pathname, {
        state: { title: state.title },
      });
    } else {
      return navigate("/");
    }
  };

  return (
    <ul className="menu rounded-box bg-white">
      <li className="bg-transparent">
        <button
          onClick={() => {
            googlePopUp()
              .then(() => redirectAfterLogin())
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
            githubPopUp()
              .then(() => redirectAfterLogin())
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
