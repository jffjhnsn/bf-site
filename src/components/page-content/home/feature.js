import React from 'react'
import styled from 'styled-components'

const Feature = props => (
  <>
    <Title className="sectionTitle">Feature Breakdown</Title>
    <Grid>
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
    </Grid>
  </>
)

const Grid = styled.div`
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

export default Feature