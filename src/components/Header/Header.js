import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Link } from "react-router-dom";

import { ReactComponent as Cross } from "../../assets/cross.svg";
import { ReactComponent as Hamburger } from "../../assets/hamburger.svg";

import "./Header.scss";

function Header() {
  return (
    <header>
      <Link to="/">
        <h1 aria-label="SportSee">
          <Logo />
        </h1>
      </Link>
      <nav>
        <input id="nav__checkbox" type="checkbox" />
        <label htmlFor="nav__checkbox">
          <Hamburger className="nav__icon nav__icon--hamburger" />
          <Cross className="nav__icon nav__icon--cross" />
        </label>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="#">Profil</Link>
          </li>
          <li>
            <Link to="#">Réglage</Link>
          </li>
          <li>
            <Link to="#">Communauté</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
