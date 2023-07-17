import { useLocation } from "react-router-dom";
import FullCardOfRecipe from "../components/FullCardOfRecipe/FullCardOfRecipe";

const SingleRecipePage = () => {
  const location = useLocation();
  const recipe = location.state?.recipe;

  return <FullCardOfRecipe recipe={recipe} />;
};

export default SingleRecipePage;
