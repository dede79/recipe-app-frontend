import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";

function MyRecipe() {
  const { id } = useParams();

  const [details, setDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const fetchDetails = async () => {

    try{
      const response = await axios.get(`http://localhost:3001/recipes/${id}`);
      const returnedData = response.data;
      //console.log(returnedData)
      setDetails(returnedData.recipe);
      setIsLoading(false);
      console.log(returnedData.recipe)
    } catch(error) {
      console.error(error)
    }

  }

  useEffect(() => {
    fetchDetails()
  }, []);

  if(isLoading){
    return <ClipLoader
        loading={isLoading}
        size={120}
        aria-label="Loading Spinner"
        data-testid="loader"
    />
  }

  return (
    <div className="my-recipe">
      <h2>Recipe Created!</h2>
       <p>Name: {details.name}</p>
       <p>Category: {details.cuisine}</p>
       <p>Cooking Time: {details.cooking_time}</p>
      Ingredients:
      <ul>
         {details.ingredients.map(ingredient => <li>{ingredient}</li>)}
       </ul>
        <p>Instructions: {details.instructions}</p>
    </div>

  )
}

export default MyRecipe;
