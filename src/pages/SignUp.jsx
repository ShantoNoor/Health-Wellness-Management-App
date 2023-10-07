import { Link } from "react-router-dom";
import SignInWithOthers from "../components/SignInWithOthers";

const SignUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log(e.target.password.value);
  };
  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign In Now!</h1>
          <p className="py-6">
            The "Sign In Now" feature is a pivotal component of user
            authentication on digital platforms, enabling users to access their
            accounts securely. It requires users to input their identification
            information, typically a username or email address, along with a
            password for verification. This authentication process ensures that
            only legitimate account holders gain access to their personalized
            content and features. Security measures like encryption safeguard
            user data during transmission.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="full name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>
          <p className="text-center">
            Already have a account,{" "}
            <Link className="text-blue-500" to="/sign-in">
              Sign In!
            </Link>
          </p>
          <div className="mx-auto mt-2">
            <SignInWithOthers />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
