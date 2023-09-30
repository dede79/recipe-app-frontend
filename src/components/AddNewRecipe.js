import React, { useState } from "react";

function AddNewRecipe() {
  const initialState = {
    fields: {
      title: "",
      ingredients: "",
      steps: "",
      prepTime: "",
      cookingTime: "",
      servings: "",
    },
  };

  const [fields, setFields] = useState(initialState.fields);

  const submitRecipe = (e) => {
    e.preventDefault();
    console.log(fields);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };

  return (
    <div className="new-recipe-form-container">
      <form onSubmit={submitRecipe}>
        <h1>Add a new recipe</h1>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={fields.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="ingredients"
          placeholder="Ingredients"
          value={fields.ingredients}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="steps"
          placeholder="Steps"
          value={fields.steps}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="prepTime"
          placeholder="Prep Time"
          value={fields.prepTime}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="cookingTime"
          placeholder="Cooking Time"
          value={fields.cookingTime}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="servings"
          placeholder="Number of Servings"
          value={fields.servings}
          onChange={handleInputChange}
        />
        <button type="Submit">Submit</button>
      </form>
    </div>
  );
}

export default AddNewRecipe;
