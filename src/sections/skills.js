import React, { Component } from 'react'
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

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 14px;
  text-align: center;
  color: ${colors.gray};
  ${textStyles.h5}
`

class Skills extends Component {
  render() {
    return (
      <Container>
        <Separator />
        <Headline>
          My <strong>Skills</strong>
        </Headline>
        <SkillsContainer>
          <div>
            <img src='https://res.cloudinary.com/apomarn/image/upload/v1559253909/portfolio/skills.png' />
            <p>Autodidact</p>
          </div>
          <div>
            <img src='https://res.cloudinary.com/apomarn/image/upload/v1559253909/portfolio/skills.png' />
            <p>Autodidact</p>
          </div>
          <div>
            <img src='https://res.cloudinary.com/apomarn/image/upload/v1559253909/portfolio/skills.png' />
            <p>Autodidact</p>
          </div>
          <div>
            <img src='https://res.cloudinary.com/apomarn/image/upload/v1559253909/portfolio/skills.png' />
            <p>Autodidact</p>
          </div>
        </SkillsContainer>
      </Container>
    )
  }
}

export default Skills
