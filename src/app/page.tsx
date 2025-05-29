'use client';

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Image from 'next/image';

import IconDispositivos from "@/shared/assets/IconeDispositivos.svg"
import IconPontos from "@/shared/assets/IconePontos.svg"
import IconPresente from "@/shared/assets/IconePresente.svg"
import IconSaque from "@/shared/assets/IconeSaque.svg"
import { useState } from 'react';
import RegisterModal from '@/components/modal/RegisterModal';
import LoginModal from '@/components/modal/LoginModal';

export default function PageError() {
  const [showModalRegister, setShowModalRegister] = useState(false);
  const [showModalLogin, setShowModalLogin] = useState(false);
  return (
    <main className="flex flex-col bg-gradiente-azul w-full h-auto lg:h-screen">
      <Header />
      <div className='flex flex-1 flex-col justify-center space-y-6 items-center my-15'>
        <ul className='flex flex-col items-center space-y-4'>
          <li className='text-2xl font-semibold w-sm lg:text-3xl lg:font-bold lg:w-2xl text-center'>
            Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!
          </li>
          <li className='w-80 sm:text-lg sm:font-medium sm:w-md lg:text-xl lg:font-medium lg:w-md text-center'>
            Sem burocracia, sem tarifas escondidas. Do seu jeito, com o nosso suporte.
          </li>
        </ul>
        <div className="flex sm:hidden items-center gap-6">
          <button onClick={() => setShowModalRegister(true)} className="cursor-pointer flex justify-center py-2 px-7 font-semibold rounded-md bg-preto text-branco">
            Abrir conta
          </button>
          <button onClick={() => setShowModalLogin(true)} className="cursor-pointer flex justify-center py-2 px-3 font-semibold rounded-md border-1">
            Já tenho conta
          </button>
        </div>
        <h1 className='font-bold text-xl'>
          Vantagens do nosso banco:
        </h1>
        <div className='flex flex-wrap text-center justify-around items-center lg:w-6xl'>
          <ul className='flex flex-col items-center space-y-2 w-65'>
            <Image src={IconPresente} alt='Icon Presente' />
            <li className='font-bold text-lg'>Conta e cartão gratuitos</li>
            <li>Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção.</li>
          </ul>
          <ul className='flex flex-col items-center space-y-2 w-65'>
            <Image src={IconSaque} alt='Icon Saque' />
            <li className='font-bold text-lg'>Saques sem custo</li>
            <li className='mb-5.5'>Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h.</li>
          </ul>
          <ul className='flex flex-col items-center space-y-2 w-60'>
            <Image src={IconPontos} alt='Icon Pontos' />
            <li className='font-bold text-lg'>Programa de pontos</li>
            <li>Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!</li>
          </ul>
          <ul className='flex flex-col items-center space-y-2 w-65'>
            <Image src={IconDispositivos} alt='Icon Dispositivos' />
            <li className='font-bold text-lg'>Seguro Dispositivos</li>
            <li>Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica.</li>
          </ul>
        </div>
      </div>
      {showModalRegister && <RegisterModal onClose={() => setShowModalRegister(false)} />}
      {showModalLogin && <LoginModal onClose={() => setShowModalLogin(false)} />}
      <Footer />
    </main>
  );
}
