import React from "react";
import{useEffect,useState} from "react";
import {useParams} from "react-router-dom";
import styled from "styled-components";

function SearchRecipes(){
  const[searchResults, setSearchResults]= useState([]);
  let params = useParams();

  const getSearchedResults = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}&number=9`
    );
    const recipes = await data.json();
    console.log(recipes)
    setSearchResults(recipes.results);
  }

  useEffect(()=> {
    getSearchedResults(params.search)
      }, [params.search]
  )

  return (
      <Grid>
        {searchResults.map((item) => {
          return(
              <Card key={item.id}>
                <img src={item.image} alt={item.title}/>
                <h4>{item.title}</h4>
              </Card>
          )
        })}
      </Grid>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img{
    width: 90%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default SearchRecipes;
