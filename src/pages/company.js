import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"
import styled from "styled-components"

const CompanyPage = () => (
  <Layout>
    <SEO title="Company" />
    <CompanyContainer>
      <Headline className="sectionTitle">About Us</Headline>
      <BodyText className="bodyText">Nam mattis nulla et nulla vestibulum molestie id ut justo. Morbi sagittis accumsan libero vitae dictum. Fusce vitae tellus tempus massa euismod tincidunt eu vitae magna. Integer non pulvinar ex, non pharetra sem. Mauris consequat enim ex, posuere pellentesque elit scelerisque non.</BodyText>
    </CompanyContainer>
  </Layout>
)

const CompanyContainer = styled(Container)`
  padding-top: 100px;
  padding-bottom: 80px;
`

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
    margin: 25px 12% 60px 0;
  }
`
export default CompanyPage