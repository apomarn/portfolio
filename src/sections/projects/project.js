import React, { Component } from 'react'
import styled from 'styled-components'
import { colors, breakpoints, textStyles } from '../../styles'
import Anchor from '../../components/anchor'

const Container = styled.div`
  position: relative;
`

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  @media screen and (min-width: ${breakpoints.desktop}px) {
    height: 200px;
    object-fit: cover;
  }
`

const StyledAnchor = styled(Anchor)`
  position: absolute;
  bottom: -17px;
  right: 15px;
  width: 50px;
  height: 30px;
  line-height: 30px;
`
const Description = styled.div`
  margin: 0 16px;
  color: ${colors.gray};
`

const Title = styled.p`
  ${textStyles.h4Bold}
`

const Summary = styled.p`
  ${textStyles.h5}
`

const Projects = styled.div`
  width: 100%;
  @media screen and (min-width: ${breakpoints.desktop}px) {
    margin: 0 30px 30px 30px;
    background-color: #cff5bf;
    width: 250px;
  }
`

const ToolsImages = styled.img`
  border: 2px solid ${colors.green};
  border-radius: 20px;
  margin: 10px 5px;
  padding: 5px 10px;
  width: 30px;
  height: 20px;
  background-color: ${colors.white};
`

class Project extends Component {
  render() {
    return (
      <Projects>
        <Container>
          <Image src={this.props.image} />
          <div>
            <StyledAnchor href={this.props.href} flavor='rounded'>
              TRY IT
            </StyledAnchor>
          </div>
        </Container>
        <Description>
          <Title>{this.props.title}</Title>
          <Summary>{this.props.description}</Summary>
        </Description>
        {this.props.technologies.map(image => {
          return <ToolsImages src={image} key={image} />
        })}
      </Projects>
    )
  }
}

export default Project
