import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import SEO from "../components/seo"
import Container from "../components/container"

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
      <CTAContainer>
        <CTA />
      </CTAContainer>
    </footer>
  </Layout>
)

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

const CTAContainer = styled(Container)`
  background-color: #f1f6f9;
  padding-top: 40px;
  padding-bottom: 40px;
`

export default LandingPage
