import React from "react";
import Popular from "../components/Popular";
import Veggie from "../components/Veggie";
import UserRecipes from "../components/userRecipes";

function Home() {
  return (
    <div>
      <Popular />
      <UserRecipes />
      <Veggie />
    </div>
  );
}

export default Home;
