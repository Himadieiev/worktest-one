import { NavLink } from "react-router-dom";
import css from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <header className={css.header}>
        <nav className={css.navigation}>
          <NavLink to="/" className={css.link}>
            Home
          </NavLink>
          <NavLink to="/recipes" className={css.link}>
            Recipes
          </NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Header;
