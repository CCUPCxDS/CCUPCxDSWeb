import '../../index.css'

function Footer() {
    const currentYear = new Date().getFullYear()
    return (
        <div className="w-full h-16 justify-center bg-blue-500/80 dark:bg-blue-300/50 flex items-center px-4">
            <h1 className="text-white text-md font-mono">CCU Programming Contest Team © {currentYear}</h1>
        </div>
    )
}

export default Footer