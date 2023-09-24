import React, { useEffect, useState } from "react";
import { auth } from "./firebase";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import RoutesConfig from "./pages/Routes"; // Import your route configurations

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
    <Router>
      <div className="App">
        <Header />
        <RoutesConfig /> {/* Use the RoutesConfig component here */}
      </div>
    </Router>
  );
}

export default App;
