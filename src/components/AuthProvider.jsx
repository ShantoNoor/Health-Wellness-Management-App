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
  updateProfile as _updateProfile,
} from "firebase/auth";
import { toast } from "react-toastify";

const auth = getAuth(app);
export const AuthContex = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const popUpSignIn = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  const signOut = () => {
    setLoading(true);
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
  };

  const updateProfile = (name, photoURL) => {
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
      });
  };

  const signUp = (name, email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googlePopUp = () => {
    setLoading(true);
    return popUpSignIn(googleProvider);
  };
  const githubPopUp = () => {
    setLoading(true);
    return popUpSignIn(githubProvider);
  };

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
        loading,
      }}
    >
      {children}
    </AuthContex.Provider>
  );
};

export default AuthProvider;
