"use client";
import { Button } from "@/components/_button";
import { Input } from "@/components/_input";

export default function PageAccount() {
  return (
    <div className="w-full max-w-[1027px] h-[541px] bg-cinza-escuro rounded-md py-6 px-20 flex flex-col gap-8">
      <h2 className="text-2xl font-bold">Minha conta</h2>
      <form action="">
        <div className="flex flex-col gap-8">
          <Input label="Nome" placeholder="Nome completo" />
          <Input label="E-mail" type="email" placeholder="email@email.com" />
          <Input label="Senha" type="password" className="md:w-[250px]" />
          <Button className="sm:w-full md:max-w-[250px] h-[48px]">
            Salvar alterações
          </Button>
        </div>
      </form>
    </div>
  );
}
