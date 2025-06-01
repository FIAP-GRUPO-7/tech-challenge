import { GreetingCard } from "@/components/DashboardComponents";
import { ExtractList } from "@/components/DashboardComponents";
import TransactionForm from "@/components/TransactionForm";

export default function PageHome() {

  return (
    <div className="w-full flex flex-col xl:flex-row col-span-5 gap-4">
      <div className="flex flex-col flex-wrap flex-1 gap-4">
        <GreetingCard />
        <TransactionForm />
      </div>
      <ExtractList />
    </div>
  );
}