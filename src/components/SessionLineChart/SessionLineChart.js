import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import dataProvider from "../../utils/dataProvider";
import { LineChart, Line, ResponsiveContainer, XAxis, Tooltip, YAxis, Rectangle } from "recharts";

import "./SessionLineChart.scss";

const labels = ["L", "M", "M", "J", "V", "S", "D"];

const CustomCursor = ({ className, width, height, points: [{ x }] }) => {
  return (
    <Rectangle className={className} fill="black" fillOpacity={0.1} x={x} y={0} width={width} height={height * 2} />
  );
};

const formaterTooltip = (value) => [`${value} min`];

function SessionLineChart() {
  const [chartData, setChartData] = useState([]);
  const [error, setError] = useState();
  const [dataMax, setDataMax] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setDataMax(chartData.reduce((acc, session) => Math.max(acc, session.sessionLength), 0));
  }, [chartData]);

  useEffect(() => {
    (async () => {
      const { data, error } = await dataProvider.getUserAverageSession(id);
      setError(error);
      setChartData(data.sessions.map((session) => ({ ...session, day: labels[session.day - 1] })));
    })();
  }, [id]);

  useEffect(() => {
    if (error) navigate("/404");
  }, [error, navigate]);

  return (
    <div className="sessionLineChart">
      <div className="sessionLineChart__header">
        <h3>Durée moyenne des sessions</h3>
      </div>
      <ResponsiveContainer width="100%" aspect={1.1}>
        <LineChart width={300} height={100} data={chartData}>
          <XAxis
            dataKey="day"
            stroke="white"
            tickLine={false}
            axisLine={false}
            padding={{ left: 15, right: 15 }}
            allowDataOverflow={true}
          />
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
          <Line type="natural" dataKey="sessionLength" stroke="white" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SessionLineChart;
