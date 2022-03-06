import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import dataProvider from "../../utils/dataProvider";
import { ResponsiveContainer, PolarGrid, PolarAngleAxis, Radar, RadarChart } from "recharts";

import "./PerformanceRadarChart.scss";

const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

function PerformanceRadarChart() {
  const [chartData, setChartData] = useState();
  const [error, setError] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const { data, error } = await dataProvider.getUserPerformance(id);
      setError(error);
      setChartData(data.data.map((performance) => ({ ...performance, kind: data.kind[performance.kind] })));
    })();
  }, [id]);

  useEffect(() => {
    if (error) navigate("/404");
  }, [error, navigate]);

  return (
    <>
      {chartData && (
        <ResponsiveContainer className="performanceRaderChart" width="100%" aspect={1.1}>
          <RadarChart cx="50%" cy="50%" outerRadius="75%" data={chartData}>
            <Radar name="Mike" dataKey="value" stroke="#FF0000" fill="#FF0000" fillOpacity={0.6} />
            <PolarAngleAxis dataKey="kind" tick={{ fill: "#FFFFFF", fontSize: "12px" }} tickFormatter={capitalize} />
            <PolarGrid radialLines={false} />
          </RadarChart>
        </ResponsiveContainer>
      )}
    </>
  );
}

export default PerformanceRadarChart;
