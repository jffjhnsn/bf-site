import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Logo from "../assets/company-logo.svg"
import Container from "./container"

const Header = ({ siteTitle }) => (
  <header>
    <HeaderContainer>
      <Link to="/">
        <Logo height="59" width="189" alt={siteTitle}/>
      </Link>
      <NavLinkList>
        <ListLink to="/products/">Products</ListLink>
        <ListLink to="/company/">Company</ListLink>
      </NavLinkList>
    </HeaderContainer>
  </header>
)

const HeaderContainer = styled(Container)`
  padding-top: 20px;
`

const ListLink = props => (
  <StyledListLink>
    <li>
      <Link className="bodyTitle" to={props.to}>{props.children}</Link>
    </li>
  </StyledListLink>
)

const StyledListLink = styled.div`
  display: inline-block;
  margin-right: 1rem;  
  // text-decoration: none;

`

const NavLinkList = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  list-style: none;
  float: right;
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
