"use client";

export default function BillsToPay() {
  const bills = [
    { name: "Aluguel", dueDate: "05/08", amount: 1200 },
    { name: "Internet", dueDate: "10/08", amount: 100 },
    { name: "Energia", dueDate: "12/08", amount: 180 },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow w-full">
      <h3 className="text-gray-600 text-sm mb-4">Contas a pagar</h3>
      <ul>
        {bills.map((bill, index) => (
          <li key={index} className="flex justify-between text-sm py-1 border-b last:border-none">
            <div>
              <span className="font-medium">{bill.name}</span>
              <span className="ml-2 text-gray-500">({bill.dueDate})</span>
            </div>
            <span className="text-red-500">R$ {bill.amount.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
