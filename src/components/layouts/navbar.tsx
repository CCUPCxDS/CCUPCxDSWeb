import '../../index.css'
import { DarkModeToggle } from '@/components/DarkModeToggle';

function Navbar() {
    return (
        <div className="w-full h-16 bg-blue-500/80 dark:bg-blue-300/50 flex items-center px-8">
            <h1 className="text-white text-2xl font-semibold">CCUPC x DS</h1>
            <div className="ml-auto">
                <DarkModeToggle />
            </div>
        </div>
    )
}

export default Navbar
