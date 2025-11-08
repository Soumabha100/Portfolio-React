import React from 'react'
import Navbar from './Sections/Navbar'
import Hero from './Sections/Hero'
import About from './Sections/About'
import Projects from './Sections/Projects'
import Experiences from './Sections/Experiences'
import Contact from './Sections/Contact'
import Footer from './Sections/Footer'

const App = () => {
  return (
    <div className='container mx-auto max-w-7xl' >
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Experiences/>
      <Contact/>
      <Footer/>
      
    </div>
  )
}

export default App
