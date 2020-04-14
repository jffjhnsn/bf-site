import React from 'react'
// import Img from "gatsby-image";
import styled from 'styled-components'

const Hero = props => (
  <>
    <Headline className="sectionTitle">{props.headline}</Headline>
    <BodyText className="bodyText">{props.text}</BodyText>
    <ButtonList>
      {/* TODO: apply button colors via color variables */}
      <li style={{ marginRight: `20px` }}><Button backgroundColor="#2f64ec" color="white" href={props.primaryButtonLink}>{props.primaryButtonText}</Button></li>
      <li><Button href={props.secondaryButtonLink}>{props.secondaryButtonText}</Button></li>
    </ButtonList>
  </>
)

export default Hero

const Headline = styled.h1`
  font-size: 32px;

  @media (min-width: 670px) {
    max-width: 420px;
    font-size: 40px;
  }
`
const BodyText = styled.p`
  margin: 25px 0;
  @media (min-width: 670px) {
    margin: 25px 56% 60px 0;
  }
`

const ButtonList = styled.ul`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
`

const Button = styled.a`
  white-space: nowrap;
  display: inline-block;
  height: 40px;
  line-height: 40px;
  padding: 0 14px;
  -webkit-box-shadow: 0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08);
  box-shadow: 0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08);
  background-color: ${props => props.backgroundColor || "white"};
  border-radius: 4px;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: .025em;
  color: ${props => props.color || "#2f64ec"};
  text-decoration: none;
  -webkit-transition: all .15s ease;
  transition: all .15s ease;
`