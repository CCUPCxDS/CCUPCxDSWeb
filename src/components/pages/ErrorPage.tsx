import '@/index.css'

import Navbar from '@/components/layouts/navbar'
import Footer from '@/components/layouts/footer'

function SchedulePage() {
    return (
        <div className='flex h-svh flex-col text-gray-900 dark:text-gray-100'>
            <Navbar alwaysSolid />

            <div className='flex w-full flex-1 items-center justify-center px-6 pt-20'>
                <div className='text-center'>
                    <h3 className='mb-2 text-3xl font-bold text-red-600 dark:text-red-400'>
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
