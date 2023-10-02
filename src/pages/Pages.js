import React from "react";
import Home from "./Home";
import UserAccount from "./UserAccount";
import { Route, Routes } from "react-router-dom";
import UserPage from "./UserPage";
import SearchResults from "../components/SearchRecipes";
import ReadRecipe from "../components/ReadRecipe";
import RecipeDetail from "../components/RecipeDetail";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/account" element={<UserAccount />} />
      <Route path="/user-area" element={<UserPage />} />
      <Route path="/searched/:search" element={<SearchResults />} />
      <Route path="/recipe/:name" element={<ReadRecipe />} />
      <Route path="/recipes/:id" element={<RecipeDetail />} />
    </Routes>
  );
}

export default Pages;
