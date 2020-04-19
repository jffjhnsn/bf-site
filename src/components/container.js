import React from "react"
import styled from "styled-components"

const Container = styled.div`
  max-width: 1040px; // large
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
`

export default ({ children }) => (
  <Container className={`container`}>{children}</Container>
)