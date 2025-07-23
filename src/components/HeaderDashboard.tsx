"use client";

import Image from "next/image";
import { HamburgerSidebar } from "./_sidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import { DropdownMenu } from "./_dropmenu";
import { useSidebar } from "@/hooks/sidebar";

export const Header = () => {
  const { show, toggleSidebar, onClose } = useSidebar();
  return (
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
  );
};
