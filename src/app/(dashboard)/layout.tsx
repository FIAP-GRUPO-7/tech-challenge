"use client";
import { Sidebar } from "@/components/_sidebar";
import { Skeleton } from "@/components/_skeleton";
import { ExtractList } from "@/components/DashboardComponents";
import { Header } from "@/components/HeaderDashboard";
import { selectUser } from "@/features/auth";
import dynamic from "next/dynamic";
import { usePathname, useRouter } from "next/navigation";
import { Suspense, useEffect } from "react";
import { useSelector } from "react-redux";

const GreetingCard = dynamic(() =>
  import("@/components/DashboardComponents").then(
    (components) => components.GreetingCard
  )
);

const hiddenPathnames = ["/account"];
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = useSelector(selectUser);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!user) {
      router.push("/"); // redireciona para o login se não estiver logado
    }
  }, [user, router]);

  return (
    <div className="min-h-screen flex flex-col bg-fundo-principal">
      <Header />
      <div className="flex-1 pt-4 flex flex-col gap-4 px-4 xl:flex-row sm:px-16 lg:px-48 xl:64">
        <Sidebar />
        <main className="flex-1 flex flex-col gap-4">
          <Suspense
            fallback={
              <Skeleton className="w-full bg-azul-escuro rounded-md sm:h-[406px]" />
            }
          >
            <GreetingCard show={!hiddenPathnames.includes(pathname)} />
          </Suspense>
          {children}
        </main>
        <ExtractList show={!hiddenPathnames.includes(pathname)} />
      </div>
    </div>
  );
}
