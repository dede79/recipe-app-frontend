import React, { useState } from "react";

const Searchbar = () => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <ul>
        {filteredRecipes.map((recipe) => (
          <li key={recipe.id}>{recipe.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Searchbar;
