"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { selectUser } from "@/features/auth";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const user = useSelector(selectUser);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/"); // redireciona para o login se não estiver logado
    }
  }, [user, router]);

  if (!user) return null; // ou um loader/spinner

  return <>{children}</>;
}
