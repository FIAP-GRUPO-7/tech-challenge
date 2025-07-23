export default function SummaryCards() {
  const summaries = [
    { title: "Saldo total", value: "R$ 0,00" },
    { title: "Entradas", value: "R$ 0,00" },
    { title: "Saídas", value: "R$ 0,00" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
      {summaries.map((item, index) => (
        <div
          key={index}
          className="bg-[var(--color-branco)] p-6 rounded-md shadow-md hover:shadow-lg transition-shadow"
        >
          <h3 className="text-sm font-medium text-[var(--color-preto)] mb-2">
            {item.title}
          </h3>
          <p className="text-xl font-semibold text-[var(--color-preto)]">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}
