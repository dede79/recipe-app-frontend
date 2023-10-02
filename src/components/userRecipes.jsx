import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

const UserRecipes = () => {
  const [userRecipes, setUserRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/recipes")
      .then((response) => response.json())
      .then((data) => setUserRecipes(data))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="user-recipes-container">
      <h1>Your Recipes</h1>
      <div>
        <Splide options={{ perPage: 3, gap: "1rem" }}>
          {userRecipes.map((recipe) => (
            <SplideSlide key={recipe.id}>
              <Link to={`/recipes/${recipe.id}`}>
                <RecipeSlide recipe={recipe} />
              </Link>
            </SplideSlide>
          ))}
        </Splide>
      </div>
      <Link to="/user-area">Add a new recipe</Link>
    </div>
  );
};

const RecipeSlide = ({ recipe }) => {
  return (
    <div className="recipe-slide">
      <h2>{recipe.name}</h2>
      <p>{recipe.cuisine}</p>
      {/* More details or styling here */}
    </div>
  );
};

export default UserRecipes;
