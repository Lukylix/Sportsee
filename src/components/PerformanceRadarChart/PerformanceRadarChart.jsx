import { useState, useEffect } from "react";
import { useParams, useNavigate, createSearchParams } from "react-router-dom";
import dataProvider from "../../utils/dataProvider";
import { ResponsiveContainer, PolarGrid, PolarAngleAxis, Radar, RadarChart } from "recharts";
import UserPerformance from "../../utils/models/UserPerformance";

import "./PerformanceRadarChart.scss";

/**
 * Transalate a kind property into French
 * @param {string} kind
 * @return {string}
 */
const translateKind = (kind) => {
  const dicKind = {
    cardio: "Cardio",
    energy: "Energie",
    endurance: "Endurance",
    strength: "Force",
    speed: "Vitesse",
    intensity: "Intensité",
  };
  return dicKind[kind];
};

/**
 * User performance radar chart component.
 * Performance are displayed per kind.
 * @type {React.FC}
 * @return {React.ReactElement}
 */
function PerformanceRadarChart() {
  const [chartData, setChartData] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    let mounted = true;
    (async () => {
      const { data, error } = await dataProvider.getUserPerformance(id);
      if (!mounted) return;
      if (error) return navigate({ pathname: "/error", search: `?${createSearchParams({ msg: error })}` });
      const userPerformance = new UserPerformance(data);
      setChartData(userPerformance.data.map((performance) => ({ ...performance, kind: data.kind[performance.kind] })));
    })();
    return () => {
      mounted = false;
    };
  }, [id, navigate]);

  return (
    <>
      {chartData && (
        <ResponsiveContainer className="performanceRadarChart" aspect={1.1}>
          <RadarChart cx="50%" cy="50%" margin={{ right: 50, left: 50 }} data={chartData}>
            <Radar name="Mike" dataKey="value" stroke="#FF0000" fill="#FF0000" fillOpacity={0.6} />
            <PolarAngleAxis dataKey="kind" tick={{ fill: "#FFFFFF", fontSize: "12px" }} tickFormatter={translateKind} />
            <PolarGrid radialLines={false} />
          </RadarChart>
        </ResponsiveContainer>
      )}
    </>
  );
}

export default PerformanceRadarChart;
