"use client";
import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import { useRouter } from "next/navigation";

interface User {
  id: string;
  name: string;
  email: string;
  terms: boolean;
  password: string;
  // Adicione mais campos conforme necessário
}

interface AuthContextType {
  user: User | null;
  error: string;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(
    JSON.parse(localStorage.getItem("user") as string) || null
  );
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const signIn = async (email: string, password: string) => {
    try {
      setLoading(true);
      console.log(email, password);
      const users: Array<User> = JSON.parse(
        localStorage.getItem("users") || "[]"
      );
      const existing = users.find(
        (u) => u.email === email && u.password === password
      );

      console.log(existing);
      if (existing) {
        setUser(existing);
        localStorage.setItem("user", JSON.stringify(existing));
        router.push("/home");
      } else {
        setError("Usuário não encontrado!");
        throw new Error("Usuário não encontrado!");
      }
    } catch (err) {
      throw new Error("Usuário não encontrado!");
    } finally {
      setLoading(false);
    }
  };

  const signOut = () => {
    router.push("/");
    localStorage.removeItem("user");
    setLoading(false);
    setError("");
    setTimeout(() => {
      setUser(null);
    }, 1000);
  };

  useEffect(() => {
    const existing: User = JSON.parse(localStorage.getItem("user") as string);

    if (existing) {
      setUser(existing);
    } else {
      signOut();
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, error, loading, signIn, signOut, isAuthenticated: !!user }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
