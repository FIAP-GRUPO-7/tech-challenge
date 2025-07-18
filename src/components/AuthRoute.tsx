"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { selectUser } from "@/features/auth";

export function AuthRoute({ children }: { children: React.ReactNode }) {
  const user = useSelector(selectUser);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/home");
    }
  }, [user, router]);

  return <>{children}</>;
}
