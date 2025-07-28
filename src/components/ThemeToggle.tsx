'use client'

import { useContext } from 'react'
import { ThemeContext } from '@/context/ThemeContext'

export default function ThemeToggle() {
  const { darkMode, toggleTheme } = useContext(ThemeContext)

  return (
    <button onClick={toggleTheme} style={{ marginBottom: '16px' }}>
      {darkMode ? 'Modo Claro' : 'Modo Escuro'}
    </button>
  )
}
