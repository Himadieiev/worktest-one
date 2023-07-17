import { Link, useLocation } from "react-router-dom";
import css from "./RecipeCard.module.css";

const RecipeCard = ({ recipe, isSelected, onSelectionChange }) => {
  const location = useLocation();

  const handleRightClick = (event) => {
    event.preventDefault();
    onSelectionChange(recipe.id);
  };

  return (
    <li
      className={`${css.container} ${isSelected ? css.selectedCard : ""}`}
      onContextMenu={handleRightClick}
    >
      <Link
        to={`/recipes/${recipe.id}`}
        state={{ from: location, recipe }}
        className={css.link}
      >
        <div>
          <h2 className={css.title}>{recipe.name}</h2>
          <img src={recipe.image_url} alt={recipe.name} className={css.image} />
          <p className={css.tagline}>{recipe.tagline}</p>
          <p className={css.ph}>{recipe.ph}</p>
        </div>
      </Link>
    </li>
  );
};

export default RecipeCard;
