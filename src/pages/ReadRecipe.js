import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

function ReadRecipe() {
  let params = useParams();

  const [details, setDetails] = useState(null);
  const [isLoading,setIsLoading] = useState(true);

  const fetchDetails = async () => {

    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);

    const returnedData = await data.json();
    setDetails(returnedData);
    setIsLoading(false)
    console.log(details)
  }

  useEffect(() => {
    fetchDetails()
  }, [params.name]);

  if(isLoading){
    return (<ClipLoader
        loading={isLoading}
        size={90}
        aria-label="Loading Spinner"
        data-testid="loader"
    />)
  }

  return (
      <div>
        <h3>{details.title}</h3>
        <img src={details.image} alt={details.title} />
        <h3>Ingredients</h3>
        <ul>
          {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
          ))}
        </ul>
        <h3>Instructions</h3>
        <p dangerouslySetInnerHTML={{__html: details.instructions}}></p>
      </div>
  )
}

export default ReadRecipe;
