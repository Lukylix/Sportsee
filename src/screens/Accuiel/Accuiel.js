import { Link } from "react-router-dom";

import "./Accuiel.scss";

function Accuiel() {
  return (
    <main id="accuielMain">
      <Link className="btn" to="/dashboard/12">
        Dashboard Karl
      </Link>
      <Link className="btn" to="/dashboard/18">
        Dashboard Cecilia
      </Link>
    </main>
  );
}

export default Accuiel;
