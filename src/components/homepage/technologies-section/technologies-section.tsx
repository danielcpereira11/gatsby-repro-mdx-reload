import React, { FC } from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { technologiesSectionStyles } from "./technologies-section.styles"
import { TechnologiesCarousel } from "@components/technologies-carousel/technologies-carousel"

const TechnologiesSection: FC = () => {
  return (
    <section
      className="technologies-section"
      css={technologiesSectionStyles.section}
    >
      <Container>
        <Row>
          <Col>
            <h2 css={technologiesSectionStyles.title}>
              Wide Range of Supported Technologies
            </h2>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col className="px-0">
            <TechnologiesCarousel />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export { TechnologiesSection }
