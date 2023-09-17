import React from "react";
import Signin from "../components/auth/Signin";
import Signup from "../components/auth/Signup";

function UserAccount() {
  return (
    <div>
      <h1>Create Account</h1>
      <Signin />
      <Signup />
    </div>
  );
}

export default UserAccount;
