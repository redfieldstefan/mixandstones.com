import React from "react";
import "whatwg-fetch";
import createBrowserHistory from 'history/createBrowserHistory';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"
import {
  AddIngredients,
  CocktailsIndex,
  CocktailPage,
  CreateCocktail,
  Ingredients
} from "./pages/index";
import { Nav } from "./components";

const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <div>
        <Nav />
        <Route exact path='/' component={CreateCocktail} />
        <Route path='/ingredients' component={Ingredients} />
        <Route path='/cocktails' component={CocktailsIndex} />
        <Route path='/add-ingredients' component={AddIngredients} />
        <Route path='/create-cocktail' component={CreateCocktail} />
        <Route path='/cocktail/:cocktail' component={CocktailPage} />
      </div>
    </Router>
  )
};

export default App;
