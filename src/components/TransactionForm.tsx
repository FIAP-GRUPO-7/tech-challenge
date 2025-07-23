"use client";

import { useState } from "react";
import { Button } from "@/components/_button";
import { IoMdArrowDropdown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "@/store";
import { selectBalance, addTransaction } from "@/features/transactions";
import { Tooltip } from "react-tooltip";

export default function TransactionForm() {
  const [type, setType] = useState("");
  const [value, setValue] = useState("");
  const [errors, setErrors] = useState({
    type: "",
    value: "",
  });
  const transactionTypes = useSelector(
    (state: AppState) => state.transactionsTypes.types
  );
  const dispatch = useDispatch();

  const balance = useSelector(selectBalance);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!type || !value) {
      const newErrors = {
        type: !type ? "Tipo de transação é obrigatório." : "",
        value: !value ? "Valor é obrigatório." : "",
      };
      setErrors(newErrors);
      return;
    }

    const valorNumerico = parseFloat(value.replace(",", "."));

    if (isNaN(valorNumerico) || valorNumerico <= 0) {
      const newErrors = {
        type: "",
        value: "Digite um valor válido.",
      };
      setErrors(newErrors);
      return;
    }

    const newErrors = {
        type: "",
        value: "",
    };
    setErrors(newErrors);

    const isSaida = type === "Saque" || type === "Transferência";

    if (isSaida && valorNumerico > balance) {
      alert("Saldo insuficiente para realizar a transação.");
      return;
    }

    const transaction = {
      id: crypto.randomUUID(),
      type,
      value: valorNumerico,
      date: new Date().toLocaleDateString("pt-BR"),
    };

    dispatch(addTransaction(transaction));
    setType("");
    setValue("");
  }

  return (
    <section className="flex-1 bg-cinza-escuro rounded-md p-6 flex flex-col gap-8">
      <h2 className="text-2xl font-bold">Nova Transação</h2>
      <form onSubmit={handleSubmit}>
        <fieldset className="flex flex-col gap-8">
          <legend className="sr-only">Formulário de transações</legend>

          <div className="flex flex-col gap-2 max-w-[355px]">
            <label htmlFor="transaction-type" className="font-bold">
              Tipo de transação
            </label>
            <div className="relative">
              <select
                id="transaction-type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                className={`appearance-none mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:border focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white ${
                  errors.type ? "border-erro" : "border-cinza-claro"
                }`}
                aria-required="true"
              >
                <option value="">Selecione o tipo de transação</option>
                {transactionTypes.map((transactionType) => (
                  <option key={transactionType} value={transactionType}>
                    {transactionType}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <IoMdArrowDropdown size={20} className="fill-azul-escuro" />
              </div>
            </div>
            {errors.type && (
                <p className="text-erro text-xs mt-1">{errors.type}</p>
            )}
          </div>

          <div className="flex flex-col gap-2 max-w-[250px]">
            <label htmlFor="value" className="font-bold">
              Valor
            </label>
            <input
              id="value"
              type="text"
              inputMode="decimal"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className={`mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white ${
                errors.value ? "border-erro" : "border-cinza-claro"}`}
              placeholder="Digite o valor"
              aria-required="true"
            />
            {errors.value && (
                <p className="text-erro text-xs mt-1">{errors.value}</p>
            )}
          </div>

          <Button
            className="w-full max-w-[250px] h-[48px]"
            hasIcon
            type="submit"
            aria-label="Clique para concluir a transação"
            data-tooltip-id="button"
            data-tooltip-content="Clique para concluir a transação"
            data-tooltip-place="top"
          >
            Concluir transação
          </Button>
          <Tooltip id="button" />
        </fieldset>
      </form>
    </section>
  );
}
