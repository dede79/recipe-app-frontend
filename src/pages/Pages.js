import React from "react";
import Home from "./Home";
import UserRecipes from "./UserRecipes";
import UserAccount from "./UserAccount";
import { Route, Routes } from "react-router-dom";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/usercreateaccount" element={<UserAccount />} />
      <Route path="/recipes" element={<Home />} />
      <Route path="/userrecipes" element={<UserRecipes />} />
    </Routes>
  );
}

export default Pages;
