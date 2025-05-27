"use client";

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { HiPencil } from "react-icons/hi";
import { formatToBRL } from "@/app/helpers/format"
import { IoTrashOutline } from "react-icons/io5";
import { RoundedButton } from "@/components/_RoundedButton";
import InvestmentSection from '@/components/InvestmentSection'

const extracts = [
  {
    id: crypto.randomUUID(),
    month: "Novembro",
    type: "Deposito",
    value: 150,
    date: "21/11/2022",
  },
  {
    id: crypto.randomUUID(),
    month: "Novembro",
    type: "Deposito",
    value: 150,
    date: "21/11/2022",
  },
  {
    id: crypto.randomUUID(),
    month: "Novembro",
    type: "Deposito",
    value: 150,
    date: "21/11/2022",
  },
  {
    id: crypto.randomUUID(),
    month: "Novembro",
    type: "Deposito",
    value: 150,
    date: "21/11/2022",
  },
];

export default function Home() {
  const [show, setShow] = useState(false);
  return (
    <div className="w-full flex flex-col xl:flex-row col-span-5 gap-4">
      <div className="flex flex-col flex-wrap flex-1 gap-4">
        <div className="w-full bg-azul-escuro rounded-md p-6 flex gap-4 flex-col sm:flex-row sm:h-[406px]">
          <div className="flex flex-col gap-6 flex-1">
            <h2 className="text-2xl text-white">Olá, Joana! :)</h2>
            <p className="text-white">Quinta-feira, 08/09/2024</p>
          </div>
          <div className="flex-1 flex sm:justify-center sm:relative">
            <div className="w-[180px] sm:absolute sm:top-[75px]">
              <div className="border-white border-b-2 py-4">
                <h3 className="text-xl text-white flex items-center gap-6">
                  <span>Saldo</span>
                  <button
                    className="appearance-none cursor-pointer"
                    onClick={() => setShow((old) => !old)}
                  >
                    {show ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </h3>
              </div>
              <div className="border-white py-4 flex flex-col gap-2">
                <span className="text-lg text-white">Conta Corrente</span>
                <h2 className="text-3xl text-white">
                  R$ {show ? "2.500,00" : "*******"}
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="gap-8">
        <InvestmentSection />
        </div>
      </div>
      <div className="max-h-max bg-white rounded-md px-6 py-8 xl:w-[282px] md:px-8 lg:px-36  xl:px-8">
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
        <div className="flex flex-col gap-4 flex-1">
          {extracts.map((extract) => {
            return (
              <div
                className="flex justify-between items-center flex-wrap-reverse"
                key={extract.id}
              >
                <div className="flex-1 flex flex-col gap-2 border-b-1 border-sucesso pb-2">
                  <h4 className="text-label font-semibold text-md">
                    {extract.month}
                  </h4>
                  <p className="text-lg">{extract.type}</p>
                  <b className="text-lg font-bold">
                    {formatToBRL(extract.value)}
                  </b>
                </div>
                <span className="text-label">{extract.date}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

