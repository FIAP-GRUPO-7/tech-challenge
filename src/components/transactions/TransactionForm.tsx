"use client";

import React, { useState } from "react";

export default function TransactionForm() {
    const [type, setType] = useState("");
    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [file, setFile] = useState<File | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!type || !value || !date) {
            alert("Preencha todos os campos obrigatórios.");
            return;
        }

        console.log({
            type,
            value,
            description,
            date,
            file,
        });

        alert("Transação salva com sucesso!");
    };

    return (
        <div className="w-full bg-[var(--color-branco)] p-6 rounded-md shadow-md">
            <h2 className="text-xl font-semibold text-[var(--color-preto)] mb-6 text-center">
                Adicionar Transação
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="border border-gray-300 px-4 py-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-[var(--color-azul-escuro)]"
                    required
                >
                    <option value="">Selecione o tipo</option>
                    <option value="deposito">Depósito</option>
                    <option value="transferencia">Transferência</option>
                    <option value="pagamento">Pagamento</option>
                </select>

                <input
                    type="number"
                    placeholder="Valor"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="border border-gray-300 px-4 py-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-[var(--color-azul-escuro)]"
                    required
                />

                <input
                    type="text"
                    placeholder="Descrição"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="border border-gray-300 px-4 py-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-[var(--color-azul-escuro)]"
                />

                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="border border-gray-300 px-4 py-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-[var(--color-azul-escuro)]"
                    required
                />

                <div>
                    <label className="block mb-1 text-sm text-[var(--color-preto)]">Anexo</label>
                    <input
                        type="file"
                        onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
                        className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-azul-escuro)]"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-[var(--color-azul-escuro)] text-[var(--color-branco)] px-6 py-3 rounded w-full hover:bg-[var(--color-azul-claro)] transition font-semibold"
                >
                    Salvar Transação
                </button>
            </form>
        </div>
    );
}
