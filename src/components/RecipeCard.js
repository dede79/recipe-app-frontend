import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow:hidden;
`;

const RecipeCard = (props) => {
  return <Card>
    <Link to={'/recipe/' + props.id} >
      <p>{props.title}</p>
      <img src={props.image} alt={props.title} />
    </Link>
  </Card>
}

export default RecipeCard
