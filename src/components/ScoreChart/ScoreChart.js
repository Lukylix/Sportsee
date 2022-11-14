import { ResponsiveContainer, PolarAngleAxis, RadialBar, RadialBarChart } from "recharts";
import PropTypes from "prop-types";

import "./ScoreChart.scss";

function ScoreChart({ score }) {
  const chartData = [{ score: score * 100, fill: "#FF0000" }];
  return (
    <div className="scoreChart">
      <h3>Score</h3>
      <ResponsiveContainer aspect={1.1}>
        <RadialBarChart
          cx="50%"
          cy="50%"
          data={chartData}
          innerRadius="70%"
          startAngle={90}
          endAngle={450}
          barSize={10}
          background={{ fill: "white" }}
        >
          <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
          <RadialBar dataKey="score" cornerRadius={10} />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="scoreChart__circle">
        <p>
          <span>{score * 100}%</span>
          <br />
          de votre <br />
          objectif
        </p>
      </div>
    </div>
  );
}

ScoreChart.propTypes = {
  score: PropTypes.number,
};

export default ScoreChart;
