import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Link from 'next/link';

export default function PageError() {
  return (
    <main className="flex flex-col bg-gradiente-azul w-screen h-screen">
      <Header />
      <div className='flex flex-1 justify-center items-center'>
        <ul className='flex flex-col items-center space-y-4'>
          <li className='text-2xl font-bold '>Ops! Não encontramos a página... </li>
          <ul className='flex flex-col items-center'>
            <li>E olha que exploramos o universo procurando por ela!</li>
            <li>Que tal voltar e tentar novamente?</li>
          </ul>
          <Link href={''} className="rounded-md py-2 px-3 font-bold text-branco bg-azul-claro">
            Voltar ao início
          </Link>
        </ul>
      </div>
      <Footer />
    </main>
  );
}
