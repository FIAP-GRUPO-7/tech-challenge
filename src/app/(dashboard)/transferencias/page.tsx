import TransactionForm from "@/components/TransactionForm";

export default function PageTransferencias() {
  return (
    <div className="w-full flex flex-col xl:flex-row col-span-5 gap-4">
      <div className="flex flex-col flex-wrap flex-1 gap-4">
        <TransactionForm />
      </div>
    </div>
  );
}
