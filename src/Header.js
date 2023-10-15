import React from "react";
import { Link } from "react-router-dom";
import "./Style.css";
const Header = () => {
  return (
    <nav>
      <ul className="navbar">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about">About</Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
