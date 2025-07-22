"use client";
import { createContext, useContext, useEffect, useState } from "react";

export type Extract = {
  id: string;
  type: string;
  value: number;
  date: string;
};

type TransactionContextType = {
  transactions: Extract[];
  addTransaction: (transaction: Extract) => void;
  editTransaction: (id: string, newValue: number) => void;
  deleteTransaction: (id: string) => void;
};

const TransactionContext = createContext<TransactionContextType | undefined>(undefined);

export function TransactionProvider({ children }: { children: React.ReactNode }) {
  const [transactions, setTransactions] = useState<Extract[]>([]);

  // Efeito 1: Carregar transações do localStorage na montagem inicial
  useEffect(() => {
    if (typeof window !== 'undefined') { // Garante que estamos no cliente
      const stored = localStorage.getItem("transactions");
      if (stored) {
        try {
          setTransactions(JSON.parse(stored));
        } catch (e) {
          console.error("Erro ao parsear transações do localStorage:", e);
          localStorage.removeItem("transactions"); // Limpa dados corrompidos
        }
      }
    }
  }, []); // Rodar apenas uma vez na montagem

  // Efeito 2: Salvar transações no localStorage sempre que elas mudarem
  useEffect(() => {
    if (typeof window !== 'undefined') { // Garante que estamos no cliente
      localStorage.setItem("transactions", JSON.stringify(transactions));
    }
  }, [transactions]); // Rodar sempre que 'transactions' mudar

  function addTransaction(transaction: Extract) {
    setTransactions((prev) => [...prev, transaction]);
  }

  function editTransaction(id: string, newValue: number) {
    setTransactions((prev) =>
      prev.map((item) => (item.id === id ? { ...item, value: newValue } : item))
    );
  }

  function deleteTransaction(id: string) {
    setTransactions((prev) => prev.filter((item) => item.id !== id));
  }

  // <!-- SCRIPT PARA RECEBER DADOS DO USUARIO DA URL -->
  // **TODO ESTE BLOCO FOI MOVIDO PARA DENTRO DE UM NOVO useEffect**
  useEffect(() => {
    if (typeof window !== 'undefined') { // **CRUCIAL: Garante que estamos no cliente**
      const queryString = window.location.search;
      const params = new URLSearchParams(queryString);
      const encodedData = params.get('data');

      if (encodedData) {
        try {
          const decodedString = decodeURIComponent(encodedData);
          const receivedData = JSON.parse(decodedString);
          console.log("Dados recebidos da URL no TransactionContext:", receivedData);

          // Armazena os dados no localStorage do host (localhost:3000)
          // Estes dados provavelmente são do microfrontend (localhost:9000)
          // e estão sendo enviados de volta para o host.
          if (receivedData.user) {
            localStorage.removeItem('user'); // Remover antes de setar para garantir atualização limpa
            localStorage.setItem('user', JSON.stringify(receivedData.user));
          }
          if (receivedData.users) {
            localStorage.removeItem('users'); // Remover antes de setar
            localStorage.setItem('users', JSON.stringify(receivedData.users));
          }
          if (receivedData.transactions) {
            localStorage.removeItem('transactions'); // Remover antes de setar
            localStorage.setItem('transactions', JSON.stringify(receivedData.transactions));
            // Opcional: Você pode querer mesclar ou substituir as transações do contexto aqui
            setTransactions(receivedData.transactions);
          }

          // Opcional: Limpar a URL após o processamento
          // history.replaceState(null, '', window.location.pathname);
          // Cuidado: Limpar a URL aqui pode interferir com outras lógicas se você
          // tiver múltiplos provedores ou componentes lendo a URL.
        } catch (error) {
          console.error('Erro ao processar dados da URL no TransactionContext:', error);
        }
      }
    }
  }, []); // Rodar apenas uma vez na montagem do cliente

  return (
    <TransactionContext.Provider
      value={{ transactions, addTransaction, editTransaction, deleteTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

export function useTransactionContext() {
  const context = useContext(TransactionContext);
  if (!context) {
    throw new Error("useTransactionContext deve ser usado dentro de TransactionProvider");
  }
  return context;
}