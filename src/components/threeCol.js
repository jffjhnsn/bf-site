import React from 'react'
// import Img from "gatsby-image";
import styled from 'styled-components'

const ThreeColSection = props => (
  <section id={props.id} className="container">
    <GridContainer>
      <Title className="bodyTitle">{props.leftTitle}</Title>
      <Text className="bodyText">{props.leftText}</Text>
      <Title className="bodyTitle">{props.centerTitle}</Title>
      <Text className="bodyText">{props.centerText}</Text>
      <Title className="bodyTitle">{props.rightTitle}</Title>
      <Text className="bodyText">{props.rightText}</Text>
    </GridContainer>
  </section>
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
  padding: 8px 0 10px;
`
const Text = styled.p`
  margin-bottom: 2em;
  @media (min-width: 670px) {
    margin: 0;
  }
`