
import React from "react";

import Header from "./components/Header"
import Pages from "./pages/Pages";
import {BrowserRouter} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
