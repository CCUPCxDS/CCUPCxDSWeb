import './index.css'

import Navbar from './components/layouts/navbar.tsx'
import Footer from './components/layouts/footer.tsx'
import Schedule from './components/schedule.tsx'

function App() {

  return (
    <div className='h-lvh flex flex-col justify-between text-gray-900 dark:text-gray-100'>
      <Navbar />
      <div className='grow justify-center flex items-center'>
        <div>
          <h1 className='text-3xl text-center font-medium duration-500 mt-10 text-blue-800/60 dark:text-blue-300/50 dark:hover:text-blue-200 hover:text-blue-500/60'>
            如果文字是組成故事的模具，程式就是推動世界的齒輪。
          </h1>
          <p className='text-right text-md mt-4 text-gray-400 dark:text-gray-500'>
            —— D1stance
          </p>
          <Schedule />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
