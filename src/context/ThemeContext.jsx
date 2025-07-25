import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('darkMode') === 'true';
    setDarkMode(saved);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  function toggleTheme() {
    setDarkMode(prev => !prev);
  }

  function setLightTheme() {
    localStorage.removeItem("darkMode");
    setDarkMode(false);
  }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme, setLightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
