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
  const popUpSignIn = async (provider) => {
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const signOut = () =>
    _signOut(auth)
      .then(() => {
        console.log("Sign-Out successfull!");
        return true;
      })
      .catch((err) => {
        console.error(err);
        return false;
      });

  const googlePopUp = async () => popUpSignIn(googleProvider);
  const githubPopUp = async () => popUpSignIn(githubProvider);

  return (
    <AuthContex.Provider value={{ googlePopUp, githubPopUp, user, signOut }}>
      {children}
    </AuthContex.Provider>
  );
};

export default AuthProvider;
