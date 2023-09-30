import React from "react";
import Popular from "../components/Popular";
import Veggie from "../components/Veggie";
import UserRecipes from "./UserRecipes";

function Home() {
  return (
    <div>
      <UserRecipes />
      <Popular />
      <Veggie />
    </div>
  );
}

export default Home;
