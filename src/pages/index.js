import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"
import Hero from "../components/hero"
import ThreeColSection from "../components/threeCol"
import CTA from "../components/cta"
import styled from "styled-components"

import style from "./index.module.scss"

// console.log(style)

const IndexPage = () => (
  <Layout>
    <header>
      <section id={style.intro} className="container">
        <Hero
          headline="The cross-border payments platform"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eu neque eu dolor suscipit porttitor vel vitae mauris. Quisque vel 
          tortor vulputate, fringilla lorem pharetra, dictum nisl. Aenean vulputate sem leo, 
          id tempus ipsum iaculis et. "
          primaryButtonLink="https://styled-components.com/docs/basics#passed-props"
          primaryButtonText="Start Now"
          secondaryButtonLink="https://github.com/KyleAMathews/typography.js"
          secondaryButtonText="Contact Us"
        />
      </section>
    </header>
    <section id={style.benefits} className="container">
      <ThreeColSection  
        leftTitle="Quick integration"
        leftText="Curabitur ultricies purus velit, at condimentum eros gravida at. Curabitur mattis 
        eget massa ut congue. Curabitur fermentum ligula in urna vehicula iaculis. Vivamus 
        vitae urna ante. Pellentesque interdum ante mollis est feugiat, id sollicitudin libero 
        laoreet."
        centerTitle="Transfer safely"
        centerText="Nam mattis nulla et nulla vestibulum molestie id ut justo. Morbi sagittis 
        accumsan libero vitae dictum. Fusce vitae tellus tempus massa euismod tincidunt eu vitae 
        magna. Integer non pulvinar ex, non pharetra sem. Mauris consequat enim ex, posuere 
        pellentesque elit scelerisque non."
        rightTitle="Cross-border"
        rightText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        eu neque eu dolor suscipit porttitor vel vitae mauris. Quisque vel 
        tortor vulputate, fringilla lorem pharetra, dictum nisl. Aenean vulputate sem leo, 
        id tempus ipsum iaculis et."
      />
    </section>
    <CenteredSection className="container">
      <Title className="sectionTitle">Feature Breakdown</Title>
      <GridContainer>
        <Quote className="bodyText">
        Aenean in enim odio. Suspendisse et magna nibh. 
        Praesent justo quam, ornare vehicula maximus nec, consectetur eu ipsum. 
        </Quote>
        <BodyText className="bodyText">
          Curabitur ultricies purus velit, at condimentum eros gravida at. Curabitur mattis 
          eget massa ut congue. Curabitur fermentum ligula in urna vehicula iaculis. Vivamus 
          vitae urna ante. Pellentesque interdum ante mollis est feugiat, id sollicitudin libero 
          laoreet. Integer sit amet rutrum risus. Maecenas sagittis placerat nulla id commodo. 
          Mauris egestas dolor ac fermentum sodales. Nulla faucibus nisl at mauris mollis, sed 
          rutrum nisl consequat.
        </BodyText>
      </GridContainer>
    </CenteredSection>
    <footer>
      <CTA />
    </footer>
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
  color: #20a86c;

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
