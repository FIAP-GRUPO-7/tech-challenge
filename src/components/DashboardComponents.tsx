"use client";
import { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { HiPencil } from "react-icons/hi";
import { IoTrashOutline } from "react-icons/io5";
import { RoundedButton } from "@/components/_RoundedButton";
import { formatToBRL } from "@/helpers/format";
import { useDispatch, useSelector } from "react-redux";
import {
  editTransaction,
  deleteTransaction,
  selectBalance,
  selectTransactions,
} from "@/features/transactions";
import { selectUser } from "@/features/auth";
import { Tooltip } from "react-tooltip";

export function GreetingCard({
  children,
  show,
}: {
  children?: React.ReactNode;
  show?: boolean;
}) {
  const [date, setDate] = useState<string | null>(null);
  const [visibled, setVisibled] = useState<boolean>(false);
  const balance = useSelector(selectBalance);
  const user = useSelector(selectUser);

  useEffect(() => {
    const today = new Date();
    const formatted = today.toLocaleDateString("pt-BR", {
      weekday: "long",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    setDate(formatted);
  }, []);

  if (show === false) {
    return null;
  }

  return (
    <div className="w-full bg-azul-escuro rounded-md p-6 flex gap-4 flex-col sm:flex-row sm:h-[406px]">
      {user && (
        <div className="flex flex-col gap-6 flex-1">
          <h2 className="text-2xl text-white">Olá, {user?.name || ""}! :)</h2>
          {date && (
            <p className="text-white" suppressHydrationWarning>
              {date}
            </p>
          )}
        </div>
      )}
      {user && (
        <div className="flex-1 flex sm:justify-center sm:relative">
          <div className="w-[180px] sm:absolute sm:top-[75px]">
            <div className="border-white border-b-2 py-4">
              <h3 className="text-xl text-white flex items-center gap-6">
                <span>Saldo</span>
                <button onClick={() => setVisibled((prev) => !prev)}
                  data-tooltip-id="button"
                  aria-label={`Clique para ${visibled ? "ocultar saldo" : "mostrar saldo"}`} 
                  data-tooltip-content={`Clique para ${visibled ? "ocultar saldo" : "mostrar saldo"}`}                  data-tooltip-place="bottom">
                  {visibled ? <FaEyeSlash /> : <FaEye />}
                </button>
              </h3>
            </div>
            <div className="border-white py-4 flex flex-col gap-2">
              <span className="text-lg text-white">Conta Corrente</span>
              <h2 className="text-3xl text-white">
                {visibled ? formatToBRL(balance) : "*******"}
              </h2>
            </div>
          </div>
        </div>
      )}
      <div className="gap-8">{children}</div>
      <Tooltip id="button" />
    </div>
  );
}

interface ExtractListProps {
  show: boolean;
}

export function ExtractList({ show }: ExtractListProps) {
  const transactions = useSelector(selectTransactions);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const dispatch = useDispatch();

  function handleEdit(id: string, currentValue: number) {
    const newValue = prompt(
      "Novo valor da transação:",
      currentValue.toString()
    );
    if (newValue) {
      const numeric = Number(newValue);
      if (!isNaN(numeric)) {
        dispatch(editTransaction({ id, value: numeric }));
      } else {
        alert("Valor inválido.");
      }
    }
  }

  function handleDelete(id: string) {
    if (confirm("Deseja excluir esta transação?")) {
      dispatch(deleteTransaction(id));
      setSelectedId(null);
    }
  }

  if (!show) {
    return null;
  }

  if (transactions.length === 0) {
    return (
      <div className="bg-white rounded-md px-6 py-8 xl:w-[282px] text-center">
        <p className="text-lg font-semibold">Nenhuma transação registrada.</p>
      </div>
    );
  }

  return (
    <div className="max-h-max bg-white rounded-md px-6 py-8 xl:w-[282px]">
      <div className="flex justify-between items-center mb-6 gap-4 flex-wrap">
        <h4 className="text-2xl font-bold">Extrato</h4>
        <div className="flex gap-2">
          <RoundedButton
            aria-label="Clique para editar transação"
            data-tooltip-id="button"
            data-tooltip-content="Clique para editar transação"
            data-tooltip-place="bottom"
            onClick={() => {
              const item = transactions.find((e) => e.id === selectedId);
              if (item) handleEdit(item.id, item.value);
              else alert("Selecione uma transação para editar.");
            }}
          >
            <HiPencil color="white" size={25} />
          </RoundedButton>
          <RoundedButton
            aria-label="Clique para excluir transação"
            data-tooltip-id="button"
            data-tooltip-content="Clique para excluir transação"
            data-tooltip-place="bottom"
            onClick={() => {
              if (selectedId) handleDelete(selectedId);
              else alert("Selecione uma transação para excluir.");
            }}
          >
            <IoTrashOutline color="white" size={25} />
          </RoundedButton>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {transactions.map((extract) => {
          const [day, month, year] = extract.date.split("/");
          const dateObj = new Date(
            +`20${year.length === 2 ? year : year}`,
            +month - 1,
            +day
          );
          const monthName = dateObj.toLocaleDateString("pt-BR", {
            month: "long",
          });

          return (
            <div
              key={extract.id}
              onClick={() => setSelectedId(extract.id)}
              className={`cursor-pointer p-2 rounded transition ${
                selectedId === extract.id
                  ? "bg-gray-100 border border-azul-claro"
                  : ""
              } flex justify-between items-center flex-wrap-reverse`}
            >
              <div
                className={`flex-1 flex flex-col gap-2 border-b-1 pb-2 ${
                  extract.type.toLowerCase() === "depósito"
                    ? "border-sucesso"
                    : "border-erro"
                }`}
              >
                <h4 className="text-label font-semibold text-md text-dynamic-dark ">
                  {monthName}
                </h4>
                <p className="text-lg">{extract.type}</p>
                <b
                  className={`text-lg font-bold ${
                    extract.value < 0 ? "text-red-600" : ""
                  }`}
                >
                  {extract.value < 0
                    ? `- R$ ${formatToBRL(Math.abs(extract.value))
                        .replace("R$", "")
                        .trim()}`
                    : formatToBRL(extract.value)}
                </b>
              </div>
              <span className="text-label text-dynamic-dark">{extract.date}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
