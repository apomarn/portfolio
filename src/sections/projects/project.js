import React, { Component } from 'react'
import styled from 'styled-components'
import { colors, breakpoints, textStyles } from '../../styles'
import Anchor from '../../components/anchor'

const Container = styled.div`
  position: relative;
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
class Project extends Component {
  render() {
    return (
      <div>
        <Container>
          <img src={this.props.image} width='100%' />
          <StyledAnchor flavor='rounded'>TRY IT</StyledAnchor>
        </Container>
        <Description>
          <Title>{this.props.title}</Title>
          <Summary>{this.props.description}</Summary>
        </Description>
        {this.props.technologies.map(image => {
          return <img src={image} key={image} />
        })}
      </div>
    )
  }
}

export default Project
