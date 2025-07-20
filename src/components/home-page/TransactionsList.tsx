"use client";

export default function TransactionsList() {
  const transactions = [
    { month: "Jun", type: "Depósito", amount: 16500 },
    { month: "Jun", type: "Compras", amount: 641.00 },
    { month: "Jun", type: "Assinatura", amount: -262.00 },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow w-full">
      <h3 className="text-gray-600 text-sm mb-4">Transações recentes</h3>
      <ul>
        {transactions.map((t, index) => (
          <li key={index} className="flex justify-between text-sm py-1 border-b last:border-none">
            <span>{t.month}</span>
            <span>{t.type}</span>
            <span className={t.amount < 0 ? "text-red-500" : "text-green-600"}>
              {t.amount < 0 ? `-R$ ${Math.abs(t.amount).toFixed(2)}` : `+R$ ${t.amount.toFixed(2)}`}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
