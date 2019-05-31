import React from 'react'
import Hero from './sections/hero'
import './App.css'
import AboutMe from './sections/about-me'
import Skills from './sections/skills'
import ProjectInformation from './sections/projects'

function App() {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Skills />
      <ProjectInformation />
    </div>
  )
}

export default App
