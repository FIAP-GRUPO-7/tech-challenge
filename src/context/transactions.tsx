"use client";
import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";

export type TransactionType = "Depósito" | "Saque" | "Transferência";

export interface Extract {
  id: string;
  date: string;
  type: TransactionType;
  value: string;
}

export interface BankAccount {
  balance: number;
}

export interface TransactionContextType {
  extracts: Array<Extract>;
  addTransaction: (transaction: Extract) => void;
  deleteTransaction: (id: string) => void;
  editTransaction: (updatedTransaction: Extract) => void;
  balance: number;
}

export const TransactionContext = createContext<TransactionContextType>(
  {} as TransactionContextType
);

interface TransactionProviderProps {
  children: ReactNode;
}

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [extracts, setExtracts] = useState<Extract[]>(
    JSON.parse(localStorage.getItem("transactions") as string) || []
  );
  const [balance, setBalance] = useState<number>(0);

  const calculateBalance = (transactions: Extract[]) => {
    return transactions.reduce((acc, tx) => {
      const value = parseFloat(tx.value);
      return tx.type === "Depósito" ? acc + value : acc - value;
    }, 0);
  };

  const addTransaction = (transaction: Extract) => {
    const value = parseFloat(transaction.value);

    if (
      (transaction.type === "Saque" || transaction.type === "Transferência") &&
      value > balance
    ) {
      alert("Saldo insuficiente para essa transação.");
      return;
    }

    const updated = [transaction, ...extracts];
    setExtracts(updated);
    setBalance(calculateBalance(updated));
  };

  const deleteTransaction = (id: string) => {
    const updated = extracts.filter((tx) => tx.id !== id);
    setExtracts(updated);
    setBalance(calculateBalance(updated));
    alert("Transação removida com sucesso!");
  };

  const editTransaction = (updatedTransaction: Extract) => {
    const updated = extracts.map((tx) =>
      tx.id === updatedTransaction.id ? updatedTransaction : tx
    );

    setExtracts(updated);
    setBalance(calculateBalance(updated));
  };

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(extracts));
    localStorage.setItem("balance", balance.toString());
  }, [extracts, balance]);

  useEffect(() => {
    const stored = localStorage.getItem("transactions");
    if (stored) {
      const parsed = JSON.parse(stored) as Extract[];
      setExtracts(parsed);
      setBalance(calculateBalance(parsed));
    }
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        extracts,
        addTransaction,
        deleteTransaction,
        editTransaction,
        balance,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

export function useTransaction() {
  return useContext(TransactionContext);
}
