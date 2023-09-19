import React from "react";
import Signin from "../components/auth/Signin";
import Signup from "../components/auth/Signup";
import AuthDetails from "../components/auth/authDetails";

function UserAccount() {
  return (
    <div className="user-account-container">
      <h1>Create Account or Log In</h1>
      <div className="auth-forms">
        <Signin />
        <Signup />
      </div>
      <AuthDetails />
    </div>
  );
}

export default UserAccount;
