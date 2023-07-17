import { useEffect } from "react";
import { useState } from "react";
import { fetchRecipes } from "../services/apiFetchRecipes";
import RecipesList from "../components/RecipesList/RecipesList";

const RecipesPage = () => {
  const [recipes, setRecipes] = useState([]);
  const page = 1;
  const limit = 15;

  useEffect(() => {
    fetchRecipes(page, limit).then((data) => setRecipes(data));
  }, [page, limit]);

  return <RecipesList recipes={recipes} setRecipes={setRecipes} />;
};

export default RecipesPage;
