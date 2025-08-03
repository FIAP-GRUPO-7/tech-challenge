"use client";

export default function TransactionsList() {
  const transactions = [
    { month: "Jun", type: "Depósito", amount: 1000.0 },
    { month: "Jun", type: "Compras", amount: 641.0 },
    { month: "Jun", type: "Assinatura", amount: -262.0 },
  ];

  return (
    <div className="bg-[var(--color-branco)] p-6 rounded-md shadow-md w-full">
      <h3 className="text-[var(--color-preto)] text-lg font-semibold mb-4">
        Transações Recentes
      </h3>

      <ul className="space-y-3">
        {transactions.map((t, index) => (
          <li
            key={index}
            className="flex justify-between items-center border-b border-[var(--color-azul-claro)] pb-2 last:border-none"
          >
            <div className="flex flex-col">
              <span className="text-sm font-medium text-[var(--color-preto)]">
                {t.type}
              </span>
              <span className="text-xs text-gray-500">{t.month}</span>
            </div>

            <span
              className={`text-sm font-semibold ${t.amount < 0
                  ? "text-[var(--color-erro)]"
                  : "text-[var(--color-sucesso)]"
                }`}
            >
              {t.amount < 0
                ? `-R$ ${Math.abs(t.amount).toFixed(2)}`
                : `+R$ ${t.amount.toFixed(2)}`}
            </span>
          </li>
        ))}
      </ul>
      <a
        href="/transacoes"
        className="text-[var(--color-azul-escuro)] text-sm font-medium hover:underline"
      >
        Ver todas as transações
      </a>

    </div>

  );
}
