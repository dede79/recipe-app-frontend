
import React from "react";

import Header from "./components/Header"
import Pages from "./pages/Pages";
import {BrowserRouter} from "react-router-dom";
import Search from "./components/Search";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Search />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
