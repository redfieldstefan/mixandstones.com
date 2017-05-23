const parseJSON = (response) => {
  return response.json()
};

export default {
  addIngredient: (ingredient) => {
    return fetch("/api/create-ingredient", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(ingredient)
    })
  },

  fetchAllIngredients: (ingredient) => {
    return fetch("/api/ingredients", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(parseJSON);
  },

  calculateCocktails: (ingredients) => {
    return fetch("/api/calculate-cocktails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: ingredients
    })
    .then(parseJSON)
  },

  createCocktail: (cocktail) => {
    return fetch("/api/create-cocktail", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cocktail)
    })
    .then(parseJSON)
  }
};
