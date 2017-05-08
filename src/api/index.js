export default {
  addIngredient: (ingredient) => {
    return fetch("/api/create-ingredient", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(ingredient)
    })
  },
  fetchAllIngredients: (ingredient) => {
    const parseJSON = (response) => {
      return response.json()
    }
    return fetch("/api/ingredients", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(parseJSON);
  }
};
