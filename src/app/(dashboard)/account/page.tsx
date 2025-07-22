"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/_button";
import { Input } from "@/components/_input";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, updateUser } from "@/features/auth";
import { Tooltip } from "react-tooltip";

export default function PageAccount() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      try {
        setName(user.name || "");
        setEmail(user.email || "");
        setPassword(user.password || "");
      } catch (e) {
        console.error("Erro ao recuperar dados:", e);
      }
    }
  }, [user]);

  const onSubmit = () => {
    dispatch(updateUser({ name, email, password }));
  };

  return (
    <section
      aria-labelledby="page-account-title"
      className="w-full max-w-[1027px] h-[541px] bg-cinza-escuro rounded-md py-6 px-20 flex flex-col gap-8"
    >
      <h2 id="page-account-title" className="text-2xl font-bold">
        Minha conta
      </h2>

      <form>
        <div className="flex flex-col gap-8">
          <div className="relative">
            <Input
              id="name"
              label="Nome"
              placeholder="Nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`rounded-md border border-cinza-claro focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white`}
              aria-label="Digite seu nome completo"
            />
          </div>

          <div className="relative">
            <Input
              id="email"
              label="E-mail"
              type="email"
              placeholder="email@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`rounded-md border border-cinza-claro focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white`}
              aria-label="Digite seu e-mail"
            />
          </div>

          <div className="relative md:w-[250px]">
            <Input
              id="password"
              label="Senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`rounded-md border border-cinza-claro focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white`}
              aria-label="Digite sua senha"
            />
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
    </section>
  );
}
