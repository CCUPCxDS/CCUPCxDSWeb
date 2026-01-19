import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from '@/contexts/ThemeContext.tsx'

import HomePage from '@/components/pages/HomePage'
import SchedulePage from '@/components/pages/SchedulePage'
import ErrorPage from '@/components/pages/ErrorPage'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/schedule' element={<SchedulePage />} />
                    <Route path='*' element={<ErrorPage />} />
                </Routes>
            </ThemeProvider>
        </BrowserRouter>
    </StrictMode>,
)
