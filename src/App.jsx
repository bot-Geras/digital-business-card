import React from 'react'
import Info from "./components/Info"
import About from './components/About'
import Intrests from './components/Intrests'
import Footer from './components/Footer'

import './App.css'

function App() {
  return (
    <div className='app'>
      <div className="card--container">
        <Info />
        <About />
        <Intrests />
        <Footer />
      </div>
    </div>
  )
}

export default App
