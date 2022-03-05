import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import dataProvider from "../../utils/dataProvider";
import ActivityBarChart from "../../components/ActivityBarChart";

import "./Dashboard.scss";

function Dashboard() {
  const { id } = useParams();
  const [user, setUser] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const { data, error } = await dataProvider.getUser(id);
      setUser(data);
      setError(error);
    })();
  }, [id]);

  useEffect(() => {
    if (error) navigate("/404");
  }, [error, navigate]);

  return (
    <main>
      <header>
        <h2>
          Bonjour <span className="red">{user?.userInfos?.firstName}</span>
        </h2>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </header>
      <section id="infos" aria-label="Graphiques et infos">
        <ActivityBarChart />
      </section>
    </main>
  );
}

export default Dashboard;
