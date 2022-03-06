import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import dataProvider from "../../utils/dataProvider";
import ActivityBarChart from "../../components/ActivityBarChart";
import MiniCard from "../../components/MiniCard";
import { ReactComponent as Energy } from "../../assets/energy.svg";
import { ReactComponent as Chicken } from "../../assets/chicken.svg";
import { ReactComponent as Apple } from "../../assets/apple.svg";
import { ReactComponent as CheeseBurger } from "../../assets/cheeseburger.svg";
import SessionLineChart from "../../components/SessionLineChart";
import PerformanceRadarChart from "../../components/PerformanceRadarChart";

import "./Dashboard.scss";
import ScoreChart from "../../components/ScoreChart";

function Dashboard() {
  const { id } = useParams();
  const [user, setUser] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate();

  const addCommaCalories = (value) => {
    return value ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "";
  };

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
        <div className="miniCardContainer">
          <MiniCard
            icon={<Energy />}
            iconContainerStyle={{ backgroundColor: "#FBEAEA" }}
            title={`${addCommaCalories(user?.keyData?.calorieCount)}Kcal`}
            legend="Calories"
          />
          <MiniCard
            icon={<Chicken />}
            iconContainerStyle={{ backgroundColor: "#E9F4FB" }}
            title={`${user?.keyData?.proteinCount}g`}
            legend="Proteines"
          />
          <MiniCard
            icon={<Apple />}
            iconContainerStyle={{ backgroundColor: "#FAF6E5" }}
            title={`${user?.keyData?.carbohydrateCount}g`}
            legend="Glucides"
          />
          <MiniCard
            icon={<CheeseBurger />}
            iconContainerStyle={{ backgroundColor: "#FBEAEF" }}
            title={`${user?.keyData?.lipidCount}g`}
            legend="Lipides"
          />
        </div>
        <SessionLineChart />
        <PerformanceRadarChart />
        <ScoreChart score={user?.todayScore || user?.score} />
      </section>
    </main>
  );
}

export default Dashboard;
