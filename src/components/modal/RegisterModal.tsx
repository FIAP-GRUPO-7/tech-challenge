import { useState, ChangeEvent, FormEvent } from "react";
import Login from "@/shared/assets/Login.svg";
import Image from "next/image";

interface RegisterModalProps {
  onClose: () => void;
}

export default function RegisterModal({ onClose }: RegisterModalProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    terms: false,
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
          <Image src={Login} alt={"Login"} height={140} className="mx-auto" />
          <h2 className="text-lg font-bold pt-4 text-base">
            Preencha os campos abaixo para criar sua conta corrente!
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 px-6">
          <div>
            <label htmlFor="name" className="block text-sm font-bold">
              Nome
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Digite seu nome"
              value={form.name}
              onChange={handleChange}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white"
            />
          </div>

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

          <div className="flex items-start text-sm">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              required
              checked={form.terms}
              onChange={handleChange}
              className="mr-2 mt-1"
            />
            <label htmlFor="terms" className="text-gray-600">
              Li e estou ciente quanto às condições de tratamento dos meus dados
              conforme descrito na Política de Privacidade do banco.
            </label>
          </div>

          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="px-4 py-2 rounded font-bold text-branco bg-azul-claro"
            >
              Criar conta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
