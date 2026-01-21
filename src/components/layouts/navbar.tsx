import { useState, useEffect } from 'react'
import '../../index.css'
import { useTheme } from '@/components/hooks/useTheme'

export function DarkModeToggle({ className }: { className?: string }) {
    const { theme, toggleTheme } = useTheme()

    return (
        <button
            onClick={toggleTheme}
            className={`
        rounded-full p-2 text-blue-50 transition-all duration-300
        ease-in-out hover:bg-white/20
        dark:text-yellow-300 dark:hover:bg-blue-800/50
        ${className}
      `}
            aria-label='Toggle dark mode'
        >
            {theme === 'light' ? (
                <svg
                    className='h-6 w-6 transform transition-transform hover:-rotate-12'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                >
                    <path d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z' />
                </svg>
            ) : (
                <svg
                    className='h-6 w-6 transform transition-transform hover:rotate-45'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
                    />
                </svg>
            )}
        </button>
    )
}

function NavBtn({
    label,
    to,
    onClick,
    mobile = false
}: {
    label: string
    to: string
    onClick?: () => void
    mobile?: boolean
}) {
    const baseStyle = 'font-medium transition-all duration-200 rounded-lg mx-1'
    const desktopStyle =
        'px-4 py-2 text-sm text-gray-100 dark:text-blue-50 hover:bg-white/10 hover:text-white dark:hover:bg-blue-800'
    const mobileStyle =
        'block w-full py-3 px-4 text-center text-lg text-white hover:bg-blue-700/50 dark:hover:bg-blue-800/50 border-blue-400/20 last:border-0'

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
    alwaysSolid?: boolean
}

function Navbar({ alwaysSolid = false }: NavbarProps) {
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
        { label: '課程安排', to: '/schedule' }
    ]

    const shouldApplySolid = alwaysSolid || isScrolled

    return (
        <nav
            className={`
                fixed top-0 left-0 z-50 h-16 w-full transition-all duration-300 ease-in-out
                ${
                    shouldApplySolid
                        ? 'border-blue-500/30 bg-blue-600/90 shadow-lg backdrop-blur-md dark:bg-slate-900/90'
                        : 'bg-transparent'
                }
            `}
        >
            <div className='flex h-full w-full items-center justify-between px-6 md:px-8'>
                {/* LOGO */}
                <a
                    className='z-50 text-2xl font-bold tracking-wide text-white drop-shadow-md'
                    href='/'
                >
                    CCUPC × DS
                </a>

                <div className='hidden items-center md:flex'>
                    <div className='mr-2 flex items-center gap-1'>
                        {items.map((item) => (
                            <NavBtn
                                key={item.to}
                                label={item.label}
                                to={item.to}
                            />
                        ))}
                    </div>
                    <div className='mx-2 h-6 w-px bg-white'></div>
                    <DarkModeToggle />
                </div>

                <button
                    className='z-50 p-2 text-white focus:outline-none md:hidden'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? (
                        // Close Icon (X)
                        <svg
                            className='h-7 w-7'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M6 18L18 6M6 6l12 12'
                            />
                        </svg>
                    ) : (
                        // Hamburger Icon
                        <svg
                            className='h-7 w-7'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M4 6h16M4 12h16M4 18h16'
                            />
                        </svg>
                    )}
                </button>

                {/* --- Mobile Menu Overlay --- */}
                <div
                    className={`
                        absolute top-0 left-0 flex w-full origin-top transform
                        flex-col items-center space-y-4 bg-blue-600 px-6 pt-24 pb-8
                        shadow-xl transition-all duration-300 ease-in-out md:hidden dark:bg-slate-900
                        ${isMenuOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-full opacity-0'}
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
                    <div className='mt-4 flex w-full justify-center border-t border-blue-400/30 pt-4'>
                        <div className='flex items-center gap-3 text-white'>
                            <span className='text-sm opacity-80'>
                                切換模式 &nbsp;&gt;
                            </span>
                            <DarkModeToggle />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
