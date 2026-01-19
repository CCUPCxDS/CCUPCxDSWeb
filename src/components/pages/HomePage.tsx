import { useRef } from 'react'
import '@/index.css'

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
          src='/Cover.jpg' 
          alt='CCUPC x DS Logo'
        />
        <div className='absolute inset-0 bg-linear-to-b from-black/40 via-black/20 to-white dark:to-gray-950'></div>
      </div>
      
      {/* Hero Content */}
      <div className='relative h-full flex items-center justify-center px-6 pb-48'>
        <div className='max-w-4xl text-center'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 drop-shadow-lg'>
            CCUPC × Dream Start
          </h1>
          <p className='text-xl md:text-2xl text-white/90 font-bold drop-shadow-3xl'>
            中正大學競技程式隊
          </p>
        </div>

        <button 
          onClick={onScrollToContent}
          className='absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer hover:scale-110 transition-transform'
          aria-label='Scroll to content'
        >
          <svg className='w-6 h-6 text-blue-800 dark:text-white drop-shadow-lg' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
          </svg>
        </button>
      </div>
    </section>
  )
}

function QuoteSection({ sectionRef }: QuoteSectionProps) {
  return (
    <section
      id='quote-section'
      ref={sectionRef}
      className='py-20 px-6 bg-linear-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-700'
    >
      <div className='max-w-4xl mx-auto'>
        <blockquote className='text-center'>
          <p className='text-2xl md:text-3xl font-medium text-blue-600 dark:text-blue-400 mb-6 leading-relaxed'>
            如果文字是組成故事的模具，<br className='hidden md:block'/>
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

function HomePage() {
  const quoteRef = useRef<HTMLElement | null>(null)

  const scrollToContent = () => {
    quoteRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className='min-h-screen flex flex-col text-gray-900 dark:text-gray-100'>
      <Navbar />
      <WelcomeSection onScrollToContent={scrollToContent} />
      <QuoteSection sectionRef={quoteRef} />
      <Footer />
    </div>
  )
}

export default HomePage