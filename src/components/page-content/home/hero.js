import React from 'react'
import styled from 'styled-components'

const Hero = props => (
  <>
    <Headline className="sectionTitle">Composable SaaS commerce infrastructure</Headline>
    <BodyText className="bodyText">Our serverless cloud platform enables merchants, 
      marketplaces and enterprises to focus on building their product and not 
      payments and commerce tools.
    </BodyText>
    <ButtonGroup>
      {/* TODO: apply button colors via color variables */}
      <li style={{ marginRight: `20px` }}>
        <Button 
          backgroundColor="#2f64ec" 
          color="white" 
          href="https://styled-components.com/docs/basics#passed-props">
            Start Now
        </Button>
      </li>
      <li><Button href="https://github.com/KyleAMathews/typography.js">Contact Us</Button></li>
    </ButtonGroup>
  </>
)

export default Hero

const Headline = styled.h1`
  font-size: 32px;

  @media (min-width: 670px) {
    max-width: 440px;
    font-size: 40px;
  }
`
const BodyText = styled.p`
  margin: 25px 0;
  @media (min-width: 670px) {
    margin: 25px 56% 60px 0;
  }
`

const ButtonGroup = styled.ul`
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
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${props => props.color || "#2f64ec"};
  text-decoration: none;
  -webkit-transition: all .15s ease;
  transition: all .15s ease;

  &:hover,
  &:active,
  &:focus {
    color: ${props => ( props.color ? "white" : "#4d79eb" )};
    background-color: ${props => ( props.backgroundColor ? "#4d79eb" : "white")};
    -webkit-transform:translateY(-1px);
    transform:translateY(-1px);
    -webkit-box-shadow:0 13px 27px -5px rgba(50,50,93,.25),0 8px 16px -8px rgba(0,0,0,.3),0 -6px 16px -6px rgba(0,0,0,.025);
    box-shadow:0 13px 27px -5px rgba(50,50,93,.25),0 8px 16px -8px rgba(0,0,0,.3),0 -6px 16px -6px rgba(0,0,0,.025);
    -webkit-box-shadow:0 7px 14px rgba(50,50,93,.1),0 3px 6px rgba(0,0,0,.08);
    box-shadow:0 7px 14px rgba(50,50,93,.1),0 3px 6px rgba(0,0,0,.08)
  }


`