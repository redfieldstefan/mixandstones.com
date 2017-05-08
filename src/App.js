import React from 'react';
import 'whatwg-fetch';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { Home, Ingredients, AddIngredients } from "./pages/index";
import { Nav } from "./components";

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Route exact path='/' component={Home} />
        <Route path='/ingredients' component={Ingredients} />
        <Route path='/add-ingredients' component={AddIngredients} />
      </div>
    </Router>
  )
};

export default App;
