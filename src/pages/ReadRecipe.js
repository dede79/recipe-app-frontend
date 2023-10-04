import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import styled from "styled-components";

function ReadRecipe() {
  let params = useParams();

  const [details, setDetails] = useState({});

  const fetchDetails = async () => {

    const data = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`);

    const returnedData = await data.json();
    setDetails(returnedData);
    console.log(details)
  }

  useEffect(() => {
    fetchDetails()
  }, [params.id]);

  return (
      <div>
        <h3>{details.title}</h3>
        <img src={details.image} alt={details.title} />

      </div>
  )
}

export default ReadRecipe;
