export const fetchRecipes = async (page, limit) => {
  try {
    const response = await fetch(
      `https://api.punkapi.com/v2/beers?page=${page}&per_page=${limit}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchNewRecipes = async (ids) => {
  try {
    const response = await fetch(`https://api.punkapi.com/v2/beers?ids=${ids}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
