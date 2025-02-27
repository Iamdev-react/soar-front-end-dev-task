import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale,BarElement,Title,Tooltip, Legend} from "chart.js";
import { Bar } from "react-chartjs-2";
import { WeeklyActivityChartProps } from "../../type/dahboardTypes";
import { weeklyActivityChartOptions } from "../../constant/dashboardActivity";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const WeeklyActivityChart: React.FC<WeeklyActivityChartProps> = ({
  weeklyActivity,
}) => {
  const labels = weeklyActivity.map((item) => item.day);
  const depositData = weeklyActivity.map((item) => item.deposit);
  const withdrawData = weeklyActivity.map((item) => item.withdraw);

  const data = {
    labels,
    datasets: [
      {
        label: "Withdraw",
        data: withdrawData,
        backgroundColor: "#000000",
        barThickness: 15,
        borderRadius: 10,
        categoryPercentage: 0.6,
        barPercentage: 0.4,
      },
      {
        label: "",
        data: new Array(weeklyActivity.length).fill(0),
        backgroundColor: "transparent",
        barThickness: 2,
      },
      {
        label: "Deposit",
        data: depositData,
        backgroundColor: "#3B82F6",
        barThickness: 15,
        categoryPercentage: 0.6,
        borderRadius: 10,
        barPercentage: 0.4,
      },
    ],
  };

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-700 mb-4">
        Weekly Activity
      </h2>
      <div className="bg-white rounded-3xl md:shadow p-4">
        <div className="md:w-full h-[350px]">
          <Bar data={data} options={weeklyActivityChartOptions} />
        </div>
      </div>
    </div>
  );
};

export default WeeklyActivityChart;
