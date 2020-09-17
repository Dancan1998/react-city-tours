import React from "react";
import "./Navbar.scss";
import logo from "../../logo.png";
const Navbar = () => {
  return (
    <nav className="nav-total">
      <img src={logo} alt="logo" />
      <ul className="nav-menu">
        <li>
          <a href="/" className="nav-items">
            Home
          </a>
        </li>
        <li>
          <a href="/" className="nav-items">
            about
          </a>
        </li>
        <li>
          <a href="/" className="nav-items active">
            tours
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
