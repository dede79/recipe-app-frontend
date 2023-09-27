import {useEffect, useState} from "react";
import styled from 'styled-components';
import {Splide, SplideSlide} from "@splidejs/react-splide";

import "@splidejs/splide/dist/css/splide.min.css";

function Veggie() {
  const [veggie, setVeggie] = useState([]);

  useEffect(()=> {
    getVeggie();
  },[])
//empty array just for when it gets mounted at first. When depending on search function etc, add it to array.

  const getVeggie = async () => {
    const storageCheck= localStorage.getItem('veggie');

    if(storageCheck){
      setVeggie(JSON.parse(storageCheck))
    } else {
      const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=pasta&apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
      const data= await api.json();
      //console.log(data);
      setVeggie(data.results);
      //console.log(data.results);
    }
  }

  return (
      <div>
        <Wrapper>
          <h3>Best Pasta Recipes:</h3>
          <Splide options={{
            perPage:3,
            arrows:true,
            pagination:false
          }}>
            {veggie.map((recipe) => {
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

export default Veggie;
