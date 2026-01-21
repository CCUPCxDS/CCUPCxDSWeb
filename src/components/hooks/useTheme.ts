// src/hooks/useTheme.ts
import { useContext } from 'react'
import type { ThemeContextType } from '../../contexts/ThemeContext'
import { ThemeContext } from '../../contexts/ThemeContext'

export function useTheme(): ThemeContextType {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider')
    }
    return context
}
