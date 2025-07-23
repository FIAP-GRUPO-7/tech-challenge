"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function ExpensesChart() {
  const data = [
    { month: "Jul", value: 400 },
    { month: "Ago", value: 800 },
    { month: "Set", value: 600 },
    { month: "Out", value: 900 },
  ];

  return (
    <div className="bg-[var(--color-branco)] p-8 rounded-md shadow-md w-full h-70">
      <h3 className="text-lg font-semibold text-[var(--color-preto)]-800 mb-4">
        Evolução de Gastos
      </h3>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-[var(--color-branco)]-200" />
          <XAxis dataKey="month" stroke="var(--color-preto)" />
          <YAxis stroke="var(--color-preto)" />
          <Tooltip
            contentStyle={{ backgroundColor: "var(--color-branco)", borderRadius: "0.5rem" }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="var(--color-azul-escuro)"
            strokeWidth={2}
            dot={{ r: 4, fill: "var(--color-azul-escuro)" }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

