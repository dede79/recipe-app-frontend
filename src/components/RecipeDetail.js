import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/recipeDetail.css";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Make an API request to get the recipe by ID
    axios
      .get(`http://localhost:3001/recipes/${id}`)
      .then((response) => {
        console.log(response.data);
        setRecipe(response.data.recipe);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching recipe:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="loading-container">Loading...</div>;
  }

  if (!recipe) {
    return <div>404 Recipe not found.</div>;
  }

  const {
    name,
    cuisine,
    preparation_time,
    cooking_time,
    servings,
    ingredients,
    instructions,
  } = recipe;

  const instructionParagraphs = instructions
    .split(`"`)
    .slice(1, -1)
    .map((instruction, index) => <p key={index}>{instruction.trim()}</p>);

  return (
    <div className="recipe-detail-container">
      <h1 className="recipe-title">{name}</h1>
      <div className="recipe-info">
        <p>Cuisine: {cuisine}</p>
        <p>Preparation Time: {preparation_time} minutes</p>
        <p>Cooking Time: {cooking_time} minutes</p>
        <p>Servings: {servings}</p>
      </div>
      <div className="recipe-section">
        <h2 className="section-title">Ingredients:</h2>
        <ul>
          {ingredients &&
            ingredients.map((ingredient, index) => (
              <li key={index} className="ingredient">
                {ingredient}
              </li>
            ))}
        </ul>
      </div>
      <div className="recipe-section">
        <h2 className="section-title">Instructions:</h2>
        <div className="instruction-list">{instructions}</div>
      </div>
    </div>
  );
};

export default RecipeDetail;
