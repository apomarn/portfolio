import React, { Component } from 'react'
import styled from 'styled-components'
import { colors, textStyles, breakpoints } from '../styles'

const Separator = styled.div`
  width: 64px;
  height: 4px;
  background-color: ${colors.green};
  margin-top: 32px;
  margin-bottom: 32px;

  @media screen and (min-width: ${breakpoints.desktop}px) {
    width: 128px;
    height: 8px;
    margin-top: 48px;
  }
`

const Headline = styled.p`
  margin: 16px 0 32px;
  ${textStyles.h3}
`

const Container = styled.div`
  margin: 80px 16px 50px 16px;
  @media screen and (min-width: ${breakpoints.desktop}px) {
    margin: 80px 32px;
  }
`

const toolsImages = [
  'https://res.cloudinary.com/apomarn/image/upload/v1559266757/portfolio/react.js.png',
  'https://res.cloudinary.com/apomarn/image/upload/v1559272620/portfolio/handlebars.png',
  'https://res.cloudinary.com/apomarn/image/upload/v1559273120/portfolio/firebase.png',
  'https://res.cloudinary.com/apomarn/image/upload/v1559266761/portfolio/node.png',
  'https://res.cloudinary.com/apomarn/image/upload/v1559266758/portfolio/passport.js.png',
  'https://res.cloudinary.com/apomarn/image/upload/v1559266758/portfolio/mongoose.png',
  'https://res.cloudinary.com/apomarn/image/upload/v1559266758/portfolio/netlify.png',
  'https://res.cloudinary.com/apomarn/image/upload/v1559266758/portfolio/style-component.png',
  'https://res.cloudinary.com/apomarn/image/upload/v1559266758/portfolio/heroku.png',
  'https://res.cloudinary.com/apomarn/image/upload/v1559266757/portfolio/cloudinary.png',
  'https://res.cloudinary.com/apomarn/image/upload/v1559266757/portfolio/css.png',
  'https://res.cloudinary.com/apomarn/image/upload/v1559266757/portfolio/sass.png',
  'https://res.cloudinary.com/apomarn/image/upload/v1559266757/portfolio/tiled.png',
  'https://res.cloudinary.com/apomarn/image/upload/v1559278072/portfolio/js.png',
  'https://res.cloudinary.com/apomarn/image/upload/v1559266757/portfolio/bootstrap.png',
  'https://res.cloudinary.com/apomarn/image/upload/v1559266757/portfolio/express.png',
  'https://res.cloudinary.com/apomarn/image/upload/v1559266757/portfolio/bulma.png',
  'https://res.cloudinary.com/apomarn/image/upload/v1559266757/portfolio/ajax.png',
  'https://res.cloudinary.com/apomarn/image/upload/v1559266757/portfolio/github.png',
  'https://res.cloudinary.com/apomarn/image/upload/v1559266757/portfolio/auth0.png',
  'https://res.cloudinary.com/apomarn/image/upload/v1559266757/portfolio/api.png',
  'https://res.cloudinary.com/apomarn/image/upload/v1559266757/portfolio/phaser.png',
  'https://res.cloudinary.com/apomarn/image/upload/v1559266757/portfolio/webpack.png',
  'https://res.cloudinary.com/apomarn/image/upload/v1559266757/portfolio/mongodb.png',
  'https://res.cloudinary.com/apomarn/image/upload/v1559266757/portfolio/jquery.png',
  'https://res.cloudinary.com/apomarn/image/upload/v1559266757/portfolio/parsel.png',
  'https://res.cloudinary.com/apomarn/image/upload/v1559266757/portfolio/figma.png',
  'https://res.cloudinary.com/apomarn/image/upload/v1559266756/portfolio/babel.png',
  'https://res.cloudinary.com/apomarn/image/upload/v1559266756/portfolio/git.png',
  'https://res.cloudinary.com/apomarn/image/upload/v1559266756/portfolio/html.png'
]

const ToolsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`
const ToolsImages = styled.img`
  border: 2px solid ${colors.green};
  border-radius: 20px;
  margin: 15px 5px;
  padding: 5px 10px;
  width: 60px;
  height: 40px;

  &:hover {
    box-shadow: 5px 10px ${colors.gray};
  }
`

class Tools extends Component {
  render() {
    return (
      <Container>
        <Separator />
        <Headline>
          My <strong>Tools</strong>
        </Headline>
        <ToolsContainer>
          {toolsImages.map(image => {
            return <ToolsImages src={image} key={image} />
          })}
        </ToolsContainer>
      </Container>
    )
  }
}

export default Tools
