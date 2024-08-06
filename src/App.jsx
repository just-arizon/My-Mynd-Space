import React from 'react'
import './App.css';
import Home from './pages/Home';
import { createBrowserRouter, createRoutesFromElements, Route, Link, Outlet, RouterProvider } from 'react-router-dom';
import Resources from "./pages/Resources"
import Community from "./pages/Community"
import About from "./pages/About"
import Contact from "./pages/Contact"
import GetStarted from "./pages/GetStarted"
import Navbar from "./components/navbar";
import Footer from "./components/footer";
export default function App() {
  // const [count, setCount] = useState(0)
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
       <Route index element={<Home />} />
       <Route path="/resources" element={<Resources />} />
       <Route path="/community" element={<Community />} />
       <Route path="/about" element={<About />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/get-started" element={<GetStarted />} />
    </Route>
  )
)
  return (
    <div className=''>
      <Navbar />
      <RouterProvider router={router}/>
      <Footer />

    </div>
  )
}

const Root = () => {
  return <>
  <div>
    <Link to="/"></Link>
    </div>

    <div>
      <Outlet />
    </div>
  </>
}
