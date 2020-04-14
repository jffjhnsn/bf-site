import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"
import Hero from "../components/hero"
import ThreeColSection from "../components/threeCol"
import styled from "styled-components"

import style from "./index.module.scss"

// console.log(style)

const IndexPage = () => (
  <Layout>
    <header>
      <section id={style.intro} className="container">
        <Hero
          headline="The cross-border payments platform"
          text="Individuals and merchants use BorderFreePay to transfer 
            and spend money across borders. We provide a complete set of 
            building blocks to support virtually any business model, 
            including on-demand businesses, e‑commerce, crowdfunding, 
            fintech, and travel and events. "
          primaryButtonLink="https://styled-components.com/docs/basics#passed-props"
          primaryButtonText="Start Now"
          secondaryButtonLink="https://github.com/KyleAMathews/typography.js"
          secondaryButtonText="Contact Us"
        />
      </section>
    </header>
    <ThreeColSection  
      leftTitle="Integrate quickly"
      leftText="Building the payments infrastructure for your platform 
        used to be a big undertaking—no longer. Take advantage of pre-made 
        UI components to launch faster and simplify operations. Sign up 
        new users on your platform and get them paid—quickly."
      centerTitle="Customize"
      centerText="Connect is API-first and lets you design the best experience 
      for your platform. You can customize onboarding, set payout timing, allow 
      complex money movement, and get integrated financial reporting. You own 
      the experience from end to end."
      rightTitle="Go global"
      rightText="Pay out sellers in 30+ countries around the world. You don’t 
      need separate local subsidiaries and banking relationships in each 
      market—Connect takes care of the complexity. Connect’s functionality 
      is standardized, regardless of the country."
    />
    <CenteredSection className="container">
      <Title className="sectionTitle">Routing Payments</Title>
      <GridContainer>
        <Quote className="bodyText">
          A powerful routing and payout engine that makes 
          it easy to send money to recipients, no matter your business model.
        </Quote>
        <BodyText className="bodyText">
          Connect will automatically track balances, batch earnings into payouts, time 
          transfers with local cutoffs, and retry failed transfers. You can also incorporate 
          advanced flows like Account Debits, one-to-many payments, and others. Connect’s 
          payout engine lets you specify payout timing for your users (daily, weekly or monthly). 
          Connect lets you get recipients paid faster and removes errors and reconciliation work. 
        </BodyText>
      </GridContainer>
    </CenteredSection>
  </Layout>
)

const CenteredSection = styled.div`

`

const GridContainer = styled.div`
  @media (min-width: 880px) {
    display: grid;
    grid: auto/340px 1fr;
    grid-gap: 0 47px;
  }
`

const Title = styled.h1`
  font-size: 21px;
  line-height: 32px;
  padding-top: 100px;
  margin-bottom: 20px;
  text-align: center;
`

const Quote = styled.p`
  margin-bottom: .8em;
  font-size: 24px;
  line-height: 36px;
  color: #3ecf8e;

  @media (min-width: 670px) {
    text-align: center;
  }

  @media (min-width: 880px) {
    margin: 0;
    text-align: right;
    font-size: 26px;
    line-height: 39px;
  }
`

const BodyText = styled.p`
  @media (min-width: 880px) {
    margin-right: 35px;
  }
`



// const Intro = styled(Hero)`
//   .sectionTitle {
//     background-color: tomato;      
//   }
// `

export default IndexPage
