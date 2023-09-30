import React, { useState } from "react";
import "../styles/addnewrecipe.css";
import axios from "axios";

function AddNewRecipe() {
  const initialState = {
    fields: {
      title: "",
      cuisine: "",
      ingredients: "",
      steps: "",
      prepTime: "",
      cookingTime: "",
      servings: "",
    },
  };

  const [fields, setFields] = useState(initialState.fields);

  const submitRecipe = async (e) => {
    e.preventDefault();
    console.log(fields);

    // commented out since i can't remember the api endpoints rn
    // this code should work once we get it setup on the backend tho

    /* try {
      const response = await axios.post(
        "http://localhost:4000/api/recipes",
        fields
      );
      console.log("Recipe created:", response.data);
    } catch (error) {
      console.log("Error creating recipe:", error);
    } */
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
    // prevents form from submitting using "enter" key
    // this will let user enter more complex and longer text
    // i.e. in ingredients/steps inputs
    // super clumsy way of doing this lol
    // can we add a more feature-rich editor? blog style?
  };

  return (
    <div className="new-recipe-form-container">
      <form onSubmit={submitRecipe} onKeyDown={handleKeyDown}>
        <h1>Add a new recipe</h1>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={fields.title}
          onChange={handleInputChange}
          className="form-input"
          required
        />
        <input
          type="text"
          name="cuisine"
          placeholder="Cuisine"
          value={fields.cuisine}
          onChange={handleInputChange}
          className="form-input"
          required
        />
        <input
          type="text"
          name="ingredients"
          placeholder="Ingredients"
          value={fields.ingredients}
          onChange={handleInputChange}
          className="form-input"
          required
        />
        <input
          type="text"
          name="steps"
          placeholder="Steps"
          value={fields.steps}
          onChange={handleInputChange}
          className="form-input"
          required
        />
        <input
          type="text"
          name="prepTime"
          placeholder="Prep Time"
          value={fields.prepTime}
          onChange={handleInputChange}
          className="form-input"
          required
        />
        <input
          type="text"
          name="cookingTime"
          placeholder="Cooking Time"
          value={fields.cookingTime}
          onChange={handleInputChange}
          className="form-input"
          required
        />
        <input
          type="text"
          name="servings"
          placeholder="Number of Servings"
          value={fields.servings}
          onChange={handleInputChange}
          className="form-input"
          required
        />
        <button type="Submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddNewRecipe;
