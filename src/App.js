import React from "react";
import "whatwg-fetch";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"
import { CocktailsIndex, Home, Ingredients, AddIngredients, CreateCocktail } from "./pages/index";
import { Nav } from "./components";

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Route exact path='/' component={CreateCocktail} />
        <Route path='/ingredients' component={Ingredients} />
        <Route path='/cocktails' component={CocktailsIndex} />
        <Route path='/add-ingredients' component={AddIngredients} />
        <Route path='/create-cocktail' component={CreateCocktail} />
      </div>
    </Router>
  )
};

export default App;
