import React from 'react'
import Hero from './sections/hero'
import './App.css'
import AboutMe from './sections/about-me'
import Skills from './sections/skills'
import ProjectInformation from './sections/projects'
import Tools from './sections/tools'
import Contact from './sections/contact'

function App() {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Skills />
      <ProjectInformation />
      <Tools />
      <Contact />
    </div>
  )
}

export default App
