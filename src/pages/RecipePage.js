import React, { useState, useEffect } from "react";
import RecipeDetail from "../components/RecipeDetail";
import axios from "axios";

const RecipePage = ({ match }) => {
  const [recipe, setRecipe] = useState(null);
  const recipeId = match.params.id;

  useEffect(() => {
    axios
      .get(`http://localhost:3001/recipes/${recipeId}`)
      .then((response) => {
        setRecipe(response.data);
      })
      .catch((error) => {
        console.error("Error fetching recipe:", error);
      });
  }, [recipeId]);

  return (
    <div>
      <h1>Recipe Details</h1>
      {recipe ? <RecipeDetail recipe={recipe} /> : <p>Loading...</p>}
    </div>
  );
};

export default RecipePage;
