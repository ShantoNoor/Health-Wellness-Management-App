import { useEffect } from "react";
import Spinner from "../components/Spinner";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const SignOut = () => {
  const { signOut } = useAuth();
  useEffect(() => {
    signOut();
  }, []);
  return <Navigate to="/" />;
};

export default SignOut;
