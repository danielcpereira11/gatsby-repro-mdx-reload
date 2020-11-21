/* eslint-disable react/display-name */
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

// Dependencies
import React from "react"
import { Global } from "@emotion/core"
import { MDXProvider } from "@mdx-js/react"
import Highlight, { defaultProps } from "prism-react-renderer"

// Components
import { config } from "@fortawesome/fontawesome-svg-core"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Footer } from "@components/footer/footer"
import baseStyles from "@styles/base.styles"
import { Header } from "@components/header/header"
import { DocsSidebar } from "@components/docs-sidebar/docs-sidebar"

import "@fortawesome/fontawesome-svg-core/styles.css"

import "@styles/bootstrap.scss"

config.autoAddCss = false

// Styles


const DocsLayout = ({ children }) => {
  const mdxComponents = {
    pre: props => {
      const className = props.children.props.className || ""
      const matches = className.match(/language-(?<lang>.*)/)
      return (
        <Highlight
          {...defaultProps}
          code={props.children.props.children}
          language={
            matches && matches.groups && matches.groups.lang
              ? matches.groups.lang
              : ""
          }
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      )
    },
  }

  return (
    <MDXProvider components={mdxComponents}>
      <Global styles={baseStyles} />
      <Header />
      <Row>
        <DocsSidebar />
        <Col as="main" md={9}>
          {children}
        </Col>
      </Row>
      <Footer />
    </MDXProvider>
  )
}

export default DocsLayout
