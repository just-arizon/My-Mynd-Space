import { useState } from 'react'
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Newsletter from './components/newsletter';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className=''>
    <Navbar />
    <Newsletter />
    <Footer />
    </div>
  )
}

export default App
