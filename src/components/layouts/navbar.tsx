import { useState, useEffect } from 'react'
import '../../index.css'
import { useTheme } from '@/components/hooks/useTheme'

export function DarkModeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className={`
        p-2 rounded-full transition-all duration-300 ease-in-out
        hover:bg-white/20 text-blue-50
        dark:text-yellow-300 dark:hover:bg-blue-800/50
        ${className}
      `}
      aria-label="Toggle dark mode"
    >
      {theme === 'light' ? (
        <svg className="w-6 h-6 transform transition-transform hover:-rotate-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ) : (
        <svg className="w-6 h-6 transform transition-transform hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )}
    </button>
  )
}

function NavBtn({ label, to, onClick, mobile = false }: { label: string; to: string; onClick?: () => void; mobile?: boolean }) {
    const baseStyle = 'font-medium transition-all duration-200 rounded-lg mx-1'
    const desktopStyle = 'px-4 py-2 text-sm text-gray-100 dark:text-blue-50 hover:bg-white/10 hover:text-white dark:hover:bg-blue-800'
    const mobileStyle = 'block w-full py-3 px-4 text-center text-lg text-white hover:bg-blue-700/50 dark:hover:bg-blue-800/50 border-blue-400/20 last:border-0'

    return (
        <a 
            href={to} 
            onClick={onClick}
            className={`${baseStyle} ${mobile ? mobileStyle : desktopStyle}`}
        >
            {label}
        </a>
    )
}

interface NavbarProps {
    alwaysSolid?: boolean;
}

function Navbar( { alwaysSolid = false }: NavbarProps ) {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const items = [
        { label: '關於我們', to: '/about' },
        { label: '課程安排', to: '/schedule' },
    ]

    const shouldApplySolid = alwaysSolid || isScrolled

    return (
        <nav 
            className={`
                fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out h-16
                ${shouldApplySolid
                    ? 'bg-blue-600/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg border-blue-500/30'
                    : 'bg-transparent'
                }
            `}
        >
            <div className="w-full h-full px-6 md:px-8 flex items-center justify-between">
                {/* LOGO */}
                <a className="text-white text-2xl font-bold tracking-wide drop-shadow-md z-50" href="/">
                    CCUPC x DS
                </a>

                <div className="hidden md:flex items-center">
                    <div className="flex items-center gap-1 mr-2">
                        {items.map((item) => (
                            <NavBtn key={item.to} label={item.label} to={item.to}/>
                        ))}
                    </div>
                    <div className="h-6 w-px bg-white mx-2"></div>
                    <DarkModeToggle />
                </div>

                <button 
                    className="md:hidden text-white p-2 focus:outline-none z-50"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? (
                        // Close Icon (X)
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        // Hamburger Icon
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>

                {/* --- Mobile Menu Overlay --- */}
                <div 
                    className={`
                        absolute top-0 left-0 w-full bg-blue-600 dark:bg-slate-900 shadow-xl
                        flex flex-col items-center pt-24 pb-8 px-6 space-y-4
                        transition-all duration-300 ease-in-out transform origin-top md:hidden
                        ${isMenuOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'}
                    `}
                >
                    {items.map((item) => (
                        <NavBtn 
                            key={item.to}
                            label={item.label}
                            to={item.to}
                            mobile
                            onClick={() => setIsMenuOpen(false)}
                        />
                    ))}
                    
                    {/* Mobile Dark Toggle */}
                    <div className="mt-4 pt-4 w-full flex justify-center border-t border-blue-400/30">
                         <div className="flex items-center gap-3 text-white">
                            <span className="text-sm opacity-80">切換模式 &nbsp;&gt;</span>
                            <DarkModeToggle />
                         </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar