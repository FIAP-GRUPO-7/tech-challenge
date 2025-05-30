"use client";
import { useState } from "react";
import { Button } from "@/components/_button";
import { IoMdArrowDropdown } from "react-icons/io";
import { useTransactionContext } from "@/app/context/TransactionContext";

export default function TransactionForm() {
  const [type, setType] = useState("");
  const [value, setValue] = useState("");
  const { addTransaction, transactions } = useTransactionContext();

  const saldo = transactions.reduce((acc, item) => {
    return item.type === "Depósito" ? acc + item.value : acc - item.value;
  }, 0);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!type || !value) {
      alert("Preencha todos os campos.");
      return;
    }

    const valorNumerico = parseFloat(value.replace(",", "."));

    if (isNaN(valorNumerico) || valorNumerico <= 0) {
      alert("Digite um valor válido.");
      return;
    }

    const isSaida = type === "Saque" || type === "Transferência";

    if (isSaida && valorNumerico > saldo) {
      alert("Saldo insuficiente para realizar a transação.");
      return;
    }

    const transaction = {
      id: crypto.randomUUID(),
      type,
      value: valorNumerico,
      date: new Date().toLocaleDateString("pt-BR"),
    };

    addTransaction(transaction);
    setType("");
    setValue("");
  }

  return (
    <div className="flex-1 bg-cinza-escuro rounded-md p-6 flex flex-col gap-8">
      <h2 className="text-2xl font-bold">Nova Transação</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-8">
          <div className="relative max-w-[355px]">
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="appearance-none bg-white w-full h-[48px] rounded-md border-2 border-azul-claro px-4 text-text-field"
            >
              <option value="">Selecione o tipo de transação</option>
              <option>Depósito</option>
              <option>Saque</option>
              <option>Transferência</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
              <IoMdArrowDropdown size={20} className="fill-azul-escuro" />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <label htmlFor="value" className="font-bold">
              Valor
            </label>
            <input
              id="value"
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="bg-white w-full max-w-[250px] h-[48px] rounded-md border-2 border-azul-claro px-4 text-center text-text-field"
              placeholder="00,00"
            />
          </div>

          <Button className="w-full max-w-[250px] h-[48px]" hasIcon type="submit">
            Concluir transação
          </Button>
        </div>
      </form>
    </div>
  );
}
