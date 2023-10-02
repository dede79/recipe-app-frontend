import React, { useState, useEffect } from 'react';
import ReadRecipe from "./ReadRecipe";
import CreateRecipe from "../components/CreateRecipe";
import axios from 'axios'; // Import Axios library

function UserPage(){

  return(
      <div>
        <CreateRecipe />
      </div>
  )
}


export default UserPage;
