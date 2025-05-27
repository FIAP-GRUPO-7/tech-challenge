'use client'

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from 'recharts'

// Dados
const data = [
  { name: 'Fundos de investimento', value: 30, color: '#6366F1' },
  { name: 'Tesouro Direto', value: 25, color: '#3B82F6' },
  { name: 'Previdência Privada', value: 20, color: '#EC4899' },
  { name: 'Bolsa de Valores', value: 25, color: '#F97316' },
]

const chartData = data.filter(item => item.name !== 'Bolsa de Valores')

export default function InvestmentChart() {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-lg text-preto">Estatísticas</h3>
      <div className="bg-blue-900 p-4 rounded-xl">
        <div className="md:flex md:items-center md:justify-center md:gap-4">         
          <div className="flex justify-center md:block">
            <div className="w-48 h-48 md:w-[300px] md:h-[180px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={0}
                    dataKey="value"
                    strokeWidth={0}
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="mt-4 md:mt-0 md:ml-4">
            <ul className="list-none text-white text-sm space-y-1 text-left mx-auto md:mx-0">
              {data.map((entry, index) => (
                <li
                  key={`legend-${index}`}
                  className="flex items-center gap-2 justify-start"
                >
                  <span
                    className="w-3 h-3 rounded-full inline-block"
                    style={{ backgroundColor: entry.color }}
                  />
                  <span>{entry.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
