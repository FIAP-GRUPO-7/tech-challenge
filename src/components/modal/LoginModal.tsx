import { useState, ChangeEvent, FormEvent } from "react";
import Cadastro from "@/shared/assets/Cadastro.svg";
import Image from "next/image";
import Link from 'next/link'

interface LoginModalProps {
  onClose: () => void;
}

export default function LoginModal({ onClose }: LoginModalProps) {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Formulário enviado:", form);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-fundo-principal w-full max-w-md p-6 relative shadow-lg h-screen">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl"
        >
          ×
        </button>

        <div className="text-center mb-4">
          <Image
            src={Cadastro}
            alt={"Cadastro"}
            height={140}
            className="mx-auto"
          />
          <h2 className="text-lg font-bold pt-4 text-base">Login</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 px-6">
          <div>
            <label htmlFor="email" className="block text-sm font-bold">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Digite seu email"
              value={form.email}
              onChange={handleChange}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-bold">
              Senha
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="Digite sua senha"
              value={form.password}
              onChange={handleChange}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white"
            />
          </div>

          <Link href="" className="text-xs text-sucesso">Esqueci a senha?</Link>

          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="px-4 py-2 rounded font-bold text-branco bg-azul-claro"
            >
              Acessar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
