import React, { Component } from 'react'
import styled from 'styled-components'
import { colors, textStyles, breakpoints } from '../styles'

const Container = styled.div`
  background-color: #cff5bf;
  height: 240px;
  margin-top: 34px;
  width: auto;
`

const Headline = styled.p`
  color: ${colors.gray};
  text-align: center;
  padding-top: 34px;
  ${textStyles.h3Bold}
`

const ContactOption = styled.div`
  display: flex;
  justify-content: space-around;
`

class Contact extends Component {
  render() {
    return (
      <Container id='contactme'>
        <Headline>Contact Me</Headline>
        <ContactOption>
          <a href='https://www.linkedin.com/in/anghypomar/'>
            <img
              src='https://res.cloudinary.com/apomarn/image/upload/v1559279401/portfolio/Linkedin_abaota.png'
              width='35'
            />
          </a>
          <a href='https://github.com/apomarn'>
            <img
              src='https://res.cloudinary.com/apomarn/image/upload/v1559279401/portfolio/Github_yteznz.png'
              width='35'
            />
          </a>
          <a href='mailto:anghyf27@hotmail.com'>
            <img
              src='https://res.cloudinary.com/apomarn/image/upload/v1559279401/portfolio/Email_oelhbz.png'
              width='35'
            />
          </a>
        </ContactOption>
      </Container>
    )
  }
}

export default Contact
