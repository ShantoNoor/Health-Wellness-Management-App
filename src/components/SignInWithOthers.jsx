import { FaGithub, FaGoogle } from "react-icons/fa";
const SignInWithOthers = () => {
  return (
    <ul className="menu rounded-box bg-white text-center">
      <li className="bg-transparent">
        <button>
          <FaGoogle />
          Sign In With Google
        </button>
      </li>
      <hr />
      <li className="bg-transparent">
        <button>
          <FaGithub />
          Sign In With Github
        </button>
      </li>
    </ul>
  );
};

export default SignInWithOthers;
