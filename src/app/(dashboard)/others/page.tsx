import { Skeleton } from "@/components/_skeleton";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const ServicesModal = dynamic(() => import("@/components/ServicesModal"));

export default function PageOthers() {
  return (
    <section
      aria-labelledby="others-section-title"
      className="w-full flex flex-col xl:flex-row col-span-5 gap-4"
    >
      <h2 id="others-section-title" className="sr-only">
        Página de outros serviços
      </h2>

      <div className="flex flex-col flex-wrap flex-1 gap-4">
        <Suspense
          fallback={<Skeleton className="w-full rounded-md sm:h-[306px]" />}
        >
          <ServicesModal />
        </Suspense>
      </div>
    </section>
  );
}
