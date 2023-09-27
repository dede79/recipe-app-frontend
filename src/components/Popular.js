import {useEffect, useState} from "react";
import styled from 'styled-components';
import {Splide, SplideSlide} from "@splidejs/react-splide";

import "@splidejs/splide/dist/css/splide.min.css";

function Popular(){
const [popular, setPopular] = useState([]);

  useEffect(()=> {
    getPopular();
  },[])
//empty array just for when it gets mounted at first. When depending on search function etc, add it to array.

  const getPopular = async () => {
    const storageCheck= localStorage.getItem('popular');

    //caching API requests to avoid maxing the quota: check if there is a value for popular in browser localStorage. If not, create one and fetch from API.
    if(storageCheck) {
      setPopular(JSON.parse(storageCheck))
    } else {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
      const data= await api.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes))
      setPopular(data.recipes);
      //console.log(popular)
    }
  }

  return (
    <div>
      <Wrapper>
        <h3>Popular Recipes:</h3>
        <Splide options={{
          perPage:4,
          arrows:true,
          pagination:false
        }}>
          {popular.map((recipe) => {
             return (
                 <SplideSlide key={recipe.id}>
                 <Card>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                </Card>
                </SplideSlide>
             )
          })}
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
  overflow:hidden;
  
`;

export default Popular;
