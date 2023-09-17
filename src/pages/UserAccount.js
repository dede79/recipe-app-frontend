import React from "react";
import Signin from "../components/auth/Signin";
import Signup from "../components/auth/Signup";
import AuthDetails from "../components/auth/authDetails";

function UserAccount() {
  return (
    <div>
      <h1>Create Account</h1>
      <Signin />
      <AuthDetails />
      <Signup />
    </div>
  );
}

export default UserAccount;
