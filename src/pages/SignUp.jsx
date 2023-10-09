import { Link, useLocation, useNavigate } from "react-router-dom";
import SignInWithOthers from "../components/SignInWithOthers";
import { Player } from "@lottiefiles/react-lottie-player";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import { useState } from "react";
import animation from "../assets/animations/sign-up.json";

const SignUp = () => {
  const { signUp } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");
  const { state } = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");

    const password = e.target.password.value;
    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 charecters!");
      return;
    } else if (/.*[A-Z].*/.test(password) == false) {
      setErrorMessage("Password must contains at least one capital letter!");
      return;
    } else if (/.*[^A-Za-z0-9].*/.test(password) == false) {
      setErrorMessage("Password must contains at least one special character!");
      return;
    }

    signUp(e.target.name.value, e.target.email.value, password);
  };
  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col gap-6 lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up Now!</h1>
          <Player
            autoplay
            loop
            src={animation}
            style={{ height: "300px", width: "300px" }}
          ></Player>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label htmlFor="name" className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="full name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="email" className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="password" className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              {errorMessage && (
                <p className="text-sm mt-2 text-center text-red-800">
                  {errorMessage}
                </p>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>
          <p className="text-center">
            Already have a account,{" "}
            <Link className="text-blue-500" to="/sign-in" state={state}>
              Sign In!
            </Link>
          </p>
          <div className="divider">OR</div>
          <div className="mx-auto mb-5">
            <SignInWithOthers />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
