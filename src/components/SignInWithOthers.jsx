import { FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
const SignInWithOthers = () => {
  const { googlePopUp, githubPopUp } = useAuth();
  return (
    <ul className="menu rounded-box bg-white">
      <li className="bg-transparent">
        <button onClick={googlePopUp}>
          <FaGoogle />
          Sign In With Google
        </button>
      </li>
      <hr />
      <li className="bg-transparent">
        <button onClick={githubPopUp}>
          <FaGithub />
          Sign In With Github
        </button>
      </li>
    </ul>
  );
};

export default SignInWithOthers;
