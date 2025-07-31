"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdClose } from "react-icons/io";
import React from "react"; 

// --- Interfaces e Tipos ---
interface NavItem {
  label: string;
  value: string;
  isMicrofrontendLink?: boolean;
}

interface UserData {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: any | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  token: any | null; 
}

// --- Função de Utilitário para Obter Dados do LocalStorage para URL ---
/**
 * Obtém dados do localStorage e os formata como uma string JSON codificada para URL.
 * Garante que o acesso ao localStorage só ocorra no ambiente do navegador.
 * @returns {string} Uma string JSON codificada para URL contendo os dados do usuário e transações.
 */
function getMicrofrontendDataForUrl(): string {
  if (typeof window === 'undefined') {
    // Retorna uma string JSON vazia e codificada se estiver no servidor
    console.warn("localStorage não disponível: getMicrofrontendDataForUrl tentou rodar no servidor.");
    return encodeURIComponent(JSON.stringify({ user: null, token: null, }));
  }

  const dataUser = localStorage.getItem('user');
  const token = localStorage.getItem('token');

  const dataToTransfer: UserData = {
    user: dataUser ? JSON.parse(dataUser) : null,
    token: token ? token : null,
  };

  return JSON.stringify(dataToTransfer);
}

const settings: NavItem[] = [
  {
    label: "Inicio",
    value: "/home",
  },
  {
    label: "Transferências",
    value: "/transferencias",
  },
  {
    label: "Investimentos",
    value: "http://localhost:9000/", 
    isMicrofrontendLink: true,
  },
  {
    label: "Outros serviços",
    value: "/others",
  },
];

// --- Componente Sidebar ---
export const Sidebar: React.FC = () => {
  const pathname = usePathname();

  /**
   * Manipulador de clique para links que levam a microfrontends.
   * Previne a navegação padrão do Next.js e redireciona com dados na URL.
   * @param e Evento de clique do mouse.
   * @param navItem O item de navegação clicado.
   */
  const handleMicrofrontendLinkClick = (e: React.MouseEvent, navItem: NavItem) => {
    e.preventDefault(); // Impede a navegação padrão do Next.js
    
    const dataString = getMicrofrontendDataForUrl(); // Obtém os dados formatados
    const targetUrl = `${navItem.value}?data=${encodeURIComponent(dataString)}`; // Constrói a URL final

    window.location.href = targetUrl; // Redireciona a aba atual para a URL do microfrontend
  };

  return (
    <aside className="rounded-md py-4 xl:min-w-[180px] xl:bg-white hidden md:block">
      <nav>
        <ul className="px-6 flex flex-wrap justify-between xl:flex-col xl:w-full xl:text-center">
          {settings.map((navItem, index) => {
            const isLast = index !== settings.length - 1;
            const isCurrent = pathname === navItem.value;

            // Define as props do Link condicionalmente
            const linkProps: { onClick?: (e: React.MouseEvent) => void } = {};
            if (navItem.isMicrofrontendLink) {
              linkProps.onClick = (e) => handleMicrofrontendLinkClick(e, navItem);
            }

            return (
              <li
                key={navItem.value}
                className={cn(
                  "flex-1 min-w-[115px] text-center py-4 hover:text-azul-escuro",
                  isLast && "xl:border-b-2",
                  isCurrent && "border-b-2 text-azul-escuro font-bold"
                )}
              >
                <Link href={navItem.value} {...linkProps}>{navItem.label}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

// --- Componente HamburgerSidebar ---
interface HamburgerSidebarProps {
  show: boolean;
  onClose: () => void;
}

export const HamburgerSidebar: React.FC<HamburgerSidebarProps> = ({ show, onClose }) => {
  const pathname = usePathname();

  /**
   * Manipulador de clique para links de microfrontend (lógica duplicada por ser um componente separado).
   * @param e Evento de clique do mouse.
   * @param navItem O item de navegação clicado.
   */
  const handleMicrofrontendLinkClick = (e: React.MouseEvent, navItem: NavItem) => {
    e.preventDefault();
    const dataString = getMicrofrontendDataForUrl();
    const targetUrl = `${navItem.value}?data=${encodeURIComponent(dataString)}`;
    window.location.href = targetUrl;
  };

  return (
    <div
      className={`bg-fundo-principal px-2 py-4 absolute top-0 left-0 w-[172px] min-h-[256px] transition-transform duration-300 ease-in-out ${
        show ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex w-full justify-end">
        <button className="cursor-pointer" onClick={onClose}>
          <IoMdClose color="black" size={24} />
        </button>
      </div>
      <div>
        <nav>
          <ul className="px-6 flex flex-wrap justify-between xl:flex-col xl:w-full xl:text-center">
            {settings.map((navItem, index) => {
              const isLast = index === settings.length - 1;
              const isCurrent = pathname === navItem.value;

              // Define as props do Link condicionalmente
              const linkProps: { onClick?: (e: React.MouseEvent) => void } = {};
              if (navItem.isMicrofrontendLink) {
                linkProps.onClick = (e) => handleMicrofrontendLinkClick(e, navItem);
              }

              return (
                <li
                  key={navItem.value}
                  className={cn(
                    "flex-1 min-w-[115px] text-black text-center py-2 border-b-2 hover:text-azul-escuro",
                    isLast && "border-b-0",
                    isCurrent && " text-azul-claro font-bold xl:border-b-0"
                  )}
                >
                  <Link key={navItem.value} href={navItem.value} prefetch {...linkProps}>
                    {navItem.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};