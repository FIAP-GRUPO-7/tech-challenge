//CardsModal.tsx
'use client'
import React, { useState } from 'react';
import ModalCartoes from './ModalCartoes';


const CardsModal = () => {

  const [modalAberto, setModalAberto] = useState(false);
  const [tipoModal, setTipoModal] = useState<'configurar' | 'bloquear' | null>(null);
  const [cartaoSelecionado, setCartaoSelecionado] = useState<'fisico' | 'digital' | null>(null);

  const abrirModal = (tipo: 'configurar' | 'bloquear', cartao: 'fisico' | 'digital') => {
    setTipoModal(tipo);
    setCartaoSelecionado(cartao);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setTipoModal(null);
    setCartaoSelecionado(null);
  };

  return (
    <section className="bg-cinza-escuro p-6 rounded-md w-full">
      <h2 className="text-xl font-semibold text-[var(--color-preto)] mb-4">
        Meus Cartões
      </h2>

      {/* Cartão Físico */}
      <div className="flex flex-col md:flex-row w-full gap-10 items-start p-6 rounded-md mb-4">
        <div className="w-[260px] h-[147px] rounded-lg bg-[var(--color-azul-escuro)] p-3 flex flex-col justify-between text-[var(--color-branco)] font-sans italic">
          <div>
            <p className="text-base font-bold">Byte</p>
            <p className="text-[12px] not-italic">Platinum</p>
          </div>
          <div>
            <p className="text-[12px] not-italic">Joana Fonseca Gomes</p>
            <p className="text-lg tracking-wider">*********</p>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <p className="text-[var(--color-preto)] mb-2">Cartão Físico</p>

          <div className="flex flex-col space-y-1 mb-2">
            <button
              onClick={() => abrirModal('configurar', 'fisico')}
              className="w-[160px] bg-[var(--color-azul-escuro)] hover:bg-[var(--color-azul-claro)] text-[var(--color-branco)] text-sm py-2 px-3 rounded-md transition-colors duration-200 ease-in-out"
            >
              Configurar
            </button>

            <button
              onClick={() => abrirModal('bloquear', 'fisico')}
              className="w-[160px] text-[var(--color-erro)] border border-[var(--color-vermelho)] text-sm py-2 px-3 rounded-md hover:bg-[#e999994d] transition-colors duration-200 ease-in-out"
            >
              Bloqueio/Desbloqueio
            </button>
          </div>

          <p className="text-[var(--color-preto)] text-xs">Função: Débito/Crédito</p>
        </div>
      </div>

      {/* Cartão Digital */}
      <div className="flex flex-col md:flex-row w-full gap-10 items-start p-6 rounded-md">
        <div className="w-[260px] h-[147px] rounded-lg bg-[#999999] p-3 flex flex-col justify-between text-[var(--color-branco)] font-sans italic">
          <div>
            <p className="text-base font-bold">Byte</p>
            <p className="text-[12px] not-italic">Platinum</p>
          </div>
          <div>
            <p className="text-[12px] not-italic">Joana Fonseca Gomes</p>
            <p className="text-lg tracking-wider">*********</p>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <p className="text-[var(--color-preto)] mb-2">Cartão Digital</p>

          <div className="flex flex-col space-y-1 mb-2">
            <button
              onClick={() => abrirModal('configurar', 'digital')}
              className="w-[160px] bg-[var(--color-azul-escuro)] hover:bg-[var(--color-azul-claro)] text-[var(--color-branco)] text-sm py-2 px-3 rounded-md transition-colors duration-200 ease-in-out"
            >
              Configurar
            </button>

            <button
              onClick={() => abrirModal('bloquear', 'digital')}
              className="w-[160px] text-[var(--color-erro)] border border-[var(--color-vermelho)] text-sm py-2 px-3 rounded-md hover:bg-[#e999994d] transition-colors duration-200 ease-in-out"
            >
              Bloqueio/Desbloqueio
            </button>
          </div>

          <p className="text-[var(--color-preto)] text-xs">Função: Débito</p>
        </div>
      </div>

      {/* Modal Cartões */}
      {modalAberto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
          <ModalCartoes tipo={tipoModal} cartao={cartaoSelecionado} onClose={fecharModal} />
        </div>
      )}
    </section>
  );
};

export default CardsModal;
