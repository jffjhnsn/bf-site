import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import SEO from "../components/seo"
import Container from "../components/container"

// home page content:
import Hero from "../components/page-content/home/hero"
import Benefits from "../components/page-content/home/benefits"
import Feature from "../components/page-content/home/feature"
import CTA from "../components/page-content/home/cta"

const LandingPage = () => (
  <Layout>
    <SEO />
    <header>
      <HeroContainer>
        <Hero />
      </HeroContainer>
    </header>
    <Background primary>
      <BenefitsContainer>
        <Benefits />
      </BenefitsContainer>
    </Background>
    <FeatureContainer>
      <Feature />
    </FeatureContainer>
    <footer>
      <Background primary>
        <CTAContainer>
          <CTA />
        </CTAContainer>
      </Background>
    </footer>
  </Layout>
)

const Background = styled.div`
  background-color: ${props => (props.primary ? '#f1f6f9' : '#fff')};
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

const CTAContainer = styled(Container)`
  background-color: #f1f6f9;
  padding-top: 40px;
  padding-bottom: 40px;
`

export default LandingPage
