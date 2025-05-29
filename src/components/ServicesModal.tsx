'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ServicesModal = () => {
  const servicos = [
    { nome: 'Empréstimos', icone: 'emprestimo.png' },
    { nome: 'Meus Cartões', icone: 'cartoes.png', link: '/cartoes' },
    { nome: 'Doações', icone: 'doacoes.png' },
    { nome: 'Pix', icone: 'pix.png' },
    { nome: 'Seguros', icone: 'seguros.png' },
    { nome: 'Créditos', icone: 'creditos.png' },
  ];

  return (
    <div className="flex flex-col space-y-6 w-full max-w-[700px] mx-auto">
      <div className="bg-[var(--color-fundo-principal)] rounded-md p-6 shadow w-full">
        <h3 className="text-[var(--color-preto)] text-lg font-semibold mb-4">
          Confira outros serviços disponíveis:
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {servicos.map((servico, index) => {
            const content = (
              <div className="flex flex-col items-center bg-[var(--color-branco)] p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-200 cursor-pointer">
                <Image
                  src={`/icons/${servico.icone}`}
                  alt={servico.nome}
                  width={50}
                  height={50}
                />
                <span className="mt-2 text-sm text-[var(--color-preto)] text-center font-medium">
                  {servico.nome}
                </span>
              </div>
            );

            return servico.link ? (
              <Link key={index} href={servico.link}>{content}</Link>
            ) : (
              <button key={index} type="button" className="w-full">{content}</button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesModal;

