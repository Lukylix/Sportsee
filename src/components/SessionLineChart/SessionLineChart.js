import { useState, useEffect } from "react";
import { useParams, useNavigate, createSearchParams } from "react-router-dom";
import dataProvider from "../../utils/dataProvider";
import { LineChart, Line, ResponsiveContainer, XAxis, Tooltip, YAxis, Rectangle } from "recharts";

import "./SessionLineChart.scss";
import UserAverageSession from "../../utils/models/UserAverageSession";

const labels = ["L", "M", "M", "J", "V", "S", "D"];

const CustomCursor = ({ className, width, height, points: [{ x }] }) => {
  return (
    <Rectangle
      className={className}
      fill="black"
      fillOpacity={0.1}
      x={x}
      //Starting from top
      y={0}
      //RectSurfaceWidth - SelectedDotX + XAxisPadding
      width={width - x + 15}
      //RectSurfaceHeight + XAxisMaxHeightEstimate
      height={height + 50}
    />
  );
};

const formaterTooltip = (value) => [`${value} min`];

function SessionLineChart() {
  const [chartData, setChartData] = useState([]);
  const [dataMax, setDataMax] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setDataMax(chartData.reduce((acc, session) => Math.max(acc, session.sessionLength), 0));
  }, [chartData]);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const { data, error } = await dataProvider.getUserAverageSession(id);
      if (!mounted) return;
      if (error) return navigate({ pathname: "/error", search: `?${createSearchParams({ msg: error })}` });
      const userAverageSession = new UserAverageSession(data);
      setChartData(userAverageSession.sessions.map((session) => ({ ...session, day: labels[session.day - 1] })));
    })();
    return () => {
      mounted = false;
    };
  }, [id, navigate]);

  return (
    <div className="sessionLineChart">
      <div className="sessionLineChart__header">
        <h3>Durée moyenne des sessions</h3>
      </div>
      <ResponsiveContainer aspect={1.1}>
        <LineChart data={chartData}>
          <XAxis dataKey="day" stroke="white" tickLine={false} axisLine={false} padding={{ left: 15, right: 15 }} />
          <YAxis
            tickLine={false}
            axisLine={false}
            tick={false}
            width={0}
            // dataMax + small offset for the curve * 1.5 to get 1/3 of free space
            domain={["dataMin-10", (dataMax + 5) * 1.5]}
          />
          <Tooltip
            formatter={formaterTooltip}
            cursor={<CustomCursor />}
            labelStyle={{ display: "none" }}
            itemStyle={{ color: "black", fontSize: "12px" }}
          />
          <Line type="natural" dataKey="sessionLength" stroke="white" strokeWidth={2} dot={false} connectNulls={true} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SessionLineChart;
