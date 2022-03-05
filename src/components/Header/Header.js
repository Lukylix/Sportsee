import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Link } from "react-router-dom";

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
        <ul>
          <li>
            <Link to="/">Accuiel</Link>
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
