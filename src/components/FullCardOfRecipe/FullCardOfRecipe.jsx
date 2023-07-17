import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import css from "./FullCardOfRecipe.module.css";

const FullCardOfRecipe = ({ recipe }) => {
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? "/recipes");

  return (
    <div className={css.container}>
      <Link to={backLink.current} className={css.link}>
        Go back
      </Link>
      <div className={css.contentContainer}>
        <img src={recipe.image_url} alt={recipe.name} className={css.image} />
        <div className={css.information}>
          <h1 className={css.title}>{recipe.name}</h1>
          <p className={css.description}>{recipe.description}</p>
          <h2 className={css.subtitle}>Food pairing</h2>
          <ul className={css.listFoodPairing}>
            {recipe.food_pairing.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
          <p className={css.tagline}>Tagline: {recipe.tagline}</p>
        </div>
      </div>
    </div>
  );
};

export default FullCardOfRecipe;
