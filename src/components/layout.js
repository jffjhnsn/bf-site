import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Container from "./container"

import Header from "./header"
import "./layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="globalContent">
        <main>{children}</main>
        <footer>
          <GlobalFooter>
            © {new Date().getFullYear()}, {data.site.siteMetadata.title}
          </GlobalFooter>
        </footer>
      </div>
    </>
  )
}

const GlobalFooter = styled(Container)`
  // TODO: (fix) Changes below not being implemented
  padding-top: 60px;
  padding-bottom: 60px;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
