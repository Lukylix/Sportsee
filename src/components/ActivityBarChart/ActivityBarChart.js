import { useState, useEffect } from "react";
import { useParams, useNavigate, createSearchParams } from "react-router-dom";
import dataProvider from "../../utils/dataProvider";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

import "./ActivityBarChart.scss";
import UserActivity from "../../utils/models/UserActivity";
import useViewport from "../../hooks/useViewport";

const formaterTooltip = (value, name) => {
  const unitDic = {
    kilogram: "kg",
    calories: "Kcal",
  };
  return [`${value}${unitDic[name]}`];
};

function ActivityBarChart() {
  const [chartData, setChartData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const { width } = useViewport();

  useEffect(() => {
    let mounted = true;
    (async () => {
      const { data, error } = await dataProvider.getUserActivity(id);
      if (!mounted) return;
      if (error) return navigate({ pathname: "/error", search: `?${createSearchParams({ msg: error })}` });
      const userActivity = new UserActivity(data);
      setChartData(
        userActivity.sessions.map((session) => ({ kilogram: session.kilogram, calories: session.calories }))
      );
    })();
    return () => {
      mounted = false;
    };
  }, [id, navigate]);

  return (
    <div className="activityBarChart">
      <div className="activityBarChart__header">
        <h3>Activité quotidienne</h3>
        <p>
          <span className="dot dot--black"></span>Poids (kg)
          <span className="dot dot--red"></span>Calories brûlées (kCal)
        </p>
      </div>
      <ResponsiveContainer aspect={width >= 550 ? 4 : 2}>
        <BarChart
          width={500}
          height={300}
          data={chartData}
          margin={{
            top: 5,
            right: width >= 1000 ? 25 : 0,
            bottom: 5,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis tickFormatter={(n) => n + 1} axisLine={false} tickLine={false} tickMargin={15} stroke="#9B9EAC" />
          <YAxis
            orientation="right"
            tickCount={3}
            axisLine={false}
            tickLine={false}
            tickMargin={width >= 1000 ? 45 : 10}
            stroke="#9B9EAC"
          />
          <Tooltip
            formatter={formaterTooltip}
            labelStyle={{ display: "none" }}
            contentStyle={{ backgroundColor: "#E60000" }}
            itemStyle={{ color: "white", fontSize: "12px", lineHeight: "24px" }}
          />
          <Bar dataKey="kilogram" fill="#282D30" barSize={7} radius={[3.5, 3.5, 0, 0]} />
          <Bar dataKey="calories" fill="#E60000" barSize={7} radius={[3.5, 3.5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ActivityBarChart;
