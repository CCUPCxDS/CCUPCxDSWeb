import '@/index.css'

import Navbar from '@/components/layouts/navbar'
import Footer from '@/components/layouts/footer'

function Schedule() {
    return (
        <>
            <hr className='my-6'></hr>
            <div className='my-5 flex w-full flex-col items-center text-center'>
                <iframe
                    src='https://calendar.google.com/calendar/embed?src=c19faecd118b61d5dbdd0970016e0b41328e60bdca943c0b8405640bc9861500%40group.calendar.google.com&ctz=Asia%2FTaipei'
                    className='h-128 w-[95%] rounded-lg md:w-3xl'
                ></iframe>
            </div>
        </>
    )
}

function SchedulePage() {
    return (
        <div className='flex min-h-screen flex-col text-gray-900 dark:text-gray-100'>
            <Navbar alwaysSolid />

            <div className='flex w-full flex-1 items-center justify-center px-6 pt-20'>
                <div className='mx-auto flex w-full flex-col items-center justify-center'>
                    <h3 className='mb-3 text-2xl font-semibold'>
                        CCUPC 課程行事曆
                    </h3>
                    <Schedule />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default SchedulePage
