import '../../index.css'

function Footer() {
    const currentYear = new Date().getFullYear()

    // const socialLinks = [
    //     {
    //         name: 'Facebook',
    //         url: 'https://www.facebook.com/CCUPCxDS/?locale=zh_TW',
    //     },
    //     {
    //         name: 'Instagram',
    //         url: 'https://www.instagram.com/ccupcxds/',
    //     },
    //     {
    //         name: 'Discord',
    //         url: 'https://discord.gg/YFK42UuedB'
    //     }
    // ]

    return (
        <div className='flex h-16 w-full items-center justify-center bg-blue-600/90 px-6 dark:bg-slate-900/90'>
            <div className='flex'>
                <p className='text-sm text-white/90'>
                    &copy; {currentYear} CCUPC × Dream Start.
                </p>
            </div>
        </div>
    )
}

export default Footer
