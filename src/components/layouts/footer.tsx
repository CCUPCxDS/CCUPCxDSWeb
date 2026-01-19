import '../../index.css'

function Footer() {
    const currentYear = new Date().getFullYear()

    const socialLinks = [
        {
            name: 'Facebook',
            url: 'https://www.facebook.com/CCUPCxDS/?locale=zh_TW',
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/ccupcxds/',
        },
        {
            name: 'Discord',
            url: 'https://discord.gg/YFK42UuedB'
        }
    ]

    return (
        <div className="w-full h-16 justify-center bg-blue-600/90 dark:bg-slate-900/90 flex items-center px-6">
            <div className='flex'>
                <p className="text-sm text-white/90">
                    &copy; {currentYear} CCUPC × Dream Start.
                </p>
            </div>
            
        </div>
    )
}

export default Footer