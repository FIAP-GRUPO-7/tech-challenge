"use client";
import { Skeleton } from "@/components/_skeleton";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const CardsModal = dynamic(() => import("@/components/CardsModal"));

export default function Cartoes() {
  return (
    <section
      aria-labelledby="cartoes-title"
      className="w-full flex flex-col xl:flex-row col-span-5 gap-4"
    >
      <h2 id="cartoes-title" className="sr-only">
        Cartões
      </h2>

      <div className="flex flex-col flex-wrap flex-1 gap-4">
        <Suspense
          fallback={<Skeleton className="w-full rounded-md sm:h-[306px]" />}
        >
          <CardsModal />
        </Suspense>
      </div>
    </section>
  );
}
