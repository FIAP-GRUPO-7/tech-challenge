"use client";

export default function BillsToPay() {
  const bills = [
    { name: "Aluguel", dueDate: "05/08", amount: 1200 },
    { name: "Internet", dueDate: "10/08", amount: 100 },
    { name: "Energia", dueDate: "12/08", amount: 180 },
  ];

  return (
    <div className="bg-[var(--color-branco)] p-6 rounded-md shadow-md w-full">
      <h3 className="text-[var(--color-preto)] text-lg font-semibold mb-4">
        Contas a Pagar
      </h3>

      <ul className="space-y-4">
        {bills.map((bill, index) => (
          <li
            key={index}
            className="flex items-center justify-between border-b border-[var(--color-azul-claro)] pb-2 last:border-none"
          >
            <div>
              <p className="text-[var(--color-preto)] font-medium text-base">
                {bill.name}
              </p>
              <p className="text-sm text-gray-500">Vence em {bill.dueDate}</p>
            </div>

            <span className="text-[var(--color-erro)] font-semibold text-base">
              R$ {bill.amount.toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
