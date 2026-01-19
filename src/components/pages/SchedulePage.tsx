import '@/index.css'

import Navbar from '@/components/layouts/navbar'
import Footer from '@/components/layouts/footer'

function Schedule() {
    return (
        <>
          <hr className='my-6'></hr>
          <div className='text-center flex items-center flex-col my-5 w-full'>
              <iframe src="https://calendar.google.com/calendar/embed?src=c19faecd118b61d5dbdd0970016e0b41328e60bdca943c0b8405640bc9861500%40group.calendar.google.com&ctz=Asia%2FTaipei" className='rounded-lg w-[80%] md:w-3xl h-128'></iframe>
          </div>
        </>
    )
}

function SchedulePage() {
  return(
    <div className='min-h-screen flex flex-col text-gray-900 dark:text-gray-100'>
      <Navbar alwaysSolid/>

        <div className='flex-1 w-full flex items-center justify-center pt-20 px-6'>
          <div className='mx-auto flex flex-col items-center justify-center w-full'>
            <h3 className='text-2xl font-semibold mb-3'>
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