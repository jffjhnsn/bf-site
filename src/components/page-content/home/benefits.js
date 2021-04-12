import React from 'react'
import styled from 'styled-components'

const Benefits = props => (
  <Grid>
    <Title className="bodyTitle">Live</Title>
    <Text className="bodyText">
      Curabitur ultricies purus velit, at condimentum eros gravida at. Curabitur mattis 
      eget massa ut congue. Curabitur fermentum ligula in urna vehicula iaculis. Vivamus 
      vitae urna ante. Pellentesque interdum ante mollis est feugiat, id sollicitudin libero 
      laoreet.
    </Text>
    <Title className="bodyTitle">Shop</Title>
    <Text className="bodyText">
      Nam mattis nulla et nulla vestibulum molestie id ut justo. Morbi sagittis 
      accumsan libero vitae dictum. Fusce vitae tellus tempus massa euismod tincidunt eu vitae 
      magna. Integer non pulvinar ex, non pharetra sem. Mauris consequat enim ex, posuere 
      pellentesque elit scelerisque non.
    </Text>
    <Title className="bodyTitle">Pay</Title>
    <Text className="bodyText">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      eu neque eu dolor suscipit porttitor vel vitae mauris. Quisque vel 
      tortor vulputate, fringilla lorem pharetra, dictum nisl. Aenean vulputate sem leo, 
      id tempus ipsum iaculis et.
    </Text>
  </Grid>
)

const Grid = styled.div`
  @media (min-width: 670px) {
    display: grid;
    grid: repeat(2,auto)/auto-flow 1fr;
    grid-gap: 0 41px;
  }
`
const Title = styled.h1`
  color: #2f64ec;
  padding: 8px 0 12px;
`
const Text = styled.p`
  margin-bottom: 2em;
  color: #443c5d;
  @media (min-width: 670px) {
    margin: 0;
  }
`

export default Benefits