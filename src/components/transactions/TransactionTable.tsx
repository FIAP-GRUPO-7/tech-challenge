"use client";

import React, { useState, useEffect } from "react";

interface Transaction {
    id: number;
    date: string;
    type: string;
    amount: number;
}

const mockData: Transaction[] = [
    { id: 1, date: "2025-07-01", type: "Depósito", amount: 1000.0 },
    { id: 2, date: "2025-07-05", type: "Saque", amount: 641.0 },
    { id: 3, date: "2025-07-10", type: "Transferência", amount: -262.0 },
];

export default function TransactionTable() {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("Todos");
    const [page, setPage] = useState(1);
    const itemsPerPage = 5;

    useEffect(() => {
        let filtered = mockData;

        if (filter !== "Todos") {
            filtered = filtered.filter((t) => t.type === filter);
        }

        if (search) {
            filtered = filtered.filter((t) =>
                t.type.toLowerCase().includes(search.toLowerCase())
            );
        }

        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        setTransactions(filtered.slice(start, end));
    }, [search, filter, page]);

    return (
        <div className="w-full bg-[var(--color-branco)] p-6 rounded-md shadow-md">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <h2 className="text-lg font-semibold text-[var(--color-preto)]">
                    Transações
                </h2>

                <a
                    href="/transacoes/add"
                    className="mt-4 md:mt-0 inline-block bg-[var(--color-azul-escuro)] text-[var(--color-branco)] px-4 py-2 rounded hover:bg-[var(--color-azul-claro)] transition"
                >
                    + Nova Transação
                </a>
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                <input
                    type="text"
                    placeholder="Buscar por tipo..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border border-gray-300 rounded px-3 py-2 w-full md:w-1/3"
                />

                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="border border-gray-300 rounded px-3 py-2 w-full md:w-1/4"
                >
                    <option>Todos</option>
                    <option>Depósito</option>
                    <option>Saque</option>
                    <option>Transferência</option>
                </select>
            </div>

            <div className="overflow-x-auto rounded-lg">
                <table className="min-w-full text-left text-sm">
                    <thead className="border-b font-medium bg-[var(--color-azul-claro)] text-[var(--color-branco)]">
                        <tr>
                            <th className="px-4 py-2">Data</th>
                            <th className="px-4 py-2">Tipo</th>
                            <th className="px-4 py-2">Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((t) => (
                            <tr key={t.id} className="border-b hover:bg-[var(--color-cinza-claro)]">
                                <td className="px-4 py-2">{t.date}</td>
                                <td className="px-4 py-2">{t.type}</td>
                                <td
                                    className={`px-4 py-2 ${t.amount >= 0
                                        ? "text-[var(--color-sucesso)]"
                                        : "text-[var(--color-erro)]"
                                        }`}
                                >
                                    {t.amount >= 0
                                        ? `+ R$ ${t.amount.toFixed(2)}`
                                        : `- R$ ${Math.abs(t.amount).toFixed(2)}`}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="flex justify-between mt-4">
                <button
                    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                    disabled={page === 1}
                    className="bg-gray-200 px-3 py-1 rounded disabled:opacity-50"
                >
                    Anterior
                </button>

                <span>Página {page}</span>

                <button
                    onClick={() => setPage((prev) => prev + 1)}
                    disabled={transactions.length < itemsPerPage}
                    className="bg-gray-200 px-3 py-1 rounded disabled:opacity-50"
                >
                    Próxima
                </button>
            </div>
        </div>
    );
}
