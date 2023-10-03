import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/createRecipe.css";

function CreateRecipe() {
  const [recipe, setRecipe] = useState({
    name: "",
    cuisine: "",
    cooking_time: 0,
    servings: 0,
    ingredients: "",
    instructions: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ingredientsArray = recipe.ingredients
      .split("\n")
      .map((ingredient) => {
        return ingredient.trim();
      });

    const data = {
      ...recipe,
      ingredients: ingredientsArray,
    };

    try {
      // Send the form data to the Express.js API
      const response = await axios.post("http://localhost:3001/recipes", data);
      // Handle the response, e.g., show a success message or redirect the user
      //console.log(response.data);
      navigate("/myrecipe/" + response.data.id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2 className="recipe-title">Create Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="name"
            value={recipe.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Cuisine</label>
          <input
            type="text"
            name="cuisine"
            value={recipe.cuisine}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Cooking time (minutes)</label>
          <input
            type="number"
            name="cooking_time"
            value={recipe.cooking_time}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Servings</label>
          <input
            type="number"
            name="servings"
            value={recipe.servings}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Ingredients</label>
          <p>Seperate each ingredient by line</p>
          <textarea
            type="text"
            name="ingredients"
            value={recipe.ingredients}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Instructions</label>
          <p>Seperate each step by line</p>
          <textarea
            name="instructions"
            value={recipe.instructions}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Create Recipe
        </button>
      </form>
    </div>
  );
}

export default CreateRecipe;
