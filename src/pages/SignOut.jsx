import { useEffect } from "react";
import Spinner from "../components/Spinner";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const SignOut = () => {
  const { signOut } = useAuth();
  if (signOut()) {
    return <Navigate to="/" />;
  } 
  return <Spinner />;
};

export default SignOut;
