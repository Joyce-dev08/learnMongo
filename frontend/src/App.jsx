import {useState} from 'react'
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import People from './pages/People.jsx'
import Posts from './pages/Posts.jsx'
import Home from './pages/Home.jsx'
import Notfound from './pages/Notfound.jsx'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar />

      <Routes>
         <Route path='/people' element={<People />} />
         <Route path='/posts' element={<Posts/>} />
         <Route path='/' element={<Home />} />
         <Route path='*' element={<Notfound />} />
      </Routes>

      <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
