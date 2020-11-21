// import PropTypes from "prop-types"
import React, { FC } from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { companiesBannerStyles } from "./companies-banner.styles"

const CompaniesBanner: FC = () => {
  const data = useStaticQuery(graphql`
    query companiesBanner {
      allFile(filter: { relativeDirectory: { eq: "companies-banner" } }) {
        nodes {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
          id
        }
      }
    }
  `)

  return (
    <section id="companies-banner" css={companiesBannerStyles}>
      <Container>
        <Row>
          {data.allFile.nodes.map((image: ImageObject) => (
            <Col key={image.id}>
              <Img fluid={image.childImageSharp.fluid}></Img>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export { CompaniesBanner }
