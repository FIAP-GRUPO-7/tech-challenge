export default function SummaryCards() {
  const summaries = [
    { title: "Saldo total", value: "R$00" },
    { title: "Entradas", value: "R$00" },
    { title: "Saídas", value: "R$00" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {summaries.map((item, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-700 text-sm">{item.title}</h3>
          <p className="text-xl font-semibold">{item.value}</p>
        </div>
      ))}
    </div>
  );
}
