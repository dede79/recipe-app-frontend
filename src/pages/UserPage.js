import React, { useState, useEffect } from 'react';
import ReadRecipe from "../components/ReadRecipe";
import CreateRecipe from "../components/CreateRecipe";
import axios from 'axios'; // Import Axios library

function UserPage(){
  const [recipeData, setRecipeData] = useState(null);

  useEffect(() => {
    // Make a GET request to retrieve recipe data
    axios.get('http://localhost:3001/recipes')
        .then((response) => {
          // Set the retrieved data in the state
          setRecipeData(response.data);
        })
        .catch((error) => {
          console.error('Error fetching recipe data:', error);
        });
  }, []);

  return(
      <div>
        <CreateRecipe />
      </div>
  )
}


export default UserPage;
