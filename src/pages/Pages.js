import React, { useState, useEffect } from "react";
import Home from "./Home";
import UserAccount from "./UserAccount";
import { Route, Routes } from "react-router-dom";
import UserPage from "./UserPage";
import SearchResults from "../components/SearchRecipes";
import RecipeDetail from "../components/RecipeDetail";
import { auth } from "../firebase";
import ReadRecipe from "./ReadRecipe";
import EditRecipe from "../components/editRecipe";

function Pages() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <Routes>
      <Route path="/" element={user ? <Home /> : <UserAccount />} />
      <Route path="/account" element={<UserAccount />} />
      {/* this route is the only one a non-authenticated user can access.
      there's probably a less clunky way to do this
      but it does the job for now */}
      <Route
        path="/user-area"
        element={user ? <UserPage /> : <UserAccount />}
      />
      {/* all these other routes require an authenticated user to access */}
      <Route
        path="/searched/:search"
        element={user ? <SearchResults /> : <UserAccount />}
      />
      <Route
        path="/recipes/:id"
        element={user ? <RecipeDetail /> : <UserAccount />}
      />
      <Route
        path="/myrecipe/:id"
        element={user ? <RecipeDetail /> : <UserAccount />}
      />
      <Route
        path="/recipe/:id"
        element={user ? <ReadRecipe /> : <UserAccount />}
      />
      <Route
        path="/edit-recipe/:id"
        element={user ? <EditRecipe /> : <UserAccount />}
      />
    </Routes>
  );
}

export default Pages;
