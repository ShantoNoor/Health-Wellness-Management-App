import { createContext, useEffect, useState } from "react";
import app from "../utility/firebase.init";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut as _signOut,
} from "firebase/auth";
import { toast } from "react-toastify";

const auth = getAuth(app);
export const AuthContex = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (signedUser) => {
      setUser(signedUser);
    });
  }, []);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const popUpSignIn = (provider) => {
    signInWithPopup(auth, provider)
      .then((res) => {
        toast.success("Sign In Successfull!");
      })
      .catch((err) => {
        toast.error("Failed To Sign In")
        toast.error(err.code);
      });
  };
  const signOut = () =>
    _signOut(auth)
      .then(() => {
        toast.success("Sign Out successfull!");
        return true;
      })
      .catch((err) => {
        toast.error(err.code);
        return false;
      });

  const googlePopUp = () => popUpSignIn(googleProvider);
  const githubPopUp = () => popUpSignIn(githubProvider);

  return (
    <AuthContex.Provider value={{ googlePopUp, githubPopUp, user, signOut }}>
      {children}
    </AuthContex.Provider>
  );
};

export default AuthProvider;
