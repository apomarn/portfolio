import React, { Component } from 'react'
import Anchor from '../components/anchor'
import styled from 'styled-components'
import { colors, textStyles, breakpoints } from '../styles'

const Container = styled.div`
  margin: 80px 16px;
  @media screen and (min-width: ${breakpoints.desktop}px) {
    margin: 80px 32px;
  }
`

const Separator = styled.div`
  width: 64px;
  height: 4px;
  background-color: ${colors.green};

  @media screen and (min-width: ${breakpoints.desktop}px) {
    width: 128px;
    height: 8px;
  }
`

const Headline = styled.p`
  margin: 16px 0 32px;
  ${textStyles.h3}
`

const ProfileImage = styled.img`
  width: 328px;
  heght: 328px;
  border-radius: 164px;
  margin-bottom: 32px;
`

const Quote = styled.p`
color: ${colors.blue}
margin:0;
${textStyles.h4}
@media screen and (min-width: ${breakpoints.desktop}px) {
  margin-top: 35px;
}
`

const Description = styled.p`
color: ${colors.gray}
margin: 32px 0;
${textStyles.h5}
`

const StyledAnchor = styled(Anchor)`
  padding: 8px 32px;
`

const AnchorContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

const Divider = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${breakpoints.desktop}px) {
    flex-direction: row;
    align-items: center;
  }
`

const AboutMeContainer = styled.div`
  @media screen and (min-width: ${breakpoints.desktop}px) {
    margin-left: 48px;
  }
`

class AboutMe extends Component {
  render() {
    return (
      <Container id='aboutme'>
        <Divider>
          <div>
            <Separator />
            <Headline>
              About <strong>Me</strong>
            </Headline>
            <ProfileImage src='https://res.cloudinary.com/apomarn/image/upload/v1559185081/portfolio/profile-picture.jpg' />
          </div>
          <AboutMeContainer>
            <Quote>" I love building software that can solve people and industries problems."</Quote>
            <Description>
              I worked for more than 4 years in the Food & Beverage department and since I always wanted to get involved
              in the tech industry I joined Ironhack to become a Full Stack Web Developer in a fast pace.
            </Description>
            <AnchorContainer>
              <StyledAnchor href='#contactme' flavor='rounded'>
                Contact Me
              </StyledAnchor>
              <StyledAnchor
                href='https://res.cloudinary.com/apomarn/image/upload/v1559281639/portfolio/anghypomar-resume.pdf'
                flavor='rounded'
                style={{ backgroundColor: colors.blue }}
              >
                See CV
              </StyledAnchor>
            </AnchorContainer>
          </AboutMeContainer>
        </Divider>
      </Container>
    )
  }
}

export default AboutMe
