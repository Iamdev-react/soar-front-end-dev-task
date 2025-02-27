import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ScriptableContext,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { BalanceHistoryChartProps } from "../../type/dahboardTypes";
import { balanceHistoryChartOptions } from "../../constant/dashboardActivity";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const BalanceHistoryChart: React.FC<BalanceHistoryChartProps> = ({
  balanceHistory,
}) => {
  const labels = balanceHistory.map((entry) => entry.month);
  const balanceData = balanceHistory.map((entry) => entry.balance);

  const createGradient = (ctx: CanvasRenderingContext2D, chartArea: any) => {
    if (!chartArea) return "rgba(0, 0, 255, 0.3)";

    const gradient = ctx.createLinearGradient(
      0,
      chartArea.top,
      0,
      chartArea.bottom
    );
    gradient.addColorStop(0, "rgba(0, 0, 255, 0.5)");
    gradient.addColorStop(1, "rgba(0, 0, 255, 0)");
    return gradient;
  };

  const data: ChartData<"line", number[], string> = {
    labels,
    datasets: [
      {
        label: "Balance",
        data: balanceData,
        borderColor: "#0000FF",
        backgroundColor: (context: ScriptableContext<"line">) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          return createGradient(ctx, chartArea);
        },
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 2.5,
      },
    ],
  };

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-700 mb-4">
        Balance History
      </h2>
      <div className="bg-white rounded-3xl md:shadow p-4">
        <div className="w-full md:h-[220px]">
          <Line data={data} options={balanceHistoryChartOptions} />
        </div>
      </div>
    </div>
  );
};

export default BalanceHistoryChart;
