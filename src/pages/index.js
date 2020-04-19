import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import SEO from "../components/seo"
// import Image from "../components/image"
// import { Link } from "gatsby"

// Landing page content:
import Hero from "../components/landingPage/hero"
import Benefits from "../components/landingPage/benefits"
import Feature from "../components/landingPage/feature"
import CTA from "../components/landingPage/cta"

const LandingPage = () => (
  <Layout>
    <SEO title="Home" />
    <header>
      <HeroContainer>
        <Hero />
      </HeroContainer>
    </header>
    <BenefitsContainer>
      <Benefits />
    </BenefitsContainer>
    <FeatureContainer>
      <Feature />
    </FeatureContainer>
    <footer>
      <CTA />
    </footer>
  </Layout>
)

const Container = styled.section`
  max-width:1040px;
  margin:0 auto;
  padding:0 20px;
  width:100%;
`

const HeroContainer = styled(Container)`
  padding-top: 160px;
  padding-bottom: 120px;
  // NOTE: Can target children like so:
  // .sectionTitle {
  //   color: forestgreen;
  //   font-size: 20px;
  // }
`
const BenefitsContainer = styled(Container)`
  background-color: #f1f6f9;
  padding-top: 80px;
  padding-bottom: 80px;
`

const FeatureContainer = styled(Container)`
  padding-bottom: 60px;
`

export default LandingPage
