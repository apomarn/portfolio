import React, { Component } from 'react'
import styled from 'styled-components'
import { colors, textStyles } from '../styles'

const roundedStyles = `
  color: ${colors.white};
  width: 208px;
  height: 48px;
  background-color: ${colors.green};
  border-radius: 25px;
  line-height: 48px;
  padding: 8px 32px;
`

const StyledLink = styled.a`
  text-decoration: none;
  text-align: center;

  ${textStyles.h5Bold}

  ${props => {
    if (props.flavor === 'rounded') {
      return roundedStyles
    }

    if (props.flavor === 'plain') {
      return `color: ${colors.primary}`
    }
  }}
`

class Anchor extends Component {
  render() {
    return (
      <StyledLink
        to={this.props.to}
        flavor={this.props.flavor}
        style={this.props.style}
        className={this.props.className}
      >
        {this.props.children}
      </StyledLink>
    )
  }
}

export default Anchor
