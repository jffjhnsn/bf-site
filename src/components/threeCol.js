import React from 'react'
// import Img from "gatsby-image";
import styled from 'styled-components'

const ThreeColSection = props => (
  <GridContainer>
    <Title className="bodyTitle">{props.leftTitle}</Title>
    <Text className="bodyText">{props.leftText}</Text>
    <Title className="bodyTitle">{props.centerTitle}</Title>
    <Text className="bodyText">{props.centerText}</Text>
    <Title className="bodyTitle">{props.rightTitle}</Title>
    <Text className="bodyText">{props.rightText}</Text>
  </GridContainer>
)

export default ThreeColSection

const GridContainer = styled.div`
  @media (min-width: 670px) {
    display: grid;
    grid: repeat(2,auto)/auto-flow 1fr;
    grid-gap: 0 41px;
  }
`
const Title = styled.h1`
  color: #2f64ec;
  padding: 8px 0 12px;
`
const Text = styled.p`
  margin-bottom: 2em;
  color: #443c5d;
  @media (min-width: 670px) {
    margin: 0;
  }
`