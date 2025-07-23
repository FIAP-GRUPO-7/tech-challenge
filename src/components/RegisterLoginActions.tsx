"use client";

import { useState } from "react";
import RegisterModal from "@/components/modal/RegisterModal";
import LoginModal from "@/components/modal/LoginModal";

export default function RegisterLoginActions() {
  const [showModalRegister, setShowModalRegister] = useState(false);
  const [showModalLogin, setShowModalLogin] = useState(false);

  return (
    <>
      <nav
        className="flex sm:hidden items-center gap-6"
        aria-label="Ações de autenticação"
      >
        <button
          type="button"
          onClick={() => setShowModalRegister(true)}
          className="cursor-pointer flex justify-center py-2 px-7 font-semibold rounded-md bg-preto text-branco"
        >
          Abrir conta
        </button>
        <button
          type="button"
          onClick={() => setShowModalLogin(true)}
          className="cursor-pointer flex justify-center py-2 px-3 font-semibold rounded-md border-1"
        >
          Já tenho conta
        </button>
      </nav>

      {showModalRegister && (
        <RegisterModal onClose={() => setShowModalRegister(false)} />
      )}
      {showModalLogin && (
        <LoginModal onClose={() => setShowModalLogin(false)} />
      )}
    </>
  );
}
