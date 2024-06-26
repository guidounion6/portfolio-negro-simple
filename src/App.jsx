import React from 'react'
import Hero from './components/Hero/Hero'
import Work from './components/Work/Work'
import About from './components/About/About'
import NavBar from './components/NavBar/NavBar'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <Skills/>
      <About/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App