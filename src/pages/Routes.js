import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import UserRecipes from "./UserRecipes";
import UserAccount from "./UserAccount";
import Signin from "../components/auth/Signin";

function RoutesConfig() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/usercreateaccount" element={<UserAccount />} />
      <Route path="/recipes" element={<Home />} />
      <Route path="/userrecipes" element={<UserRecipes />} />
      <Route path="/signin" element={<Signin />} />
      {/* Add more routes here */}
    </Routes>
  );
}

export default RoutesConfig;
