import { createContext, useEffect, useState } from "react";
import app from "../utility/firebase.init";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut as _signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile as _updateProfile
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
        toast.error("Failed To Sign In");
        toast.error(err.message);
      });
  };
  const signOut = () =>
    _signOut(auth)
      .then(() => {
        toast.success("Sign Out successfull!");
        return true;
      })
      .catch((err) => {
        toast.error("Failed To Sign Out");
        toast.error(err.message);
        return false;
      });

  const updateProfile = (name, photoURL) =>
    _updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        toast.success("Profile Update Successfull!");
      })
      .catch((err) => {
        toast.error("Failed To Update Profile");
        toast.error(err.message);
        console.log(err.message)
      });

  const signUp = (name, email, password) =>
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        toast.success("Sign Up Successfull!");
        updateProfile(name, "");
      })
      .catch((err) => {
        toast.error("Failed To Sign Up");
        toast.error(err.message);
      });

  const signIn = (email, password) =>
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        toast.success("Sign In Successfull!");
      })
      .catch((err) => {
        toast.error("Failed To Sign In");
        toast.error(err.message);
      });

  const googlePopUp = () => popUpSignIn(googleProvider);
  const githubPopUp = () => popUpSignIn(githubProvider);

  return (
    <AuthContex.Provider
      value={{
        googlePopUp,
        githubPopUp,
        user,
        signOut,
        signUp,
        signIn,
        updateProfile,
      }}
    >
      {children}
    </AuthContex.Provider>
  );
};

export default AuthProvider;
