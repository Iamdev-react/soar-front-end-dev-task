import { PieChart, Pie, Cell, Label } from "recharts";
import { ChartLabelProps } from "../../type/dahboardTypes";

const CustomPieChart = ({ expense = [] }) => {
  const data = expense.map(({ category, percentage, color }) => ({
    name: category,
    value: percentage,
    color,
  }));

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    value,
    index,
  }: ChartLabelProps) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.7;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={14}
        fontWeight="bold"
      >
        {`${value}%`}
        <tspan x={x} dy="18" fontSize={12}>
          {data[index].name}
        </tspan>
      </text>
    );
  };

  return (
    <>
      <h2 className="text-lg font-bold text-gray-900 mb-4">
        Expense Statistics
      </h2>
      <div className="flex flex-col items-center bg-white p-4 rounded-3xl">
        <PieChart width={350} height={350}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={5}
            outerRadius={160}
            paddingAngle={10}
            dataKey="value"
            label={renderCustomizedLabel}
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </div>
    </>
  );
};

export default CustomPieChart;
