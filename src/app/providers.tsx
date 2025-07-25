"use client";

import { Provider } from "react-redux";
import { makeStore } from "@/store";
import { ThemeProvider } from '@/context/ThemeContext'

const store = makeStore();

export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </Provider>
}
