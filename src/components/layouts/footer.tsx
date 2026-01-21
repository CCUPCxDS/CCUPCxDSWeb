import '@/index.css'
import { FaFacebook, FaInstagram, FaDiscord } from 'react-icons/fa6'
import { IconContext } from 'react-icons'

function Footer() {
    const currentYear = new Date().getFullYear()

    const socialLinks = [
        {
            name: 'Facebook',
            url: 'https://www.facebook.com/CCUPCxDS/?locale=zh_TW',
            icon: <FaFacebook />
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/ccupcxds/',
            icon: <FaInstagram />
        },
        {
            name: 'Discord',
            url: 'https://discord.gg/YFK42UuedB',
            icon: <FaDiscord />
        }
    ]

    return (
        <div className='flex h-24 w-full items-center justify-center bg-blue-400/90 px-6 dark:bg-slate-900/90'>
            <div className='flex flex-col items-center justify-center gap-1'>
                <div className='flex h-12 items-center justify-center'>
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='mx-3 text-white/90 transition duration-200 hover:text-white'
                        >
                            <IconContext.Provider
                                value={{ className: 'react-icons' }}
                            >
                                {link.icon}
                            </IconContext.Provider>
                        </a>
                    ))}
                </div>
                <p className='text-sm text-white/90'>
                    &copy; {currentYear} CCUPC × Dream Start.
                </p>
            </div>
        </div>
    )
}

export default Footer
