"use client";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { HiPencil } from "react-icons/hi";
import { IoTrashOutline } from "react-icons/io5";
import { RoundedButton } from "@/components/_RoundedButton";
import { formatToBRL } from "../app/helpers/format";

export function GreetingCard({
        name, 
        date,
        children 
    }: { 
        name: string; 
        date: string;
        children?: React.ReactNode; 
     }) {

  const [show, setShow] = useState(false);

  return (
    <div className="w-full bg-azul-escuro rounded-md p-6 flex gap-4 flex-col sm:flex-row sm:h-[406px]">
      <div className="flex flex-col gap-6 flex-1">
        <h2 className="text-2xl text-white">Olá, {name}! :)</h2>
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
              {show ? "R$ 2.500,00" : "*******"}
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
  type: string;
  value: number;
  date: string;
};

export function ExtractList({ extracts }: { extracts: Extract[] }) {
  return (
    <div className="max-h-max bg-white rounded-md px-6 py-8 xl:w-[282px]">
      <div className="flex justify-between items-center mb-6 gap-4 flex-wrap">
        <h4 className="text-2xl font-bold">Extrato</h4>
        <div className="flex gap-2">
          <RoundedButton>
            <HiPencil color="white" size={25} />
          </RoundedButton>
          <RoundedButton>
            <IoTrashOutline color="white" size={25} />
          </RoundedButton>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {extracts.map((extract) => (
          <div
            key={extract.id}
            className="flex justify-between items-center flex-wrap-reverse"
          >
            <div className= {`flex-1 flex flex-col gap-2 border-b-1 pb-2 ${
                extract.type.toLowerCase() === "deposito"
                 ? "border-sucesso" : "border-erro"
                }`}
            >
              <h4 className="text-label font-semibold text-md">{extract.month}</h4>
              <p className="text-lg">{extract.type}</p>
              <b className="text-lg font-bold">{formatToBRL(extract.value)}</b>
            </div>
            <span className="text-label">{extract.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
