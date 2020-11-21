/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

// Dependencies
import React, { FC } from "react"
import { Global } from "@emotion/core"

// Components
import { config } from "@fortawesome/fontawesome-svg-core"
import { Footer } from "@components/footer/footer"
import baseStyles from "@styles/base.styles"
import { Header } from "@components/header/header"

import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false

// Styles
import "@styles/bootstrap.scss"

// import "normalize.css"
// import "typeface-montserrat"
// import "typeface-open-sans"

const Layout: FC = ({ children }) => {
  return (
    <>
      <Global styles={baseStyles} />
      <Header />
      <main>{children}</main> 
      <Footer />
    </>
  )
}

export { Layout }
