import { GreetingCard } from "@/components/DashboardComponents";
import { ExtractList } from "@/components/DashboardComponents";
import QuickActions from "@/components/home-page/QuickActions";
import SummaryCards from "@/components/home-page/SummaryCards";
import ExpensesChart from "@/components/home-page/ExpensesChart";
import TransactionsList from "@/components/home-page/TransactionsList";
import BillsToPay from "@/components/home-page/BillsToPay";

export default function PageHome() {
  return (
    <div className="w-full flex flex-col xl:flex-row col-span-5 gap-4">
      <div className="flex flex-col flex-wrap flex-1 gap-4">
        <GreetingCard />
        <QuickActions />
        <SummaryCards />

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          <ExpensesChart />
          <TransactionsList />
        </div>

        <BillsToPay />
      </div>

      <ExtractList />
    </div>
  );
}
