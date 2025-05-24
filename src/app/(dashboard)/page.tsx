"use client";
import { Button } from "@/components/_button";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { HiPencil } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoTrashOutline } from "react-icons/io5";
import { formatToBRL } from "../helpers/format";
import { RoundedButton } from "@/components/_RoundedButton";

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

export default function PageHome() {
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
        <div className="flex-1 bg-cinza-escuro rounded-md p-6 flex flex-col gap-8">
          <h2 className="text-2xl font-bold">Nova Transação</h2>
          <form action="">
            <div className="flex flex-col gap-8">
              <div className="relative  max-w-[355px]">
                <select className="appearance-none bg-white w-full max-w-[355px] h-[48px] rounded-md border-2 border-azul-claro px-4 leading-tight text-text-field">
                  <option value="">Selecione o tipo de transação</option>
                  <option>Opção 1</option>
                  <option>Opção 2</option>
                  <option>Opção 3</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
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
                  className="bg-white w-full max-w-[250px] h-[48px] rounded-md border-2 border-azul-claro px-4 text-center text-text-field focus:ring-blue-500"
                  placeholder="00,00"
                />
              </div>
              <Button className="w-full max-w-[250px] h-[48px]" hasIcon>
                Concluir transação
              </Button>
            </div>
          </form>
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
