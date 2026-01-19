import '@/index.css'

import Navbar from '@/components/layouts/navbar'
import Footer from '@/components/layouts/footer'

function SchedulePage() {
  return(
    <div className='h-svh flex flex-col text-gray-900 dark:text-gray-100'>
      
        <Navbar alwaysSolid/>

        <div className='flex-1 w-full flex items-center justify-center pt-20 px-6'>
            <div className='text-center'>
                <h3 className='text-3xl font-bold mb-2 text-red-600 dark:text-red-400'>
                    404
                </h3>
                <p className='text-xl font-medium text-gray-600 dark:text-gray-300'>
                    頁面不存在 或 還在建置中
                </p>
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default SchedulePage