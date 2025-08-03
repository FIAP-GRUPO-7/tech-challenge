"use client";

import Image from "next/image";
import Logo from "@/shared/assets/Logo.svg";
import { useState } from "react";
import RegisterModal from "./modal/RegisterModal";
import LoginModal from "./modal/LoginModal";
import Link from "next/link";
import { Tooltip } from "react-tooltip";

export const Header = () => {
  const [showModalRegister, setShowModalRegister] = useState(false);
  const [showModalLogin, setShowModalLogin] = useState(false);

  return (
    <>
      <nav
        className="flex items-center justify-around py-5 bg-black text-sm"
        aria-label="Cabeçalho principal"
      >
        <ul className="flex items-center gap-8 text-branco font-medium">
          <li>
            <Link href="/home" aria-label="Ir para a página inicial">
              <Image src={Logo} alt="Bytecon" height={25} />
            </Link>
          </li>
          <li className="hidden sm:block">
            <a href="#sobre" className="flex items-center">
              Sobre
            </a>
          </li>
          <li className="hidden sm:block">
            <a href="#servicos" className="flex items-center">
              Serviços
            </a>
          </li>
        </ul>

        <div className="hidden sm:flex items-center gap-6">
          <button
            type="button"
            onClick={() => setShowModalRegister(true)}
            className="cursor-pointer flex justify-center py-2 px-4 font-semibold rounded-md border-branco bg-branco"
            aria-label="Clique para abrir uma conta"
            data-tooltip-id="button"
            data-tooltip-content="Clique para abrir uma conta"
            data-tooltip-place="bottom"
          >
            Abrir minha conta
          </button>
          <button
            type="button"
            onClick={() => setShowModalLogin(true)}
            className="cursor-pointer flex justify-center py-2 px-7 font-semibold rounded-md border-1 bg-preto text-branco"
            aria-label="Clique para fazer login"
            data-tooltip-id="button"
            data-tooltip-content="Clique para fazer login"
            data-tooltip-place="bottom"
          >
            Já tenho conta
          </button>
        </div>
      </nav>

      {showModalRegister && (
        <RegisterModal onClose={() => setShowModalRegister(false)} />
      )}
      {showModalLogin && (
        <LoginModal onClose={() => setShowModalLogin(false)} />
      )}

      <Tooltip id="button" />
    </>
  );
};
