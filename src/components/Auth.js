import React from "react";
import "../App.css";
import {
  auth,
  signInWithPopup,
  provider,
  GoogleAuthProvider,
  
} from "./Firebase";

const AuthComponent = (props) => {
    const {issetAuth } = props;

  const googlebtn = async () => {
    try {
      await signInWithPopup(auth, provider).then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        localStorage.setItem("auth-token", user.refreshToken , token);
        issetAuth(true);
        console.log(user);
      });
    } catch (error) {
      console.log(error)
    }
  };

  
  return (
    <div className="google-btn">
        <h3>Signing with Google</h3>
      <button className="btn-google" onClick={googlebtn}>googlelogin</button>
    </div>
  );
};

export default AuthComponent;
