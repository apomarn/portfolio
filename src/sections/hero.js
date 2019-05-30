import React, { Component } from 'react'
import Anchor from '../components/anchor'

class Hero extends Component {
  render() {
    return (
      <div>
        <h2>Hey, I'm</h2>
        <h2>Anghy Pomar</h2>
        <h5>Javascript Full Stack Web Developer</h5>
        <Anchor flavor='rounded'>More about me</Anchor>
      </div>
    )
  }
}

export default Hero
