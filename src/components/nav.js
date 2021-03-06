import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="Nav">
      <Link className="navHeadline" to="/">
        Mix and Stones
      </Link>
      <ul className="navLinks">
        <li className="navLink">
          <Link to="/ingredients">Ingredients</Link>
        </li>
        <li className="navLink">
          <Link to="/cocktails">Cocktails</Link>
        </li>
        <li className="navLink">
          <Link to="/create-cocktail">Create Cocktail</Link>
        </li>
        <li className="navLink">
          <Link to="/add-ingredients">Add Ingredient</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
