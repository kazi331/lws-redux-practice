import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/home'
import Videos from './pages/videos'


const App = () => {
  return (

    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/videos/:id' element={<Videos />} />
      </Routes>
      <Footer />
    </Router>

  )
}

export default App