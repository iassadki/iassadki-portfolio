import { useState } from 'react'
// import reactLogo from './assets/images/react.svg'
// import viteLogo from './assets/images/vite.svg'
import Header from './elements/Header.tsx'
import Hero from './elements/Hero.tsx'
import Skills from './elements/Skills.tsx'
import Projects from './elements/Projects.tsx'
import Resume from './elements/Resume.tsx'
import Contact from './elements/Contact.tsx'
import './assets/styles/App.css'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Resume />
      <Contact />

    </>
  )
}

export default App
