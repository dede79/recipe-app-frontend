import React, { useEffect, useState } from "react";
import { auth } from "./firebase";
import Header from "./components/Header";
import Pages from "./pages/Pages";
import UserAccount from "./pages/UserAccount";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });

    return () => unsubscribe();
  }, []);
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
