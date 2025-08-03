import { Skeleton } from "@/components/_skeleton";
import dynamic from "next/dynamic";
import { Suspense } from "react";
const InvestmentSection = dynamic(
  () => import("@/components/InvestmentSection")
);

export default function PageInvestments() {
  return (
    <section
      aria-labelledby="investments-section-title"
      className="w-full flex flex-col xl:flex-row col-span-5 gap-4"
    >
      <h2 id="investments-section-title" className="sr-only">
        Página de investimentos
      </h2>
      <div className="flex flex-col flex-wrap flex-1 gap-4">
        <Suspense
          fallback={<Skeleton className="w-full rounded-md sm:h-[306px]" />}
        >
          <InvestmentSection />
        </Suspense>
      </div>
    </section>
  );
}
