import React, { Component } from 'react'
import Anchor from '../components/anchor'
import styled from 'styled-components'
import { colors, textStyles, breakpoints } from '../styles'
import Media from 'react-media'

const Container = styled.div`
  align-content: center;
  background-image: url('https://res.cloudinary.com/apomarn/image/upload/v1559203741/portfolio/hero-image.png');
  background-position: center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 144px 0;
  position: relative;
  text-align: center;
`

const Headline1 = styled.p`
  color: ${colors.white};
  ${textStyles.h2}
  margin: 0;
  @media screen and (min-width: ${breakpoints.desktop}px) {
    text-align: center;
    ${textStyles.h1}
  }
`

const Headline2 = styled.p`
  color: ${colors.white};
  ${textStyles.h2Bold}
  @media screen and (min-width: ${breakpoints.desktop}px) {
    text-align: center;
    ${textStyles.h1Bold}
  }
`

const Headline3 = styled.p`
  color: ${colors.white};
  ${textStyles.h5}
  margin: 0;
  @media screen and (min-width: ${breakpoints.desktop}px) {
    text-align: center;
    ${textStyles.h3}
    margin-top: 20px;
  }
`

const Buttom = styled(Anchor)`
  display: flex;
  align-self: center;
  position: absolute;
  justify-content: center;
  bottom: 80px;

  @media screen and (min-width: ${breakpoints.desktop}px) {
    top: 300px;
  }
`

class Hero extends Component {
  render() {
    return (
      <Container>
        <Media query={`(max-width: ${breakpoints.desktop}px)`}>
          {matches =>
            matches ? (
              <>
                <Headline1>Hello, I'm</Headline1>
                <Headline2>Anghy Pomar</Headline2>
              </>
            ) : (
              <>
                <Headline1>
                  Hey, I'm<strong> Anghy Pomar</strong>
                </Headline1>
              </>
            )
          }
        </Media>
        <Headline3>JavaScript Full Stack Web Developer</Headline3>
        <Buttom href='#aboutme' flavor='rounded'>
          More about me
        </Buttom>
      </Container>
    )
  }
}

export default Hero
