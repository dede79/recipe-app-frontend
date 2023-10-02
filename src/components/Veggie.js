import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";
import "@splidejs/splide/dist/css/splide.min.css";

function Veggie() {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = async () => {
    const storageCheck = localStorage.getItem("veggie");

    if (storageCheck) {
      setVeggie(JSON.parse(storageCheck));
    } else {
      try {
        const api = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?query=pasta&apiKey=${process.env.REACT_APP_API_KEY}&number=9`
        );
        if (!api.ok) {
          throw new Error(`API request failed with status ${api.status}`);
        }
        const data = await api.json();
        setVeggie(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
        // You can handle errors here, e.g., show an error message to the user.
      }
    }
  };

  return (
    <div>
      <Wrapper>
        <h3>Best Pasta Recipes:</h3>
        <Splide
          options={{
            perPage: 3,
            arrows: true,
            pagination: false,
          }}
        >
          {veggie.length > 0 ? (
            veggie.map((recipe) => (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={"/recipe/" + recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                  </Link>
                </Card>
              </SplideSlide>
            ))
          ) : (
            <p>Loading...</p> // You can add a loading indicator here.
          )}
        </Splide>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
`;

export default Veggie;
