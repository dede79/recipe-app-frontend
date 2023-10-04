import { FaUser, FaBookmark } from "react-icons/fa";
import { FaHouseChimney } from "react-icons/fa6";
import { GiMeal } from "react-icons/gi";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../firebase";

function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  const handleSignOut = () => {
    auth.signOut();
  };

  return (
    <nav>
      <div className="logo-img">
        <img src={process.env.PUBLIC_URL + "images/logo.png"} alt="logo" />
      </div>

      <div className="icons">
        <NavLink to="/">
          <FaHouseChimney />
          <p>Home</p>
        </NavLink>

        {user ? (
          <NavLink to="/" onClick={handleSignOut}>
            <FaUser />
            <p>Sign Out</p>
          </NavLink>
        ) : (
          <NavLink to="/account">
            <FaUser />
            <p>Sign In</p>
          </NavLink>
        )}

        <NavLink to="/user-area">
          <FaBookmark />
          <p>Add New Recipe</p>
        </NavLink>

        <NavLink to="/meal-planner">
          <GiMeal />
          <p>Meal Planner</p>
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
