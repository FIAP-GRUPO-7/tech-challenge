import { DollarSign, Repeat, Send, TrendingUp, FileText, Shield } from "lucide-react";

export default function QuickActions() {
  const actions = [
    { icon: <DollarSign size={28} />, label: "Pagar" },
    { icon: <Repeat size={28} />, label: "Transferir" },
    { icon: <Send size={28} />, label: "Pix" },
    { icon: <TrendingUp size={28} />, label: "Investir" },
    { icon: <FileText size={28} />, label: "Fatura" },
    { icon: <Shield size={28} />, label: "Seguros" },
  ];

  return (
    <div className="flex justify-between gap-4 bg-[#999999] p-10 rounded-lg">
      {actions.map((action, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="bg-white p-3 rounded-full shadow-md">
            {action.icon}
          </div>
          <span className="mt-2 text-sm text-gray-700">{action.label}</span>
        </div>
      ))}
    </div>
  );
}
