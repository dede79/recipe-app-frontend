import React from "react";
import Home from "./Home";
import UserAccount from "./UserAccount";
import {Route, Routes} from "react-router-dom";

function Pages(){
  return(
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/account" element={<UserAccount />} />
      </Routes>
  )
}

export default Pages;
