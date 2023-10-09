import { Link } from "react-router-dom";
import SignInWithOthers from "../components/SignInWithOthers";
import { Player } from "@lottiefiles/react-lottie-player";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import { useEffect, useRef } from "react";

const MyProfile = () => {
  const { user, updateProfile } = useAuth();

  const nameRef = useRef();
  const purlRef = useRef();
  const emailRef = useRef();

  useEffect(() => {
    nameRef.current.value = user.displayName || "";
    purlRef.current.value = user.photoURL ? user.photoURL : "";
    emailRef.current.value = user.email || "";
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(e.target.name.value, e.target.photourl.value);
  };
  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col gap-6 lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">My Profile!</h1>
          <Player
            autoplay
            loop
            src="/update.json"
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
                ref={nameRef}
              />
            </div>
            <div className="form-control">
              <label htmlFor="photourl" className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                id="photourl"
                type="text"
                name="photourl"
                placeholder="photo url"
                className="input input-bordered"
                required
                ref={purlRef}
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
                disabled
                ref={emailRef}
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
