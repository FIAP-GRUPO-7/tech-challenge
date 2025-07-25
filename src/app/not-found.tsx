"use client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Head from "next/head";
import { useSelector } from "react-redux";
import { selectUser } from "@/features/auth";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { Tooltip } from "react-tooltip";

export default function NotFound() {
  const user = useSelector(selectUser);
  const route = useRouter();

  const goBack = useCallback(() => {
    if (user) {
      route.push("/home");
    } else {
      route.push("/");
    }
  }, [user, route]);

  return (
    <>
      <Head>
        <title>Página não encontrada | Bytebank</title>
        <meta
          name="description"
          content="A página que você está procurando não foi encontrada. Volte para o início e continue sua navegação no Bytebank."
        />
        <meta name="robots" content="noindex, follow" />
      </Head>

      <main className="flex flex-col bg-gradiente-azul w-screen h-screen">
        <Header />
        <section className="flex flex-1 justify-center items-center mb-8 mt-8">
          <div className="flex flex-col items-center space-y-4 text-center max-w-md">
            <h1 className="text-2xl font-bold">
              Ops! Não encontramos a página...
            </h1>
            <p>E olha que exploramos o universo procurando por ela!</p>
            <p>Que tal voltar e tentar novamente?</p>
            <button
              onClick={goBack}
              className="cursor-pointer rounded-md py-2 px-3 font-bold text-branco bg-azul-claro"
              data-tooltip-id="button"
              data-tooltip-content="Clique para voltar ao início"
              data-tooltip-place="bottom"
              aria-label="Clique para voltar ao início"
            >
              Voltar ao início
            </button>
          </div>
        </section>
        <Footer />
      </main>

      <Tooltip id="button" />
    </>
  );
}
