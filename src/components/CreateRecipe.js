import React, { useState } from 'react';
import axios from 'axios'; // Import Axios library

function CreateRecipe() {
  const [recipe, setRecipe] = useState({
    name: '',
    cuisine: '',
    cooking_time: 0,
    servings: 0,
    ingredients:'',
    instructions: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {...recipe};
    data.ingredients = data.ingredients.split(',').map((ingredient) => {
      return ingredient.trim();
    })
    try {
      // Send the form data to the Express.js API
      const response = await axios.post('http://localhost:3001/recipes', data);

      // Handle the response, e.g., show a success message or redirect the user
      console.log(response.data);

    } catch (error) {
      console.error(error);
      // Handle errors, e.g., show an error message to the user
    }
  };

  return (
      <div>
        <h2 className="recipe-title">Create Recipe</h2>
        <form onSubmit={handleSubmit}>
            <div>
              <label>Title:</label>
              <input
                  type="text"
                  name="name"
                  value={recipe.name}
                  onChange={handleChange}
                  required
              />
            </div>
            <div>
              <label>Category:</label>
              <input
                  type="text"
                  name="cuisine"
                  value={recipe.cuisine}
                  onChange={handleChange}
                  required
              />
            </div>
          <div>
            <label>Cooking time</label>
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
            <input
                type="text"
                name="ingredients"
                value={recipe.ingredients}
                onChange={handleChange}
            />
          </div>
            <div>
              <label>Instructions:</label>
              <textarea
                  name="instructions"
                  value={recipe.instructions}
                  onChange={handleChange}
                  required
              />
            </div>
          <button type="submit">Create Recipe</button>
        </form>
      </div>
  );
}

export default CreateRecipe;
