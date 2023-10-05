import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "../styles/components.css";

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const storageCheck = localStorage.getItem("popular");

    if (storageCheck) {
      setPopular(JSON.parse(storageCheck));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      );
      const data = await api.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
      console.log(popular)
    }
  };

  return (
    <div className="popular-container">
      <h3 className="popular-title">Popular Recipes:</h3>
      <Splide
        options={{
          perPage: 3,
          arrows: true,
          pagination: false,
          gap: "1rem",
          breakpoints: {
            640: {
              perPage: 2,
            }
          }
        }}
      >
        {popular.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <Link to={"/apirecipe/" + recipe.id}>
                <PopularSlide recipe={recipe} />
              </Link>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
}

const PopularSlide = ({ recipe }) => {
  return (
    <div className="recipe-slide">
      <h2>{recipe.title}</h2>
      <img className="popular-image" src={recipe.image} alt={recipe.title} />
    </div>
  );
};

export default Popular;
