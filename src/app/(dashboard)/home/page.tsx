import TransactionForm from "@/components/TransactionForm";

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
        <TransactionForm />
      </div>
    </section>
  );
}
