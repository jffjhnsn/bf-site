import React from 'react'
import styled from 'styled-components'

const CTA = () => (
  <>
    <FlexContainer className="container">
      <Content>
        <Title className="sectionTitle">
          <Subtitle>Ready to get started?</Subtitle>
          Get in touch or create an account.
        </Title>
      </Content>
      <ButtonList>
        {/* TODO: apply button colors via color variables */}
        <li><Button backgroundColor="#2f64ec" color="white" href="/">Contact us</Button></li>
        <li><Button href="/">Create account</Button></li>
      </ButtonList>
    </FlexContainer>
  </>
)

export default CTA

const FlexContainer = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`

const Content = styled.div`
  -webkit-box-flex: 1;
  -ms-flex: 1 0 50%;
  flex: 1 0 50%;
`

const Title = styled.h1`
  font-weight: 400;
  font-size: 30px;
  line-height: 45px;
  margin: 0.75em 0;
`
const Subtitle = styled.span`
  display: block;
  font-weight: 300;
  color: #2f64ec;
`

const ButtonList = styled.ul`
  display: flex;
  -webkit-box-flex: 1;
  -ms-flex: 1 0 50%;
  flex: 1 0 50%;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin: -10px;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
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

  flex-shrink: 0;
  margin: 10px;
`