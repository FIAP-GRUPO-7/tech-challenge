"use client";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Button } from "@/components/_button";
import { Input } from "@/components/_input";
import { fetchUser } from "@/lib/api"; // ✅ import corrigido

export default function PageAccount() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const token = Cookies.get("token");
        if (!token) {
          console.error("Usuário não autenticado");
          return;
        }
        const user = await fetchUser(token); // ✅ chamada corrigida
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

  return (
    <div className="w-full max-w-[1027px] h-[541px] bg-cinza-escuro rounded-md py-6 px-20 flex flex-col gap-8">
      <h2 className="text-2xl font-bold">Minha conta</h2>
      <form>
        <div className="flex flex-col gap-8">
          <Input
            label="Nome"
            placeholder="Nome completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            label="E-mail"
            type="email"
            placeholder="email@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            label="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button className="sm:w-full md:max-w-[250px] h-[48px]">
            Salvar alterações
          </Button>
        </div>
      </form>
    </div>
  );
}
