"use client";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function ExpensesChart() {
  const data = [
    { month: "Jul", value: 400 },
    { month: "Ago", value: 800 },
    { month: "Set", value: 600 },
    { month: "Out", value: 900 },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow w-full h-64">
      <h3 className="text-gray-600 text-sm mb-4">Evolução de gastos</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#1D4ED8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

