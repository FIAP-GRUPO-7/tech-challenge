"use client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";

import IconDispositivos from "@/shared/assets/IconeDispositivos.svg";
import IconPontos from "@/shared/assets/IconePontos.svg";
import IconPresente from "@/shared/assets/IconePresente.svg";
import IconSaque from "@/shared/assets/IconeSaque.svg";
import RegisterLoginActions from "@/components/RegisterLoginActions";
import { useSelector } from "react-redux";
import { selectLoading, selectUser } from "@/features/auth";
import { useRouter } from "next/navigation";

export default function PageAuth() {
  const user = useSelector(selectUser);
  const loading = useSelector(selectLoading);
  const router = useRouter();

  if (!loading && user) {
    router.replace("/home");
    return (
      <div className="w-full h-screen flex items-center justify-center text-muted">
        <p className="text-xl font-bold">Carregando conteúdo...</p>
      </div>
    );
  }

  return (
    <main className="flex flex-col bg-gradiente-azul w-full h-auto lg:h-screen">
      <Header />

      <section
        className="flex flex-1 flex-col justify-center space-y-6 items-center my-15"
        aria-labelledby="vantagens-title"
      >
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-2xl font-semibold w-sm lg:text-3xl lg:font-bold lg:w-2xl text-center">
            Experimente mais liberdade no controle da sua vida financeira. Crie
            sua conta com a gente!
          </h1>
          <p className="w-80 sm:text-lg sm:font-medium sm:w-md lg:text-xl lg:font-medium lg:w-md text-center">
            Sem burocracia, sem tarifas escondidas. Do seu jeito, com o nosso
            suporte.
          </p>
        </div>

        <div className="flex sm:hidden items-center gap-6">
          <RegisterLoginActions />
        </div>

        <h2 id="vantagens-title" className="font-bold text-xl">
          Vantagens do nosso banco:
        </h2>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center w-full max-w-6xl">
          <li>
            <article className="flex flex-col items-center space-y-2">
              <Image src={IconPresente} alt="Conta e cartão gratuitos" />
              <h3 className="font-bold text-lg">Conta e cartão gratuitos</h3>
              <p>
                Nossa conta é digital, sem custo fixo e sem tarifa de
                manutenção.
              </p>
            </article>
          </li>

          <li>
            <article className="flex flex-col items-center space-y-2">
              <Image src={IconSaque} alt="Saques sem custo" />
              <h3 className="font-bold text-lg">Saques sem custo</h3>
              <p>
                Você pode sacar gratuitamente 4x por mês em qualquer Banco 24h.
              </p>
            </article>
          </li>

          <li>
            <article className="flex flex-col items-center space-y-2">
              <Image src={IconPontos} alt="Programa de pontos" />
              <h3 className="font-bold text-lg">Programa de pontos</h3>
              <p>
                Acumule pontos com compras no crédito sem pagar mensalidade.
              </p>
            </article>
          </li>

          <li>
            <article className="flex flex-col items-center space-y-2">
              <Image src={IconDispositivos} alt="Seguro Dispositivos" />
              <h3 className="font-bold text-lg">Seguro Dispositivos</h3>
              <p>
                Proteja seus dispositivos móveis com uma mensalidade simbólica.
              </p>
            </article>
          </li>
        </ul>
      </section>

      <Footer />
    </main>
  );
}
