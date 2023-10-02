import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

function MyRecipe() {
  // let params = useParams();
  //
  // const [details, setDetails] = useState({});
  //
  // const fetchDetails = async () => {
  //
  //   const response = await axios.get(`http://localhost:3001/recipe/:id`);
  //
  //   const returnedData = await response.json();
  //   setDetails(returnedData);
  //
  // }
  //
  // useEffect(() => {
  //   fetchDetails()
  // }, [params.id]);

  return (
      <>
      <h2>Recipe Created!</h2>

      </>

  )
}

export default MyRecipe;
