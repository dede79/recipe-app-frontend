// RecipeForm.js
import React, { useState } from 'react';
import styled from "styled-components";

function RecipeForm() {
  const [recipe, setRecipe] = useState({
    title: '',
    category: '',
    preparationTime: 0,
    ingredients: '',
    instructions: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here, like sending the data to your server or updating state.
  };

  return (
      <div>
        <h2 className="recipe-title">Create Recipe</h2>
        <FormWrapper>
        <form onSubmit={handleSubmit}>
          <div className="recipe-field">
            <label>Title:</label>
            <input
                type="text"
                name="title"
                value={recipe.title}
                onChange={handleChange}
                required
            />
          </div>
          <div className="recipe-field">
            <label>Category:</label>
            <input
                type="text"
                name="category"
                value={recipe.category}
                onChange={handleChange}
                required
            />
          </div>
          <div className="recipe-field">
            <label>Preparation Time (minutes):</label>
            <input
                type="number"
                name="preparationTime"
                value={recipe.preparationTime}
                onChange={handleChange}
                required
            />
          </div>
          <div className="recipe-field">
            <label>Ingredients:</label>
            <textarea
                name="ingredients"
                value={recipe.ingredients}
                onChange={handleChange}
                required
            />
          </div>
          <div className="recipe-field">
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
        </FormWrapper>
      </div>
  );
}

export default RecipeForm;
const FormWrapper = styled.div`
  width: 300px;
  margin: 0 auto;
  
`;
