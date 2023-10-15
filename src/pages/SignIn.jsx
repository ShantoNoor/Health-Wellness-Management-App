import { Link, useLocation, useNavigate } from "react-router-dom";
import SignInWithOthers from "../components/SignInWithOthers";
import { Player } from "@lottiefiles/react-lottie-player";
import useAuth from "../hooks/useAuth";
import animation from "../assets/animations/sign-in.json";
import { useEffect, useState } from "react";

const SignIn = () => {
  const { signIn } = useAuth();
  const { state } = useLocation();
  const navigate = useNavigate();

  const [swidth, setSwidth] = useState(500);
  useEffect(() => {
    setSwidth(window.innerWidth >= 400 ? 300 : 250);
    const handleResize = () => {
      setSwidth(window.innerWidth >= 400 ? 300 : 250);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    signIn(e.target.email.value, e.target.password.value)
      .then(() => {
        if (state?.pathname) {
          navigate(state.pathname, {
            state: { title: state.title },
          });
        } else {
          navigate("/");
        }
      })
  };
  return (
    <div data-aos="fade-up" className="hero bg-base-200 mt-6">
      <div className="hero-content p-0 flex-col gap-6 lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl lg:text-5xl font-bold">Sign In Now!</h1>
          <Player
            autoplay
            loop
            src={animation}
            style={{ height: swidth, width: swidth }}
          ></Player>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body p-4">
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
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign In</button>
            </div>
          </form>
          <p className="text-center">
            <Link className="text-blue-500" to="/sign-up">
              Sign Up!
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

export default SignIn;
