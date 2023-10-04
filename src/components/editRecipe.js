import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/createRecipe.css";

function EditRecipe() {
  const [recipe, setRecipe] = useState({
    name: "",
    cuisine: "",
    cooking_time: 0,
    servings: 0,
    ingredients: "",
    instructions: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/recipes/${id}`);
        setRecipe(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRecipe();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ingredientsArray = recipe.ingredients
      ? recipe.ingredients.split("\n").map((ingredient) => {
          return ingredient.trim();
        })
      : [];

    const data = {
      ...recipe,
      ingredients: ingredientsArray,
    };

    try {
      const response = await axios.patch(
        `http://localhost:3001/recipes/${id}`,
        data
      );
      navigate("/recipes/" + response.data.id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2 className="recipe-title">Edit Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="name"
            value={recipe.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Cuisine</label>
          <input
            type="text"
            name="cuisine"
            value={recipe.cuisine}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Cooking time (minutes)</label>
          <input
            type="number"
            name="cooking_time"
            value={recipe.cooking_time}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Servings</label>
          <input
            type="number"
            name="servings"
            value={recipe.servings}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Ingredients</label>
          <p>Seperate each ingredient by comma</p>
          <textarea
            type="text"
            name="ingredients"
            value={recipe.ingredients}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Instructions</label>
          <p>Separate each step by line</p>
          <textarea
            name="instructions"
            value={recipe.instructions}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-button">
          Update Recipe
        </button>
      </form>
    </div>
  );
}

export default EditRecipe;
