import React, { FC } from "react"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

import { header, navigation } from "./header.styles"
// import developersMenuConfig from "@configs/menus/developers-menu.config"
// import platformMenuConfig from "@configs/menus/platform-menu.config"
//
// import { PlatformMenu } from "@components/platform-menu/platform-menu"
// import { DevelopersMenu } from "@components/developers-menu/developers-menu"


const Header: FC = () => (
  <header id="main-header" css={header}>
    {
      <Container>
        <Navbar expand="lg" css={navigation}>
          <Navbar.Brand href="/">
            {/* <img alt="Logo" src={logo} /> */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <FontAwesomeIcon icon={faBars} />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            {/*<Nav>*/}
            {/*  <PlatformMenu*/}
            {/*    title={platformMenuConfig.title}*/}
            {/*    description={platformMenuConfig.description}*/}
            {/*    menuItems={platformMenuConfig.menuItems}*/}
            {/*  />*/}
            {/*  <DevelopersMenu*/}
            {/*    title={developersMenuConfig.title}*/}
            {/*    description={developersMenuConfig.description}*/}
            {/*    sections={developersMenuConfig.sections}*/}
            {/*  />*/}
            {/*  <Nav.Link href="/pricing">Pricing</Nav.Link>*/}
            {/*</Nav>*/}
            <Nav className="ml-auto justify-content-end right-side">
              <Nav.Link className="blue" href="/contact">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    }
  </header>
)

Header.defaultProps = {
  siteTitle: ``,
}

export { Header }
