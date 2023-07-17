import { useState } from "react";
import { fetchNewRecipes } from "../../services/apiFetchRecipes";
import RecipeCard from "../RecipeCard/RecipeCard";
import css from "./RecipesList.module.css";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";

const RecipesList = ({ recipes, setRecipes }) => {
  const [selectedRecipes, setSelectedRecipes] = useState([]);
  const [page, setPage] = useState(1);
  const [currentId, setCurrentId] = useState(14);

  const handleSelectionChange = (recipeId) => {
    if (selectedRecipes.includes(recipeId)) {
      setSelectedRecipes(selectedRecipes.filter((id) => id !== recipeId));
    } else {
      setSelectedRecipes([...selectedRecipes, recipeId]);
    }
  };

  const handleDeleteSelected = () => {
    const updatedRecipes = recipes.filter(
      (recipe) => !selectedRecipes.includes(recipe.id)
    );
    setRecipes(updatedRecipes);
    setSelectedRecipes([]);

    const deletedRecipesCount = selectedRecipes.length;
    const nextPage = page + deletedRecipesCount;
    const limit = deletedRecipesCount;
    const ids = generateIds(nextPage, limit);

    fetchNewRecipes(ids).then((data) => {
      const newRecipes = [...updatedRecipes, ...data];
      setRecipes(newRecipes);
      setPage(nextPage);
      setCurrentId(currentId + deletedRecipesCount + 1);
    });
  };

  const generateIds = (page, limit) => {
    const startId = currentId + page - 1;
    const ids = Array.from(
      { length: limit },
      (_, index) => startId + index + 1
    );
    return ids.join("|");
  };

  return (
    <div className={css.container}>
      {selectedRecipes.length > 0 && (
        <button className={css.deleteButton} onClick={handleDeleteSelected}>
          Delete selected recipes
        </button>
      )}
      <ul className={css.list}>
        {recipes.map((recipe) => (
          <RecipeCard
            recipe={recipe}
            isSelected={selectedRecipes.includes(recipe.id)}
            onSelectionChange={handleSelectionChange}
            key={recipe.id}
          />
        ))}
      </ul>
      <ScrollToTopButton />
    </div>
  );
};

export default RecipesList;
