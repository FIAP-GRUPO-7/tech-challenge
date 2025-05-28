
import CardsModal from "../../../components/CardsModal";
import { GreetingCard } from "@/components/DashboardComponents";
import { ExtractList } from "@/components/DashboardComponents";


const extracts = [
  {
    id: crypto.randomUUID(),
    month: "Novembro",
    type: "Deposito",
    value: 150,
    date: "18/11/2022",
  },
  {
    id: crypto.randomUUID(),
    month: "Novembro",
    type: "Deposito",
    value: 100,
    date: "21/11/2022",
  },
  {
    id: crypto.randomUUID(),
    month: "Novembro",
    type: "Deposito",
    value: 50,
    date: "21/11/2022",
  },
  {
    id: crypto.randomUUID(),
    month: "Novembro",
    type: "Transferência",
    value: -500,
    date: "21/11/2022",
  },
];

export default function Cartoes() {
  return (
    <>
      <div className="w-full flex flex-col xl:flex-row col-span-5 gap-4">
        <div className="flex flex-col flex-wrap flex-1 gap-4">
          <GreetingCard name="Joana" date="Quinta-feira, 08/09/2024" />
          <CardsModal />
        </div>
        <ExtractList extracts={extracts} />
      </div>
    </>
  );
}
