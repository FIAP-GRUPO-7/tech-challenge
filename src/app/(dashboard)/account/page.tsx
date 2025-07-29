"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/_button";
import { Input } from "@/components/_input";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, updateUser } from "@/features/auth";
import { Tooltip } from "react-tooltip";
import Cookies from "js-cookie";
import { fetchUser } from "@/lib/api";

export default function PageAccount() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function fetchUserData() {
      try {
        const token = Cookies.get("token");
        if (!token) {
          console.error("Usuário não autenticado");
          return;
        }
        const user = await fetchUser(token); 
        setName(user.name);
        setEmail(user.email);
      } catch (e) {
        console.error("Erro ao buscar dados do usuário:", e);
      } finally {
        setLoading(false);
      }
    }
  fetchUserData();
  }, []);

  if (loading) return <p>Carregando dados...</p>;

  const onSubmit = () => {
    if (!validate()) return;
    dispatch(updateUser({ name, email, password }));
  };

  const validate = () => {
    const newErrors = {
      name: !name
        ? "Nome é obrigatório."
        : "",
      email: !email
        ? "Email é obrigatório."
        : !email.includes("@")
        ? "Email não é válido."
        : "",
      password: !password ? "Senha é obrigatória." : "",
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((err) => !err);
  };

  return (
    <div className="w-full max-w-[1027px] h-[541px] bg-cinza-escuro rounded-md py-6 px-20 flex flex-col gap-8">
      <h2 className="text-2xl font-bold">Minha conta</h2>

      <form>
        <div className="flex flex-col gap-8">
          <div className="relative">
            <Input
              id="name"
              label="Nome"
              placeholder="Nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`rounded-md border border-cinza-claro focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white ${errors.name ? "border-erro" : "border-cinza-claro"} `}
              aria-label="Digite seu nome completo"
            />
            {errors.name && (
              <p className="text-erro text-xs mt-1">{errors.name}</p>
            )}
          </div>

          <div className="relative">
            <Input
              id="email"
              label="E-mail"
              type="email"
              placeholder="email@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`rounded-md border border-cinza-claro focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white ${errors.email ? "border-erro" : "border-cinza-claro"} `}
              aria-label="Digite seu e-mail"
            />
            {errors.email && (
              <p className="text-erro text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div className="relative md:w-[250px]">
            <Input
              id="password"
              label="Senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`rounded-md border border-cinza-claro focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white ${errors.password ? "border-erro" : "border-cinza-claro"} `}
              aria-label="Digite sua senha"
            />
            {errors.password && (
              <p className="text-erro text-xs mt-1">{errors.password}</p>
            )}
          </div>

          <Button
            type="button"
            onClick={onSubmit}
            className="sm:w-full md:max-w-[250px] h-[48px]"
            data-tooltip-id="button"
            data-tooltip-content="Clique para salvar as alterações"
            data-tooltip-place="top"
            aria-label="Clique para salvar as alterações"
          >
            Salvar alterações
          </Button>
        </div>
        <Tooltip id="button" />
      </form>
    </div>
  );
}
