import { ChartOptions } from "chart.js";

export const weeklyActivityChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: "top" as const,
      labels: {
        boxWidth: 10,
        boxHeight: 10,
        color: "#6B7280",
        font: {
          size: 13,
        },
        usePointStyle: true,
        pointStyle: "circle",
      },
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: { display: false },
      barPercentage: 0.7,
      categoryPercentage: 0.6,
      ticks: {
        color: "#6B7280",
        font: { size: 13 },
      },
    },
    y: {
      grid: {
        borderDash: [3, 3],
        color: "#E5E7EB",
      },
      ticks: {
        color: "#6B7280",
        font: { size: 13 },
        stepSize: 100,
      },
      beginAtZero: true,
    },
  },
};

export const balanceHistoryChartOptions: ChartOptions<"line"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: "#6B7280",
        font: {
          size: 12,
        },
      },
    },
    y: {
      grid: {
        color: "rgba(0, 0, 0, 0.1)",
      },
      ticks: {
        color: "#6B7280",
        font: {
          size: 12,
        },
        stepSize: 200,
      },
    },
  },
};
