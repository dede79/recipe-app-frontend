import { FaUser } from "react-icons/fa";
import { FaHouseChimney } from "react-icons/fa6";
import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
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

        <NavLink
          to="/usercreateaccount"
          style={({ isActive }) => ({
            color: isActive ? "green" : "black",
          })}
        >
          <FaUser />
          <p>Login</p>
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
