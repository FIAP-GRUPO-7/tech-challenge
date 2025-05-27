import InvestmentChart from './InvestmentChart'

export default function InvestmentSection() {
  return (
    <section className="bg-cinza-escuro p-6 rounded-xl">
      <div className="flex flex-col gap-4 text-center md:text-left">
        <h2 className="text-lg font-semibold">Investimentos</h2>
        <p className="text-lg font-inter text-azul-escuro">Total: R$ 50.000,00</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 my-4 md:items-stretch items-center">
        <div className="bg-blue-900 text-white p-4 rounded-lg w-full text-center">
          <p className="text-sm">Renda Fixa</p>
          <p className="text-xl font-bold">R$ 36.000,00</p>
        </div>
        <div className="bg-blue-900 text-white p-4 rounded-lg w-full text-center">
          <p className="text-sm">Renda Variável</p>
          <p className="text-xl font-bold">R$ 14.000,00</p>
        </div>
      </div>
      <InvestmentChart />
    </section>
  )
}
