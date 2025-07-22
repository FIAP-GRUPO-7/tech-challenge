import {
  DollarSign,
  Repeat,
  Send,
  TrendingUp,
  FileText,
  Shield,
} from "lucide-react";

export default function QuickActions() {
  const actions = [
    { icon: <DollarSign size={28} />, label: "Pagar" },
    { icon: <Repeat size={28} />, label: "Transferir" },
    { icon: <Send size={28} />, label: "Pix" },
    { icon: <TrendingUp size={28} />, label: "Invesitr" },
    { icon: <FileText size={28} />, label: "Fatura" },
    { icon: <Shield size={28} />, label: "Seguros" },
  ];

  return (
    <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 bg-[var(--color-branco)] p-6 rounded-md shadow-md">
      {actions.map((action, index) => (
        <div
          key={index}
          className="flex flex-col items-center hover:scale-110 transition-transform duration-200 ease-in-out"
        >
          <div className="bg-gradient-to-br from-[var(--color-branco)] to-[var(--color-azul-claro)] p-4 rounded-full shadow-lg hover:shadow-xl transition">
            {action.icon}
          </div>
          <span className="mt-3 text-sm font-medium text-[var(--color-preto)]">
            {action.label}
          </span>
        </div>
      ))}
    </div>
  );
}
