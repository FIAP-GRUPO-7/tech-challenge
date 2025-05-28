import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Link from 'next/link';

export default function PageError() {
  return (
    <main className="flex flex-col bg-gradiente-azul w-screen h-screen">
      <Header />
      <div className='flex flex-1 flex-col justify-center items-center'>
        <ul className='flex flex-col items-center space-y-4'>
          <li className='text-2xl font-semibold w-sm lg:text-3xl lg:font-bold lg:w-2xl text-center'>
            Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!
          </li>
          <li className='w-80 sm:text-lg sm:font-medium sm:w-md lg:text-xl lg:font-medium lg:w-md text-center'>
            Sem burocracia, sem tarifas escondidas. Do seu jeito, com o nosso suporte.
          </li>
        </ul>
          <h1>
            Vantagens do nosso banco:
          </h1>
        <div className='flex w-1/2'>
          <ul>
            <li>Conta e cartão gratuitos</li>
            <li>Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção.</li>
          </ul>
          <ul>
            <li>Saques sem custo</li>
            <li>Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h.</li>
          </ul>
          <ul>
            <li>Programa de pontos</li>
            <li>Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!</li>
          </ul>
          <ul>
            <li>Seguro Dispositivos</li>
            <li>Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica.</li>
          </ul>
        </div>
      </div>
      <Footer />
    </main>
  );
}
