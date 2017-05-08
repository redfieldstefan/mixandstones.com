import React from "react";
import { Link } from "react-router-dom";
import '../styles/nav.css';

const Nav = () => {
  return (
    <div className="Nav">
      <h2 className="navHeadline">Mix and Stones</h2>
      <ul className="navLinks">
        <li className="navLink">
          <Link to="/">Home</Link>
        </li>
        <li className="navLink">
          <Link to="/ingredients">Ingredients</Link>
        </li>
        <li className="navLink">
          <Link to="/add-ingredients">Add Ingredient</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
