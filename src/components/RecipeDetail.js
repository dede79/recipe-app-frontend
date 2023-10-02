import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const RecipeDetail = ({ match }) => {
  console.log(match);
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(recipe);

  useEffect(() => {
    // Make an API request to get the recipe by ID
    axios
      .get(`http://localhost:4000/recipes/${id}`)
      .then((response) => {
        setRecipe(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching recipe:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!recipe) {
    return <div>Recipe not found.</div>;
  }

  return (
    <div className="recipe-detail">
      <h1>{recipe.name}</h1>
      <p>Cuisine: {recipe.cuisine}</p>
      <p>Preparation Time: {recipe.preparation_time}</p>
      <p>Cooking Time: {recipe.cooking_time}</p>
      <p>Servings: {recipe.servings}</p>
      <h2>Ingredients:</h2>
      <ul>
        {recipe.ingredients &&
          recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
      </ul>
      <h2>Instructions:</h2>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetail;
