"use client";
import { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { HiPencil } from "react-icons/hi";
import { IoTrashOutline } from "react-icons/io5";
import { RoundedButton } from "@/components/_RoundedButton";
import { formatToBRL } from "../app/helpers/format";
import { useAuth } from "@/context/auth";
import { TransactionType, useTransaction } from "@/context/transactions";

export function GreetingCard({ children }: { children?: React.ReactNode }) {
  const [date, setDate] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);
  const { user } = useAuth();
  const { balance } = useTransaction();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const today = new Date();
      const formatted = today.toLocaleDateString("pt-BR", {
        weekday: "long",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
      setDate(formatted);
    }
  }, []);

  return (
    <div className="w-full bg-azul-escuro rounded-md p-6 flex gap-4 flex-col sm:flex-row sm:h-[406px]">
      <div className="flex flex-col gap-6 flex-1">
        <h2 className="text-2xl text-white">
          Olá, {user?.name || "Usuário"}! :)
        </h2>
        <p className="text-white">{date}</p>
      </div>
      <div className="flex-1 flex sm:justify-center sm:relative">
        <div className="w-[180px] sm:absolute sm:top-[75px]">
          <div className="border-white border-b-2 py-4">
            <h3 className="text-xl text-white flex items-center gap-6">
              <span>Saldo</span>
              <button onClick={() => setShow((prev) => !prev)}>
                {show ? <FaEyeSlash /> : <FaEye />}
              </button>
            </h3>
          </div>
          <div className="border-white py-4 flex flex-col gap-2">
            <span className="text-lg text-white">Conta Corrente</span>
            <h2 className="text-3xl text-white">
              {show ? formatToBRL(balance) : "*******"}
            </h2>
          </div>
        </div>
      </div>
      <div className="gap-8">{children}</div>
    </div>
  );
}

export type Extract = {
  id: string;
  month: string;
  type: TransactionType;
  value: number;
  date: string;
};

export function ExtractList() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { extracts, deleteTransaction, editTransaction } = useTransaction();

  const extractsWithMonth = extracts.map((item) => {
    const [day, month, year] = item.date.split("/");
    const dateObj = new Date(
      +`20${year.length === 2 ? year : year}`,
      +month - 1,
      +day
    );
    return {
      ...item,
      month: dateObj.toLocaleDateString("pt-BR", { month: "long" }),
    };
  });

  const handleDelete = (id: string) => {
    deleteTransaction(id);
    setSelectedId(null);
  };

  const handleEdit = (item: Extract) => {
    const newValue = prompt("Novo valor da transação:", item.value.toString());
    if (newValue) {
      editTransaction({
        ...item,
        value: newValue,
      });
    }
  };

  if (extractsWithMonth.length === 0) {
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
            onClick={() => {
              const item = extractsWithMonth.find((e) => e.id === selectedId);
              if (item)
                handleEdit({
                  ...item,
                  value: Number(item.value),
                });
              else alert("Selecione uma transação para editar.");
            }}
          >
            <HiPencil color="white" size={25} />
          </RoundedButton>
          <RoundedButton
            onClick={() => {
              if (!selectedId) {
                alert("Selecione uma transação para excluir.");
                return;
              }
              handleDelete(selectedId);
            }}
          >
            <IoTrashOutline color="white" size={25} />
          </RoundedButton>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {extractsWithMonth.map((extract) => {
          const value = Number(extract.value);
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
                <h4 className="text-label font-semibold text-md">
                  {extract.month}
                </h4>
                <p className="text-lg">{extract.type}</p>
                <b
                  className={`text-lg font-bold ${
                    extract.type.toLowerCase() === "depósito"
                      ? ""
                      : "text-red-600"
                  }`}
                >
                  {value < 0
                    ? `- R$ ${formatToBRL(Math.abs(value)).trim()}`
                    : formatToBRL(value)}
                </b>
              </div>
              <span className="text-label">{extract.date}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
