import { Button } from "@/components/_button";
import { IoMdArrowDropdown } from "react-icons/io";

export default function TransactionForm() {
  return (
    <div className="flex-1 bg-cinza-escuro rounded-md p-6 flex flex-col gap-8">
      <h2 className="text-2xl font-bold">Nova Transação</h2>
      <form>
        <div className="flex flex-col gap-8">
          <div className="relative max-w-[355px]">
            <select className="appearance-none bg-white w-full h-[48px] rounded-md border-2 border-azul-claro px-4 text-text-field">
              <option value="">Selecione o tipo de transação</option>
              <option>Opção 1</option>
              <option>Opção 2</option>
              <option>Opção 3</option>
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
              className="bg-white w-full max-w-[250px] h-[48px] rounded-md border-2 border-azul-claro px-4 text-center text-text-field"
              placeholder="00,00"
            />
          </div>
          <Button className="w-full max-w-[250px] h-[48px]" hasIcon>
            Concluir transação
          </Button>
        </div>
      </form>
    </div>
  );
}
