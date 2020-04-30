import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"
import styled from "styled-components"

const ProductsPage = () => (
  <Layout>
    <SEO title="Products" />
    <ProductsContainer>
      <Headline className="sectionTitle">Products that fit your needs</Headline>
      <BodyText className="bodyText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ornare, dolor sed faucibus scelerisque, risus tortor congue augue, placerat ullamcorper metus turpis eu est. Ut condimentum, magna ac malesuada ultrices, orci felis rutrum tellus, sed luctus velit felis at neque. Fusce libero purus, fringilla ornare fermentum ac, hendrerit et diam. Sed scelerisque, ante nec tempor feugiat, sem diam sollicitudin eros, eleifend dignissim enim urna in nulla. Phasellus commodo vehicula odio et luctus. Nulla mollis dolor sapien, a imperdiet purus aliquam quis. Aliquam eu dapibus libero, vel ultricies turpis. Etiam quis augue nec mauris sagittis fringilla. Praesent at tempor augue, ut laoreet nisl. Etiam rhoncus interdum nunc, accumsan convallis quam tempus ut. Donec at orci nisi.</BodyText>
    </ProductsContainer>
  </Layout>
)

const ProductsContainer = styled(Container)`
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
export default ProductsPage