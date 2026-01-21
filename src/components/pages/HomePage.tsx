import { useRef } from 'react'
import '@/index.css'
import CoverImage from '@/assets/Cover.jpg'
import LogoImage from '@/assets/logo.png'

import Navbar from '@/components/layouts/navbar'
import Footer from '@/components/layouts/footer'

type WelcomeSectionProps = {
    onScrollToContent: () => void
}

type QuoteSectionProps = {
    sectionRef: React.RefObject<HTMLElement | null>
}

function WelcomeSection({ onScrollToContent }: WelcomeSectionProps) {
    return (
        <section className='relative h-[calc(100vh-3rem)] w-full overflow-hidden'>
            {/* Background Image with Overlay */}
            <div className='absolute inset-0'>
                <img
                    className='h-full w-full object-cover'
                    src={CoverImage}
                    alt='CCUPC x DS Logo'
                />
                <div className='absolute inset-0 bg-linear-to-b from-black/40 via-black/20 to-white dark:to-gray-950'></div>
            </div>

            {/* Hero Content */}
            <div className='relative flex h-full items-center justify-center px-6 pb-48'>
                <div className='max-w-4xl text-center'>
                    <h1 className='mb-8 text-4xl font-bold text-white drop-shadow-lg md:text-5xl lg:text-6xl'>
                        CCUPC × Dream Start
                    </h1>
                    <p className='drop-shadow-3xl text-xl font-bold text-white/90 md:text-2xl'>
                        中正大學競技程式隊
                    </p>
                </div>

                <button
                    onClick={onScrollToContent}
                    className='absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer transition-transform hover:scale-110'
                    aria-label='Scroll to content'
                >
                    <svg
                        className='h-6 w-6 text-blue-800 drop-shadow-lg dark:text-white'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M19 9l-7 7-7-7'
                        />
                    </svg>
                </button>
            </div>
        </section>
    )
}

function QuoteSection() {
    return (
        <section id='quote-section' className='px-6 py-20'>
            <div className='mx-auto max-w-4xl'>
                <blockquote className='text-center'>
                    <p className='mb-6 text-2xl leading-relaxed font-medium text-blue-400 md:text-3xl'>
                        如果文字是組成故事的地基，
                        <br className='hidden md:block' />
                        程式就是推動世界的齒輪。
                    </p>
                    <footer className='text-lg text-gray-500 dark:text-gray-400'>
                        —— D1stance
                    </footer>
                </blockquote>
            </div>
        </section>
    )
}

function ShortIntroSection({ sectionRef }: QuoteSectionProps) {
    return (
        <section className='my-12' ref={sectionRef}>
            <div className='container mx-auto max-w-6xl px-8 md:px-12'>
                <div className='flex flex-col items-center gap-12 md:flex-row'>
                    <div className='group relative shrink-0'>
                        <div className='absolute -inset-1 rounded-full bg-linear-to-r from-blue-600 to-cyan-400 opacity-25 blur transition duration-200 group-hover:opacity-50'></div>
                        <img
                            src={LogoImage}
                            alt='CCUPC Logo'
                            className='relative h-64 w-64 rounded-xl object-contain drop-shadow-xl'
                        />
                    </div>

                    <div className='text-center md:text-left'>
                        <h2 className='mb-6 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white'>
                            何謂{' '}
                            <span className='bg-linear-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent dark:from-teal-400 dark:to-blue-400'>
                                中正競程
                            </span>
                            ？
                        </h2>

                        <div className='space-y-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300'>
                            <p>
                                中正大學競技程式隊（CCUPC）是隸屬於中正大學資工系的社群組織，
                                <strong className='font-medium text-gray-900 dark:text-white'>
                                    歡迎來自各系所年級
                                </strong>
                                對程式設計有興趣的同學加入。
                            </p>
                            <p>
                                我們透過從零開始的入門訓練，培養對於競技程式的興趣與熱情。與傳統競賽導向不同，我們更重視
                                <span className='border-b-2 border-blue-200 dark:border-blue-800'>
                                    基礎的扎實
                                </span>
                                與
                                <span className='border-b-2 border-blue-200 dark:border-blue-800'>
                                    程式設計能力的提升
                                </span>
                                。
                                參加競賽只是一種認知自我能力的方式，也是一個讓自己成長的過程。
                            </p>
                            <p>
                                我們相信，競技程式不僅能提升邏輯思維與問題解決能力，更能培養團隊合作與溝通技巧。
                                加入我們，一起在程式的世界中探索無限可能！
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function HomePage() {
    const quoteRef = useRef<HTMLElement | null>(null)

    const scrollToContent = () => {
        quoteRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }

    return (
        <div className='flex min-h-screen flex-col text-gray-900 dark:text-gray-100'>
            <Navbar />
            <WelcomeSection onScrollToContent={scrollToContent} />
            <div className='bg-linear-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-700'>
                <ShortIntroSection sectionRef={quoteRef} />
                <QuoteSection />
            </div>

            <Footer />
        </div>
    )
}

export default HomePage
