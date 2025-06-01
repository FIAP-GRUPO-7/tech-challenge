"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/_button";
import { Input } from "@/components/_input";

export default function PageAccount() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const users = localStorage.getItem("users");
      if (users) {
        try {
          const parsed = JSON.parse(users);
          const user = parsed[0];
          setName(user.name || "");
          setEmail(user.email || "");
          setPassword(user.password || "");
        } catch (e) {
          console.error("Erro ao recuperar dados:", e);
        }
      }
    }
  }, []);

  return (
    <div className="w-full max-w-[1027px] h-[541px] bg-cinza-escuro rounded-md py-6 px-20 flex flex-col gap-8">
      <h2 className="text-2xl font-bold">Minha conta</h2>
      <form>
        <div className="flex flex-col gap-8">
          <div className="relative">
            <Input
              label="Nome"
              placeholder="Nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="relative">
            <Input
              label="E-mail"
              type="email"
              placeholder="email@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="relative md:w-[250px]">
            <Input
              label="Senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button className="sm:w-full md:max-w-[250px] h-[48px]">
            Salvar alterações
          </Button>
        </div>
      </form>
    </div>
  );
}
