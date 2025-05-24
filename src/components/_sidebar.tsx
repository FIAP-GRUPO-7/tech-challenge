"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdClose } from "react-icons/io";

const settings = [
  {
    label: "Inicio",
    value: "/",
  },
  {
    label: "Transferências",
    value: "/transferencias",
  },
  {
    label: "Investimentos",
    value: "/investimentos",
  },
  {
    label: "Outros serviços",
    value: "/other",
  },
];

export const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="rounded-md py-4 xl:min-w-[180px] xl:bg-white hidden md:block">
      <nav>
        <ul className="px-6 flex  flex-wrap justify-between xl:flex-col xl:w-full xl:text-center">
          {settings.map((navItem, index) => {
            const isLast = index === settings.length - 1;
            const isCurrent = pathname === navItem.value;
            return (
              <Link key={navItem.value} href={navItem.value}>
                <li
                  className={cn(
                    "flex-1 min-w-[115px] text-center py-4 hover:text-azul-escuro",
                    !isLast && "xl:border-b-2",
                    isCurrent && "border-b-2 text-azul-escuro font-bold"
                  )}
                >
                  {navItem.label}
                </li>
              </Link>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

interface HamburgerSidebarProps {
  show: boolean;
  onClose: () => void;
}

export const HamburgerSidebar = ({ show, onClose }: HamburgerSidebarProps) => {
  const pathname = usePathname();
  return (
    <div
      className={`bg-fundo-principal px-2 py-4 absolute top-0 left-0 w-[172px] min-h-[256px] transition-transform duration-300 ease-in-out ${
        show ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex w-full justify-end">
        <button className="cursor-pointer" onClick={onClose}>
          <IoMdClose color="black" size={24} />
        </button>
      </div>
      <div>
        <nav>
          <ul className="px-6 flex  flex-wrap justify-between xl:flex-col xl:w-full xl:text-center">
            {settings.map((navItem, index) => {
              const isLast = index === settings.length - 1;
              const isCurrent = pathname === navItem.value;
              return (
                <Link key={navItem.value} href={navItem.value}>
                  <li
                    className={cn(
                      "flex-1 min-w-[115px] text-black text-center py-2 border-b-2 hover:text-azul-escuro",
                      isLast && "border-b-0",
                      isCurrent && " text-azul-claro font-bold xl:border-b-0"
                    )}
                  >
                    {navItem.label}
                  </li>
                </Link>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};
