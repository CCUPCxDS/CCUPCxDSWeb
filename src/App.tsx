import './index.css'
import Navbar from './components/navbar.tsx'
import Footer from './components/footer.tsx'

function App() {

  return (
    <div className='h-lvh flex flex-col justify-between'>
      <Navbar />
      <div className='grow justify-center flex items-center'>
        <div>
          <h1 className='text-3xl font-bold text-center mt-10'>
            Welcome to CCUPC x DS Web!
          </h1>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
