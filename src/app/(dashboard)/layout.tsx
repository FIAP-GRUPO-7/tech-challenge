"use client";

import { DropdownMenu } from "@/components/_dropmenu";
import { HamburgerSidebar, Sidebar } from "@/components/_sidebar";
import { useSidebar } from "@/hooks/sidebar";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { TransactionProvider } from "@/app/context/TransactionContext";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { show, toggleSidebar, onClose } = useSidebar();

  return (
    <TransactionProvider>
      <div className="min-h-screen flex flex-col bg-fundo-principal">
        <header className="relative bg-azul-escuro text-white h-[96px] flex items-center justify-between gap-4 px-16 md:justify-end lg:px-48 xl:64">
         <div className="flex md:hidden">
            <button className="cursor-pointer" onClick={toggleSidebar}>
             <GiHamburgerMenu size={32} color="white" />
           </button>
            <HamburgerSidebar show={show} onClose={onClose} />
         </div>
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <Image
               src="/avatar-fallback.svg"
               alt="avatar-fallback"
               width={54}
               height={54}
             />
           </DropdownMenu>
         </div>
        </header>
        <main className="flex-1 pt-4 flex flex-col gap-4 px-4 xl:flex-row sm:px-16 lg:px-48 xl:64">
         <Sidebar />
         {children}
        </main>
      </div>
    </TransactionProvider>
  );
}
