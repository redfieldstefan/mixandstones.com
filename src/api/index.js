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

  createCocktail: (cocktail) => {
    return fetch("/api/create-cocktail", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cocktail)
    })
    .then(parseJSON)
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

  fetchAllCocktails: () => {
    return fetch("/api/cocktails", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then(parseJSON)
  },

  fetchCocktail: (url) => {
    return fetch("/api/find-cocktail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({url})
    })
    .then(parseJSON);
  }

};
