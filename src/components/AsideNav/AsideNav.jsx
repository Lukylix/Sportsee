import { Link } from "react-router-dom";

import { ReactComponent as Meditation } from "../../assets/meditation.svg";
import { ReactComponent as Swim } from "../../assets/swim.svg";
import { ReactComponent as Bike } from "../../assets/bike.svg";
import { ReactComponent as Dumbbells } from "../../assets/dumbbells.svg";

import "./AsideNav.scss";

function AsideNav() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <Link to="#">
              <Meditation />
            </Link>
          </li>
          <li>
            <Link to="#">
              <Swim />
            </Link>
          </li>
          <li>
            <Link to="#">
              <Bike />
            </Link>
          </li>
          <li>
            <Link to="#">
              <Dumbbells />
            </Link>
          </li>
        </ul>
      </nav>
      <p>Copyright, SportSee 2020</p>
    </aside>
  );
}

export default AsideNav;
