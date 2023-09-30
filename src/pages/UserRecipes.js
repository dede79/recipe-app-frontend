import React from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

// sample data for user recipes
// this will later become a database link
import userRecipes from "../data/userRecipeData";

const UserRecipes = () => {
  return (
    <div className="user-recipes-container">
      <h1>Your Recipes!</h1>
      <div>
        <Splide options={{ perPage: 3, gap: "1rem" }}>
          {userRecipes.map((recipe, index) => (
            <SplideSlide key={index}>
              {/* this makes the slide clickable but doesn't lead anywhere yet. 
              currently it links to the recipes id which might work fine, actually */}
              <a href={`/recipe/${recipe.id}`}>
                <RecipeSlide recipe={recipe} />
              </a>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

const RecipeSlide = ({ recipe }) => {
  return (
    <div className="recipe-slide">
      <h2>{recipe.title}</h2>
      <p>Cuisine: {recipe.cuisine}</p>
      {/* more details or styling here */}
    </div>
  );
};

export default UserRecipes;
