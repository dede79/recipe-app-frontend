import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home";
import UserRecipes from "./UserRecipes";
import UserAccount from "./UserAccount";
import Signin from "../components/auth/Signin";
import AddNewRecipe from "../components/AddNewRecipe";
import { auth } from "../firebase";

function RoutesConfig() {
  const user = auth.currentUser;

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/usercreateaccount" element={<UserAccount />} />
      <Route path="/recipes" element={<Home />} />
      <Route
        path="/userrecipes"
        element={user ? <UserRecipes /> : <Navigate to="/signin" />}
      />
      <Route path="/signin" element={user ? <Navigate to="/" /> : <Signin />} />
      <Route
        path="/add-new-recipe"
        element={user ? <AddNewRecipe /> : <Navigate to="/signin" />}
      />

      {/* Add more routes here */}
    </Routes>
  );
}

export default RoutesConfig;
