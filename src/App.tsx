import '@/index.css'

import Navbar from '@/components/layouts/Navbar'
import Footer from '@/components/layouts/Footer'
import Schedule from '@/components/Schedule'

function App() {
  const scrollToContent = () => {
    const element = document.getElementById('quote-section')
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  return (
    <div className='min-h-screen flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100'>
      <Navbar />
      
      {/* Hero Section */}
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
        <div className='relative h-full flex items-center justify-center px-6'>
          <div className='max-w-4xl text-center'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 drop-shadow-lg'>
              CCUPC × Dream Start
            </h1>
            <p className='text-xl md:text-2xl text-white/90 font-bold drop-shadow-md'>
              這裡是夢想開始的地方，迎接程式設計的無限可能。
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToContent}
          className='absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer hover:scale-110 transition-transform'
          aria-label='Scroll to content'
        >
          <svg className='w-6 h-6 text-blue-800 dark:text-white drop-shadow-lg' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
          </svg>
        </button>
      </section>

      {/* Quote Section */}
      <section id='quote-section' className='py-20 px-6 bg-linear-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900'>
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

      {/* Schedule Section */}
      <section className='py-16 px-6 bg-gray-50 dark:bg-gray-900'>
        <div className='max-w-6xl mx-auto'>
          <Schedule />
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App