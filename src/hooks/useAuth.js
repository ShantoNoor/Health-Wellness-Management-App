import { useContext } from "react";
import { AuthContex } from "../components/AuthProvider";

const useAuth = () => {
  return useContext(AuthContex);
};

export default useAuth;
