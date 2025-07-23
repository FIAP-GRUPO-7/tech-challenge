import QuickActions from "@/components/home-page/QuickActions";
import SummaryCards from "@/components/home-page/SummaryCards";
import ExpensesChart from "@/components/home-page/ExpensesChart";
import TransactionsList from "@/components/home-page/TransactionsList";
import BillsToPay from "@/components/home-page/BillsToPay";

export default function PageHome() {
  return (
    <section
      aria-labelledby="home-section-title"
      className="w-full flex flex-col xl:flex-row col-span-5 gap-4"
    >
      <h2 id="home-section-title" className="sr-only">
        Página inicial do painel
      </h2>

      <div className="flex flex-col flex-wrap flex-1 gap-4">
        <QuickActions />
        <SummaryCards />

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          <ExpensesChart />
          <TransactionsList />
        </div>

        <BillsToPay />
      </div>

    </section>
  );
}
