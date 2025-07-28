"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import Login from "@/shared/assets/Login.svg";
import Image from "next/image";
import { registerUser } from "@/lib/api";
import { Tooltip } from "react-tooltip";

interface RegisterModalProps {
  onClose: () => void;
}

export default function RegisterModal({ onClose }: RegisterModalProps) {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    terms: false,
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    terms: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {
      username: form.username ? "" : "Nome é obrigatório.",
      email: !form.email
        ? "Email é obrigatório."
        : !form.email.includes("@")
        ? "Email não é válido."
        : "",
      password: form.password ? "" : "Senha é obrigatória.",
      terms: form.terms ? "" : "Você deve aceitar os termos.",
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((err) => !err);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setError("");

    try {
      await registerUser({
        username: form.username,
        email: form.email,
        password: form.password,
      });

      alert("✅ Usuário cadastrado com sucesso!");
      onClose();
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error(err);
        setError(err.message || "❌ Erro ao registrar usuário.");
      } else {
        console.error(err);
        setError("❌ Erro ao registrar usuário.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-fundo-principal w-full max-w-md p-6 relative shadow-lg h-screen overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl"
          data-tooltip-id="button"
          data-tooltip-content="Clique para fechar o modal"
          data-tooltip-place="bottom"
          aria-label="Clique para fechar o modal"
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
            <label htmlFor="username" className="block text-sm font-bold">
              Nome
            </label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Digite seu nome"
              value={form.username}
              onChange={handleChange}
              className={`mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white ${
                errors.username ? "border-erro" : "border-cinza-claro"
              }`}
            />
            {errors.username && <p className="text-erro text-xs mt-1">{errors.username}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-bold">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="Digite seu email"
              value={form.email}
              onChange={handleChange}
              className={`mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white ${
                errors.email ? "border-erro" : "border-cinza-claro"
              }`}
              aria-label="Digite seu email"
            />
            {errors.email && <p className="text-erro text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-bold">
              Senha
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Digite sua senha"
              value={form.password}
              onChange={handleChange}
              className={`mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white ${
                errors.password ? "border-erro" : "border-cinza-claro"
              }`}
              aria-label="Digite sua senha"
            />
            {errors.password && <p className="text-erro text-xs mt-1">{errors.password}</p>}
          </div>

          <div className="flex items-start text-sm">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              checked={form.terms}
              onChange={handleChange}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  setForm((prev) => ({
                    ...prev,
                    terms: !prev.terms,
                  }));
                  setErrors((prev) => ({
                    ...prev,
                    terms: "",
                  }));
                }
              }}
            className={`mr-2 mt-1 border-2 rounded-sm w-8 h-4 ${
                errors.terms ? "border-erro" : "border-cinza-claro"
              }`}
            aria-label="Aceitar termos de uso"
            />
            <label htmlFor="terms" className="text-gray-600">
              Li e estou ciente quanto às condições de tratamento dos meus dados
              conforme descrito na Política de Privacidade do banco.
            </label>
          </div>
          {errors.terms && <p className="text-erro text-xs mt-1">{errors.terms}</p>}

          {error && <p className="text-erro text-xs mt-1">{error}</p>}

          <div className="flex justify-center mt-8">
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 rounded font-bold text-branco bg-azul-claro"
              data-tooltip-id="button"
              data-tooltip-content="Clique para criar sua conta"
              data-tooltip-place="top"
              aria-label="Clique para criar sua conta"
            >
              {loading ? "Carregando..." : "Criar conta"}
            </button>
          </div>
          <Tooltip id="button" />
         </form>
      </div>
    </div>
  );
}
